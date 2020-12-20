import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startRegister } from '../../Actions/authActions';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const RegisterScreen = () => 
{

///////////////////////////************************////////////////////////


/////////////// BTN BACK /////////////////////////

    const history = useHistory();

    const handleBack = ( event ) =>
    {
        event.preventDefault();
        history.push( "/login" );
    };

///////////////////////////////////////////////////



//////////////// REGISTER ///////////////////////


//--------- GET DATA -------------//

    const initialValues =
    {
        name : "king",
        email : "king@gmail.com",
        password : "123456",
        password2 : "123456"
    };

    const [ formValues, handleInputChange ] = useForm( initialValues );

    const { name, email, password, password2 } = formValues;

//----------------------------------\\



//--------- DISPATCH DATA -------------//

    const dispatch = useDispatch();

    const handleSubmit = ( event ) =>
    {
        event.preventDefault();
        
        dispatch( startRegister( formValues ) );

    };

//----------------------------------\\


///////////////////////////////////////////////////

///////////////////////////************************////////////////////////

    return (

        <div className="loginBox">

            <form onSubmit={ handleSubmit } >

                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Name" name="name" autoComplete="off" value={ name } onChange={ handleInputChange } />
                </div>

                <div className="form-group mt-3">
                    <input className="form-control" type="email" placeholder="Email" name="email" autoComplete="off" value={ email } onChange={ handleInputChange } />
                </div>

                <div className="form-group mt-3">
                    <input className="form-control" type="password" placeholder="Password" name="password" autoComplete="off" value={ password } onChange={ handleInputChange } />
                </div>

                <div className="form-group mt-3">
                    <input className="form-control" type="password" placeholder="Confirm Password" name="password2" autoComplete="off" value={ password2 } onChange={ handleInputChange } />
                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-outline-primary form-control">Register</button>
                </div>

                <div className="form-group mt-2 text-center">
                    <button onClick={ handleBack } className="btn btn-outline-primary form-control"><i className="fas fa-angle-double-left"></i></button>
                </div>

            </form>

    </div>

    );
};

//////---------------------------------------------->>>>>

export default RegisterScreen;
