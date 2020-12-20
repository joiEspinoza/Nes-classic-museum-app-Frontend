import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { startGameRegisterAction } from '../../Actions/gameActions';
import { closeModalAction } from '../../Actions/uiActions';
import { useForm } from '../../Hook/useForm';
import "../../Style/App.css";

//////<<<<<------------------------------------------------``

const ModalRegister = () => 
{

///////////////////////////************************////////////////////////


//---------\\ MODAL SETTINGS //---------\\ 

    const { openModal } = useSelector( state => state.ui );

    const customStyles = 
    {
        content : 
        {

            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'

        }

    };

    if( process.env.NODE_ENV !== "test" )
    {
        Modal.setAppElement('#root');
    };

//----------------------------------\\

    const dispatch = useDispatch();

    const handleCloseModal = ( event ) =>
    {
        event.preventDefault();
        reset();
        dispatch( closeModalAction() );
    };

////////////////////// CREATE GAME //////////////////////


    const initialForm = 
    {
        nameGame : "",
        company : "",
        gender : "",
        platform : "",
        launchYear : "",

    };

    const [ formValues, handleInputChange, reset ] =  useForm( initialForm );

    const { nameGame, company, gender, platform, launchYear } = formValues;

    const { uid } = useSelector( state => state.auth );

    const { platform:platformState } = useSelector( state => state.game );

    const handleRegisterGame = ( event ) =>
    {
        
        event.preventDefault();

        formValues.user = uid;
        
        dispatch( startGameRegisterAction( formValues, platformState ) );

    };

///////////////////////////////////////////////////


///////////////////////////************************////////////////////////

    return (

            <div>

                <Modal
                    isOpen={ openModal }
                    closeTimeoutMS={ 200 }
                    onRequestClose={ handleCloseModal }
                    style={ customStyles }
                    className="modal modalRegister"
                    overlayClassName="modal-fondo"
                    ariaHideApp={ !process.env.NODE_ENV === "test" }
                >
        
                   <div className="container">

                        <center><h5 className="mt-3 text-muted" >Registro Nuevo</h5></center>

                        <form onSubmit={ handleRegisterGame } >

                            <div className="form-group mt-3">

                                <label className="text-muted"><small>Nombre Juego</small></label>
                                <input className="form-control" type="text" autoComplete="off" name="nameGame" value={ nameGame } onChange={ handleInputChange } />

                            </div>

                            <div className="form-group mt-3">

                                <label className="text-muted"><small>Compañia</small></label>
                                <input className="form-control" type="text" autoComplete="off" name="company" value={ company } onChange={ handleInputChange }  />

                            </div>

                            <div className="form-group mt-3">

                                <label className="text-muted"><small>Genero</small></label>
                                <select className="form-control" id="gender" name="gender" value={ gender } onChange={ handleInputChange }>

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
                                <select className="form-control" id="platform" name="platform" value={ platform } onChange={ handleInputChange }>

                                    <option></option>
                                    <option>Nes</option>
                                    <option>Snes</option>
                                    <option>N64</option>

                                </select>

                            </div>

                            <div className="form-group mt-3">

                                <label className="text-muted"><small>Fecha Lanzamiento</small></label>
                                <input type="date" className="form-control" name="launchYear" value={ launchYear } onChange={ handleInputChange }/>

                            </div>

                            <div className="form-group mt-3">

                                <button className="btn btn-outline-primary form-control">Registrar</button>

                            </div>

                            <div className="form-group mt-3">

                                <button onClick={ handleCloseModal } className="btn btn-outline-primary form-control">Cerrar</button>

                            </div>

                        </form>

                    </div>

                </Modal>

        </div>
    );
};

//////---------------------------------------------->>>>>

export { ModalRegister };
