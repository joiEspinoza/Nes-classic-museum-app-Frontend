import { types } from "../Types/types";

//////<<<<<------------------------------------------------``

const initialState = 
{
    games : [],
    activeGame : {},
    platform : ""
};

const gameReducer = ( state = initialState, action ) =>
{
    switch( action.type ) 
    {

        case types.gameLoad : return { ...state, games : [ ...action.payload ] };

        case types.gamesSetPlataform : return { ...state, platform : action.payload };

        case types.gameSetActive : return { ...state, activeGame : { ...action.payload } };

        case types.gamesClear : return { ...initialState };

        case types.gameClearSetActive : return { ...state, activeGame : {} };

        default : return state;

    };
};

//////---------------------------------------------->>>>>

export { gameReducer };