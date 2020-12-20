import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setActiveAction } from '../../Actions/gameActions';

//////<<<<<------------------------------------------------``

const Cards = () => 
{

///////////////////////////************************////////////////////////


//---------\\ GAMES DATA //---------\\ 

    const { games } = useSelector( state => state.game );

//----------------------------------\\ 


////////////////////// SELECT CARD //////////////////////

    const dispatch = useDispatch();

    const history = useHistory();

    const handleCard = ( event ) =>
    {
        const game = games.find( ( element ) => element._id === event.target.id );

        dispatch( setActiveAction( game ) );

        history.push("/card");

    };

///////////////////////////////////////////////////


///////////////////////////************************////////////////////////

    return (

        <>

            { games.map( ( element )=> (
                    
                <div key={ element._id } className="col-md-3 mt-3">
                    
                    <div className="card">

                        <div className="card-img">

                            <img onClick={ handleCard } className={`card-img-top-${ element.platform }`} id={ element._id } src={`./IMG/cards/${ element.platform }Cartridge.jpg`} alt="Cartridge"/>

                        </div>

                        <hr/>
                        
                        <div className="card-body">

                           <b><p className="card-text text-center">{element.nameGame}</p></b> 
                            
                        </div>

                    </div>

                </div>
            
            ) ) }

        </>
    );
};

//////---------------------------------------------->>>>>

export default Cards;
