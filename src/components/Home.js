import React from 'react'
import Header from './Header/Header'
import {ReactComponent as MapLogo} from '../Images/connectedmap.svg'
import "./Home.scss"
import {ReactComponent as CreateEv} from '../Images/undraw_date_picker_gorr.svg'
import {ReactComponent as Subscribe} from '../Images/undraw_happy_feeling_slmw.svg'
import {ReactComponent as Vendor} from '../Images/undraw_under_construction_-46-pa.svg'
import {ReactComponent as Globe} from '../Images/undraw_world_re_768g.svg'
import {ReactComponent as Organizer} from '../Images/undraw_events_re_98ue.svg'
import {ReactComponent as VendorR} from '../Images/undraw_street_food_re_uwex.svg'
import {ReactComponent as Subscriber} from '../Images/undraw_having_fun_re_vj4h.svg'

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
            <Globe className="maplogo" />
            </div>
            </div>

            {/* second section 2.1  */}
            <section className="s2">
                <h1 className="heading">Your roles</h1>
                <div className="row s2-parent-card justify-content-between">

                    <div className="s2-card shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <Organizer className="cardimage"/>
                    <h2>Organizer</h2>
                    <p>An organizer is a role which can create a event, hire vendors, manage subscribers.</p>
                    </div>

                    <div className="s2-card shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <VendorR className="cardimage"/>
                    <h2>Vendor</h2>
                    <p>A vendor is a role which can provide service to an event by placing bid on that particular event</p>
                    </div>

                    <div className="s2-card shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <Subscriber className="cardimage" />
                    <h2>Subscriber</h2>
                    <p>An event subscriber can also be called as an attendee who can get updates of that particular event</p>
                    </div>


                </div>
            </section>
            

            {/* second section 2.1  */}




            {/* start of the second section  */}
            <div className="secondsection">
            <h1 className="heading">Steps Involved</h1>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <CreateEv height={350} width={600} />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h2>Create an Event</h2>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
            </div>
            <div className="row">
                <div className="alignright col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2>Subscribe an Event</h2>
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
                    <h2>Vendor an Event</h2>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
            </div>


            </div>

            </div>
        </div>
    );
}

export default Home;