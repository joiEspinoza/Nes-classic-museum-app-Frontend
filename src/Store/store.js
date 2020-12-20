import { rootReducer } from "../Reducers/rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "../Helpers/state";

//////<<<<<------------------------------------------------``


//---------\\ STATE LOAD //---------\\ 

        const initialData = loadState() || {};

//-----------------------------------\\ 



//---------\\ ADAPTADOR NAVEGADOR //---------\\ 

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//--------------------------------------------\\ 


//////////////// STORE ///////////////////

const store = createStore( 
    
    rootReducer, 
    initialData,
    composeEnhancers( applyMiddleware( thunk ) )  
    
);

///////////////////////////////////////////////////


//---------\\ STATE SAVE //---------\\ 

  store.subscribe( ()=> saveState( store.getState() ) );

//-----------------------------------\\ 



//////---------------------------------------------->>>>>

export { store };