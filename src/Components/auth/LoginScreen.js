import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StartLogin } from '../../Actions/authActions';
import { useForm } from '../../Hook/useForm';
import "../../Style/Login.css";

//////<<<<<------------------------------------------------

const LoginScreen = () => 
{

/////////////////////// LOGIN //////////////////////

//--------- GET DATA -------------//

    const initialValues =
    {
        email: "king@gmail.com",
        password: "123456"
    };

    const [ formValues, handleInputChange ] = useForm( initialValues );

    const { email, password } = formValues;

//----------------------------------\\ 


//--------- DISPATCH DATA -------------//

    const dispatch = useDispatch();

    const handleLogin = ( event ) =>
    {
        event.preventDefault();

        dispatch( StartLogin( formValues ) );
    };

//----------------------------------\\ 

///////////////////////////////////////////////////


///////////////////////////************************////////////////////////

    return (

            <div className="loginBox">

                <form>

                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" name="email" autoComplete="off" value={ email } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group mt-3">
                        <input className="form-control" type="password" placeholder="Password" name="password" autoComplete="off" value={ password } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group mt-3">
                        <button onClick={ handleLogin } className="btn btn-outline-primary form-control">Login</button>
                    </div>

                    <div className="form-group mt-2 text-center">
                        <Link className="link" to="/register" >Create account here</Link>
                    </div>


                </form>

            </div>

    );
    
};

//////---------------------------------------------->>>>>

export default LoginScreen;
