import Swal from "sweetalert2";
import { conexionBackEnd } from "../Backend/conexionConBackend";
import { types } from "../Types/types";

//////<<<<<------------------------------------------------``

const startRegister = ( { name, email, password } ) =>
{
    return async () => 
    {
        try 
        {
            const response = await conexionBackEnd( "auth/register", { name, email, password }, "POST" );

            const data = await response.json();  
            
            console.log( data );

            if( data.ok )
            {
                return Swal.fire( "Listo","Registro exitoso","success" );

            }
            else
            {
                if( !data.errors )
                {
                    return Swal.fire( "error", data.msg, "error" );
                };

                if( data.errors.password )
                {
                    return Swal.fire( "error", data.errors.password.msg, "error" );
                };

                if( data.errors.email )
                {
                    return Swal.fire( "error", data.errors.email.msg, "error" );
                };

                if( data.errors.name )
                {
                    return Swal.fire( "error", data.errors.name.msg, "error" );
                };
            };

        } 
        catch( error ) 
        {
            console.log( error );
            Swal.fire( "error","Favor hablar con el administrador -Register error-","error" );
        }

    };
};


const StartLogin = ( { email, password } ) =>
{
    return async( dispatch ) =>
    {
        try 
        {
            const response =  await conexionBackEnd( "auth", { email, password }, "POST" );

            const data = await response.json();   

            if( data.ok )
            {
                const { uid, name } = data;

                dispatch( login( { uid, name } ) );
            }
            else
            {
                if( !data.errors )
                {
                    return Swal.fire( "error", data.msg, "error" );
                };

                if( data.errors.password )
                {
                    return Swal.fire( "error", data.errors.password.msg, "error" );
                };

                if( data.errors.email )
                {
                    return Swal.fire( "error", data.errors.email.msg, "error" );
                };

            };

        } 
        catch (error) 
        {
            console.log( error );
            Swal.fire( "error","Favor hablar con el administrador -Login error-","error" );
        };
    };
};


const login = ( user ) => ( { type : types.authLogin, payload : user } );


const logout = () =>
{
    localStorage.clear();
    return { type : types.authLogout };

}; 

//////---------------------------------------------->>>>>

export { startRegister, StartLogin, logout };


