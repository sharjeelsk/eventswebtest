import React from 'react'
import Header from './Header/Header'
import {ReactComponent as MapLogo} from '../Images/connectedmap.svg'
import "./Home.scss"
import {ReactComponent as CreateEv} from '../Images/undraw_Calendar_re_ki49.svg'
import {ReactComponent as Subscribe} from '../Images/undraw_App_wireframe_re_d467.svg'
import {ReactComponent as Vendor} from '../Images/undraw_approve_qwp7.svg'
import ShopIcon from '@mui/icons-material/Shop';
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <div>
            <Header id="1"/>
            <div className="padded-container ">
            <div className="firstsection row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

             <section>   
            <h1>Create, Subscribe, and Vendor any event </h1>
            <p>Excepteur reprehenderit anim culpa deserunt minim officia veniam. Adipisicing aute elit cupidatat Lorem labore aute amet tempor ut sit. Ea tempor exercitation sunt proident sit dolore. Incididunt veniam quis id ea veniam ex proident fugiat qui est dolor labore.</p>
            <div className="row">
            <Button  variant="contained" endIcon={<ShopIcon />}  >
            PlayStore
            </Button>
            <Button
            
            variant="outlined" startIcon={<ShopIcon />} >
            Appstore
            </Button>
               
            </div>
            </section>

            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <MapLogo height={450} width={700} />
            </div>
            </div>

            {/* start of the second section  */}
            <div className="secondsection">
            <h1 className="heading">Steps Involved</h1>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <CreateEv height={350} width={600} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h1>Create an Event</h1>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
            </div>
            <div className="row">
                <div className="alignright col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h1>Subscribe an Event</h1>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    
                    <Subscribe height={350} width={600} />

                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Vendor height={350} width={600} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h1>Vendor an Event</h1>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
            </div>


            </div>

            </div>
        </div>
    );
}

export default Home;