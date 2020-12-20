import { types } from "../Types/types";

//////<<<<<------------------------------------------------``

const initialState =
{
    
    logged : false,
    uid : null,
    name : null

};

const authReducer = ( state = initialState, action ) => 
{

    switch( action.type ) 
    {

        case types.authLogin : return { ...state, logged : true, ...action.payload };

        case types.authLogout : return { ...state, ...initialState };

        default: return state;

    };
    
};

//////---------------------------------------------->>>>>

export default authReducer;
