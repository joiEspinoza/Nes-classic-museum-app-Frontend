import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { gameReducer } from "./gameReducer";
import { uiReducer } from "./uiReducer";

//////<<<<<------------------------------------------------``

const rootReducer = combineReducers( 
    
    { 
        auth : authReducer, 
        ui : uiReducer, 
        game : gameReducer 
    } 

);

//////---------------------------------------------->>>>>

export { rootReducer };