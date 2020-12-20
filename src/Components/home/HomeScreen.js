import React from 'react'
import CardContainer from '../ui/CardContainer'
import { ModalRegister } from '../ui/Modal';
import SideBar from '../ui/SideBar'

//////<<<<<------------------------------------------------``

const HomeScreen = () => 
{

    return (

        <div className="row" >

            <aside className="col-md-2">

                <SideBar/>

            </aside>

            <article className="col-md-10" >

                <CardContainer/>

            </article>

            <ModalRegister/>

        </div>

    );

};

//////---------------------------------------------->>>>>

export default HomeScreen;
