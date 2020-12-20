import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startLoadGames } from '../Actions/gameActions';
import LoginScreen from '../Components/auth/LoginScreen';
import RegisterScreen from '../Components/auth/RegisterScreen';
import CardScreen from '../Components/card/CardScreen';
import HomeScreen from '../Components/home/HomeScreen';
import NavBar from '../Components/ui/NavBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//////<<<<<------------------------------------------------``

const RouterApp = () => 
{

///////////////////////////************************////////////////////////
  

//---------\\ DATA STATE //---------\\ 

    const { logged } = useSelector( state => state.auth );

    const { platform } = useSelector( state => state.game );

//----------------------------------\\ 



////////////////////// LOAD GAMES DATA BD //////////////////////

    const dispatch = useDispatch();

    useEffect(() => 
    {
        if( logged )
        {
            dispatch( startLoadGames( platform ) );
        };

    }, [ dispatch, logged, platform ])

//////////////////////////////////////////////////////////

   
///////////////////////////************************////////////////////////

    return (
            
        <Router>

            {/*////// RENDER NAVBAR ///////*/}
                  { logged && <NavBar/> }  
            {/******************************/}

            <div>

                <Switch>

                    {/*////// PUBLICA ///////*/}

                    <PublicRoute exact path="/login" component={ LoginScreen } isLoggedIn={ logged } />

                    <PublicRoute  exact path="/register" component={ RegisterScreen } isLoggedIn={ logged } />

                    {/*************************/}


                    {/*////// PRIVATE ///////*/}

                    <PrivateRoute exact path="/" component={ HomeScreen } isLoggedIn={ logged } />

                    <PrivateRoute exact path="/card" component={ CardScreen } isLoggedIn={ logged } />

                    {/*************************/}


                    {/*////// REDIRECT ///////*/}

                    <Redirect to="/" />

                    {/*************************/}

                </Switch>

            </div>

        </Router>

    );

};

//////---------------------------------------------->>>>>

export default RouterApp;
