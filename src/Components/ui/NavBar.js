import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logout } from '../../Actions/authActions';
import { clearGames, startSearchGames } from '../../Actions/gameActions';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const NavBar = () =>
{

///////////////////////////************************////////////////////////


//---------\\ USER NAME //---------\\ 

    const { name } = useSelector( state => state.auth );

    const history = useHistory();

    const dispatch = useDispatch();

//----------------------------------\\ 


//////////////////////////// SEARCH ////////////////////////


    const [ formValues, handleInputChange, reset ] = useForm( { searchGame : "" } );

    const { searchGame } = formValues;

    const handleSearch = () =>
    {
        if( searchGame === "" )
        {
            return Swal.fire( "error","Campo no debe estar vacio","error" );
        };

        history.push( "/" );

        reset();
        
        return dispatch( startSearchGames( searchGame ) );
    };

/////////////////////////////////////////////////////////////



////////////////////// LOGOUT //////////////////////

    
    const handleLogout = () =>
    {
        dispatch( logout() );

        dispatch( clearGames() );
        
        history.push( "/login" );
    };

///////////////////////////////////////////////////


///////////////////////////************************////////////////////////

    return (

            <nav className="navbar navbar-dark bg-dark mb4">

                <span className="navbar-brand"> { name }</span>

                <span className="navbar-brand">
                    

                    <div className="input-group">

                        <input type="text" className="form-control" name="searchGame" value={ searchGame } onChange={ handleInputChange } />
                        <div className="input-group-append">
                            <button  onClick={ handleSearch } className="btn btn-outline-danger" type="button">Search</button>
                        </div>

                    </div>


                </span>

                <button onClick={ handleLogout } className="btn btn-outline-danger">
                    
                    <i className="fas fa-sign-out-alt"></i>
                    <span> logout </span>
                    
                </button>

            </nav>

    );

};

//////---------------------------------------------->>>>>

export default NavBar;
