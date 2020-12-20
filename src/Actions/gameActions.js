import Swal from "sweetalert2";
import { conexionBackEnd } from "../Backend/conexionConBackend";
import { types } from "../Types/types";
import { closeModalAction } from "./uiActions";

//////<<<<<------------------------------------------------``


////////////////////// CREATE GAME //////////////////////

const startGameRegisterAction = ( game, plataform ) =>
{
    return async ( dispatch ) =>
    {
        try 
        {
            const response = await conexionBackEnd( "game/register", game, "POST" ); 
            
            const data = await response.json();

            if( data.ok )
            {
                Swal.fire( "Hecho",`${ data.nameGame } Registrado correctamente`,"success" );
                dispatch( startLoadGames(plataform) );
                dispatch( closeModalAction() );
            }
            else
            {
                if( !data.errors )
                {
                    return Swal.fire( "error", data.msg, "error" );
                };

                if( data.errors.nameGame )
                {
                    return Swal.fire( "error", data.errors.nameGame.msg, "error" );
                };

                if( data.errors.company )
                {
                    return Swal.fire( "error", data.errors.company.msg, "error" );
                };

                if( data.errors.gender )
                {
                    return Swal.fire( "error", data.errors.gender.msg, "error" );
                };

                if( data.errors.platform )
                {
                    return Swal.fire( "error", data.errors.platform.msg, "error" );
                };

                if( data.errors.launchYear )
                {
                    return Swal.fire( "error", data.errors.launchYear.msg, "error" );
                };
            };
        } 
        catch( error ) 
        {
            console.log( error );
            Swal.fire( "error","Favor hablar con el administrador -Game register error-","error" );
        };
    };
    
};

/////////////////////////////////////////////////////////


////////////////////// LOAD GAMES //////////////////////

const startLoadGames = ( platform ) =>
{
    return async( dispatch ) => 
    {
    
        try 
        {
            const response = await conexionBackEnd( "game/get" );

            const data = await response.json();

            if( data.ok )
            {
                if( platform === "" )
                {
                    dispatch( loadGames( data.games ) );
                }
                else
                {
                    dispatch( loadGames( data.games.filter( ( game ) => game.platform === platform ) ) );
                };
            }
            else
            {
                dispatch( loadGames( [] ) );
            };


        } 
        catch( error ) 
        {
            console.log( error );

            Swal.fire( "error","Favor hablar con el administrador -Game register error-","error" );
        };
        
    };
};

const loadGames = ( games ) => ( { type : types.gameLoad, payload : games } );

/////////////////////////////////////////////////////////



////////////////////// FILTER GAMES //////////////////////

const setPlataformGamesAction = ( platform ) => ( { type : types.gamesSetPlataform, payload : platform } );

/////////////////////////////////////////////////////////



////////////////////// UPDATE GAME //////////////////////

const startUpdateAction = ( gameUpdated ) =>
{
    return async ( dispatch ) => 
    {
        try 
        {
            console.log(gameUpdated._id);
            console.log(gameUpdated);

            const response = await conexionBackEnd( `game/${ gameUpdated._id }`, gameUpdated, "PUT" ); 

            const data = await response.json();

            dispatch( setActiveAction( data.game ) );

            Swal.fire( "Hecho","Juego Actualizado","success" );
            
        } 
        catch( error ) 
        {
            console.log( error );

            Swal.fire( "error","Favor hablar con el administrador -Game update error-","error" );
            
        };
    };
};

const setActiveAction = ( game ) => ( { type : types.gameSetActive, payload : game } );

/////////////////////////////////////////////////////////




////////////////////// DELETE GAME ////////////////////// 

const startDeleteGames = ( idGame, nameGame ) =>
{
    return async () => 
    {

        try 
        {

            const response = await conexionBackEnd( `game/${ idGame }`, [], "DELETE" );
            
            const data = await response.json();

            if( !data.ok )
            {
                return Swal.fire( "Error",data.msg,"error" );
            }
            else
            {
                return Swal.fire( "Listo",`${ nameGame } Eliminado`,"success" );
            };

        } 
        catch( error ) 
        {

            console.log( error );

            return Swal.fire( "error","Favor hablar con el administrador -Game Delete error-","error" );
            
        };

    };
};

/////////////////////////////////////////////////////////




////////////////////// SEARCH GAMES //////////////////////

const startSearchGames = ( name ) =>
{
    return async ( dispatch ) =>
    {
        try 
        {
            const response = await conexionBackEnd( "game/get" );

            const data = await response.json();

            if( data.ok )
            {
                const result = [...data.games.filter( ( game ) => 
                               game.nameGame.toLowerCase().includes( name.toLowerCase() ) )]

                if( result.length !== 0 )
                {

                    dispatch( loadGames( result ) );

                }
                else
                {
                    Swal.fire( "error",`No se encontro juego con valor ${ name }`,"error" );
                };

            };

        } 
        catch( error ) 
        {

            console.log( error );

            return Swal.fire( "error","Favor hablar con el administrador -Game Delete error-","error" );
            
        };
    };

};

/////////////////////////////////////////////////////////




////////////////////// CLEAR GAMES ////////////////////// 

const clearGames = () => ( { type : types.gamesClear } );

const setActiveClearAction = () => ( { type : types.gameClearSetActive } );

/////////////////////////////////////////////////////////





//////---------------------------------------------->>>>>

export 
{ 
    startGameRegisterAction, 
    startLoadGames,
    startSearchGames,
    setPlataformGamesAction, 
    clearGames, 
    setActiveAction, 
    startUpdateAction, 
    setActiveClearAction,
    startDeleteGames
};