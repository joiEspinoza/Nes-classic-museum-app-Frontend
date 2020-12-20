import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setActiveClearAction, startDeleteGames, startLoadGames, startUpdateAction } from '../../Actions/gameActions';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const CardScreen = () => 
{

///////////////////////////************************////////////////////////


//---------\\ BTN BACK //---------\\ 

    const history = useHistory();

    const { platform:platformState } = useSelector( state => state.game );

    const handleBack = ( event ) =>
    {
        event.preventDefault();

        dispatch( startLoadGames( platformState ) );
        
        dispatch( setActiveClearAction() );
        
        history.replace( "/" );
    };

//----------------------------------\\ 



//---------\\ STATE DATA //---------\\ 

    const { activeGame } = useSelector( state => state.game );

    const { nameGame, company, gender, platform, launchYear, _id } = activeGame;

//----------------------------------\\ 


////////////////////// ACTIVE INPUTS //////////////////////

    const [ enable, setEnable] = useState( false )

    const handleUpdateEnable = ( event ) =>
    {
        event.preventDefault();

        setEnable( true );

    };

//////////////////////////////////////////////////////


////////////////////// UPDATE //////////////////////

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm( { nameGame, company, gender, platform, launchYear, _id } );

    const handleUpdate = ( event ) =>
    {
        event.preventDefault();

        dispatch( startUpdateAction( formValues ) );

        setEnable( false );

    };

//////////////////////////////////////////////////////


////////////////////// DELETE //////////////////////

const handleDeleteGame = () =>
{

    dispatch( startDeleteGames( _id, nameGame ) );
    dispatch( startLoadGames( platformState ) );
    history.push( "/" );

};

//////////////////////////////////////////////////////



///////////////////////////************************////////////////////////


    return (

        <>

            <div className="containerCard">

                <div className="row cardBox">

                    {/*IMG*/}
                    <div className="col-md-6 imgBoxCard">

                        <img className={ `cardScreenImg${ platform }` } src={ `./IMG/cards/${ platform }Cartridge.jpg` } alt="Cartridge" />

                    </div>
                    {/*****/}

                    {/*Data*/}
                    <div className="col-md-6 infoBoxCard">

                        <form>

                            <div className="form-group">
                                <label className="text-muted"><small>Titulo</small></label>
                                <input type="text" disabled={ !enable } className="updateInput form-control" name="nameGame" value={ formValues.nameGame } onChange={ handleInputChange } />
                            </div>

                            <div className="form-group mt-3">
                                <label className="text-muted"><small>Compañia</small></label>
                                <input type="text" disabled={ !enable } className="updateInput form-control" name="company" value={ formValues.company } onChange={ handleInputChange } />
                            </div>

                            <div className="form-group mt-3">

                                <label className="text-muted"><small>Genero</small></label>
                                <select className="form-control" disabled={ !enable } name="gender" value={ formValues.gender } onChange={ handleInputChange }>

                                    <option></option>
                                    <option>Plataformas</option>
                                    <option>RPG</option>
                                    <option>Space Shooter</option>
                                    <option>Sport</option>
                                    <option>Puzzle</option>

                                </select>

                            </div>
                        

                            <div className="form-group mt-3">

                                <label className="text-muted"><small>Plataforma</small></label>
                                <select className="form-control" disabled={ !enable } name="platform" value={ formValues.platform } onChange={ handleInputChange }>

                                    <option></option>
                                    <option>Nes</option>
                                    <option>Snes</option>
                                    <option>N64</option>

                                </select>

                            </div>

                            <div className="form-group mt-3">
                                <label className="text-muted"><small>Año lanzamiento</small></label>
                                <input type="date" disabled={ !enable } className="updateInput form-control" name="launchYear" value={ formValues.launchYear } onChange={ handleInputChange } />
                            </div>

                            <div className="form-group mt-3">
                                <button className="btn btn-outline-primary" onClick={ handleBack }><i className="fas fa-angle-double-left"></i></button>
                                { !enable && <button className="btn btn-outline-primary" onClick={ handleUpdateEnable }><i className="fa fa-retweet" ></i></button> }
                                { enable && <button className="btn btn-outline-danger" onClick={ handleUpdate }><i className="fa fa-retweet" ></i></button> }
                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#ModalDelete"><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>

                        </form>

                    </div>
                    {/*****/}

                </div>

            </div>

            {/*Modal Delete*/}

            <div className="modal fade modalDelete" id="ModalDelete"  aria-labelledby="ModalDeleteLabel" aria-hidden="true">

                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content">

                        <div className="modal-body">

                            <h4>¿Estas seguro de eliminar { formValues.nameGame }?</h4>

                        </div>
                        

                        <div className="modal-footer">

                            <button  onClick={ handleDeleteGame } type="button" className="btn btn-danger" data-bs-dismiss="modal">Si</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>

                        </div>

                    </div>

                </div>

            </div>

            {/**************/}

        </>



    )
};

/////

export default CardScreen;
