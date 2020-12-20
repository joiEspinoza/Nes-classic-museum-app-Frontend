import React from 'react';
import { useDispatch } from 'react-redux';
import { setPlataformGamesAction } from '../../Actions/gameActions';
import { openModalAction } from '../../Actions/uiActions';


//////<<<<<------------------------------------------------``

const SideBar = () => 
{

///////////////////////////************************////////////////////////


////////////////////// BTN MODAL //////////////////////

    const dispatch = useDispatch();

    const handleOpenModal = () =>
    {
        dispatch( openModalAction() );
    };

/////////////////////////////////////////////////////////


////////////////////// FILTRO CATEGORIAS //////////////////////

const handleFilter = ( platform ) =>
{
    dispatch( setPlataformGamesAction( platform ) );
};

///////////////////////////////////////////////////////////////


//----------------------------------\\

///////////////////////////************************////////////////////////

    return (

        <>
    
            <div className="btnCategory" onClick={ () => { handleFilter( "Nes" ) } }>

                <img className="imgNes"  src="./IMG/logos/Nes.png" alt="Nes logo"/>

            </div>

            <div className="btnCategory" onClick={ () => { handleFilter( "Snes" ) } }>

                <img className="imgSnes" src="./IMG/logos/Snes.png" alt="Snes logo"/>

            </div>

            <div className="btnCategory" onClick={ () => { handleFilter( "N64" ) } }>

                <img className="imgN64" src="./IMG/logos/N64.png" alt="Snes logo"/>

            </div>

            <div className="btnCategory" onClick={ () => { handleFilter( "" ) } }>

                <img className="imgAll" src="./IMG/logos/All.png" alt="All logo"/>

            </div>

            <div onClick={ handleOpenModal } className="btnCategory">

                <h1>New</h1>

            </div>
        
        </>
    );

};

//////---------------------------------------------->>>>>

export default SideBar;
