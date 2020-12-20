import React from 'react';
import RouterApp from '../Router/RouterApp';
import { Provider } from "react-redux"
import { store } from '../Store/store';
import "../Style/App.css";

//////<<<<<------------------------------------------------``

const NesClassicMuseumApp = () => 
{

    return (


        <Provider store={ store }>

            <RouterApp/>

        </Provider>


    );
};

//////---------------------------------------------->>>>>

export default NesClassicMuseumApp
