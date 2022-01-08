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
import AppleIcon from '@mui/icons-material/Apple';
import Footer from './Footer/Footer'
import ShopIcon from '@mui/icons-material/Shop';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating'

const Home = () => {
    return (
        <div>
            <Header id="1"/>
            <div className="padded-container ">
            <div className="firstsection row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

             <section>   
            <h1>Create, Subscribe, and Vendor any event </h1>
            <p>
                Events is a platform where you can create an event, subscribe a event and vendor a event. All three roles in just one platform, everything on just a single click without any lag. come join our community and explore the world of events
            </p>
            <div className="row">
            <Button  variant="contained" endIcon={<ShopIcon />}  >
            PlayStore
            </Button>
            <Button
            variant="outlined" startIcon={<AppleIcon />} >
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
                <h1 className="headingwithpad">Your roles</h1>
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
            <h1 className="headingwithpad">Steps Involved</h1>
            <div className="row my-5">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <CreateEv className="svg" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h2>Create an Event</h2>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
            </div>
            <div className="row my-5">
                <div className="alignright col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2>Subscribe an Event</h2>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Subscribe className="svg" />
                </div>
            </div>

            <div className="row my-5">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Vendor className="svg" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h2>Vendor an Event</h2>
                    <p>Occaecat laborum cupidatat amet in laboris officia officia amet adipisicing dolor ex. Sunt velit veniam ut non Lorem cupidatat incididunt culpa occaecat. Commodo sit culpa laborum amet velit non ea. Cupidatat consequat cupidatat esse est quis eiusmod officia in dolor officia aliqua anim. Commodo magna eu mollit aliquip veniam officia ut laborum culpa esse veniam nulla in duis. Nulla laborum laboris reprehenderit sint aliquip eiusmod id adipisicing reprehenderit ad est sint Lorem nisi. Labore laborum ea et amet dolore non.</p>
                </div>
            </div>

            </div>
            {/* start of the second section  */}


            {/* start of third section */}

            <div className="thirdsection">
            <h1 className="headingwithpad">Why choose events?</h1>
            <p>
                Eiusmod exercitation do ullamco in duis esse ullamco sint culpa aliquip. Esse dolor consequat aliqua et Lorem consequat esse nulla proident tempor. Cupidatat sit et culpa dolor reprehenderit occaecat. Et excepteur deserunt magna labore deserunt.

Ut ullamco qui veniam exercitation cillum minim adipisicing laboris proident pariatur fugiat. Tempor eiusmod sint nulla id sit velit laboris aute labore excepteur consectetur ad. Aliquip do in nisi sunt nisi in ut. Aliqua consequat magna id dolore mollit quis dolor mollit exercitation ullamco fugiat dolor duis sint.
            </p>
            </div>

            {/* start of third section */}

            {/* fourth section ------------ */}
            <div className="fourthsection">
            <h1 className="headingwithpad">Our happy users</h1>
                <div className="row justify-content-between">
                    <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <h2>Fida Patel</h2>
                        <Rating name="read-only" className="mb-4" value={5} readOnly />
                        <p>Voluptate sunt cupidatat fugiat fugiat amet esse sint incididunt commodo aliqua officia. Consectetur ullamco pariatur labore magna ut sit dolor ex cupidatat consequat in dolor eiusmod. Anim eu ullamco officia adipisicing.</p>
                    </div>
                    <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <h2>Lorem Epsum</h2>
                        <Rating name="read-only" className="mb-4" value={5} readOnly />
                        <p>Voluptate sunt cupidatat fugiat fugiat amet esse sint incididunt commodo aliqua officia. Consectetur ullamco pariatur labore magna ut sit dolor ex cupidatat consequat in dolor eiusmod. Anim eu ullamco officia adipisicing.</p>
                    </div>
                    <div className="shadow col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <h2>Lorem Epsum</h2>
                        <Rating name="read-only" className="mb-4" value={5} readOnly />
                        <p>Voluptate sunt cupidatat fugiat fugiat amet esse sint incididunt commodo aliqua officia. Consectetur ullamco pariatur labore magna ut sit dolor ex cupidatat consequat in dolor eiusmod. Anim eu ullamco officia adipisicing.</p>
                    </div>
                </div>


            </div>
            {/* fourth section ------------ */}
            </div>
            <Footer footer="fullfooter" />

        </div>
    );
}

export default Home;