import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead/Dashhead'
import Marker from '../../utils/Marker/Marker'
import GoogleMapReact from 'google-map-react';
import {regionFrom} from '../../utils/deltaCalculator'
import "./CreateEvent.scss"
import Alert from '@mui/material/Alert'
import OwnMarker from '../../utils/Marker/OwnMarker';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


function CreateEvent(props) {
    const [display,setDisplay]=React.useState(false)
    const [location,setLocation]=React.useState({center:{lat:59.95,lng:30.33},zoom:11})
    const [eventLocation,setEventLocation]=React.useState({})
    const [loc,setLoc]=React.useState([])
    const [error,setError]=React.useState("")
    const handlePress = (ar)=>{
      //let point = {lat:ar.lat,lng:ar.lng,accuracy:99.999}
      setEventLocation(regionFrom(ar.lat,ar.lng,99.999))
      //console.log(regionFrom(ar.lat,ar.lng,99.999))
    }
    const getGeo = async ()=>{
      window.navigator.geolocation.getCurrentPosition((loca)=>{
        setLocation({center:{lat:loca.coords.latitude,lng:loca.coords.longitude},zoom:18})
      },(err)=>setError(err.message));
    }
    React.useEffect(()=>{
      //console.log(navigator);
      getGeo()
    },[])


    
    
    return (
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
        <Dashhead id={1} display={display} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container">
            <span className="iconbutton">
        <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
        <MenuIcon fontSize="inherit" />
         </IconButton>
         </span>

        <div onClick={()=>setDisplay(false)} className="createEventDiv">
        <div style={{ height: '90vh', width: '100%' }} >
          <h1 >Click to select event location</h1>
    <GoogleMapReact
    onClick={(ar)=>handlePress(ar)}
      bootstrapURLKeys={{ key: 'AIzaSyBOzAkOqCVMjP4hXIkabfHi40vJ8afKKZ4'}}
      defaultCenter={location.center}
      defaultZoom={location.zoom}
    >
      <OwnMarker 
      lat = {location.center.lat}
      lng={location.center.lng}
      text="My Location"
      />
      {Object.keys(eventLocation).length>0?<Marker
        lat={eventLocation.latitude}
        lng={eventLocation.longitude}
        text="Event Location"
      />:null}
    </GoogleMapReact>
  </div>
        
  <div 
  onClick={()=>{console.log("h");props.history.push("/createevent2",eventLocation)}}
  style={{position:"fixed",bottom:"5%",right:"5%"}}>
              <Tooltip title="Create Event">
              <Fab  disabled={Object.keys(eventLocation).length>0?false:true} variant="extended" onClick={()=>null} color="primary" aria-label="add">
              Next
                <ArrowForwardIosRoundedIcon  sx={{ marginLeft:1,fontSize:"1.2em"}} />  
              </Fab>
              </Tooltip>
              </div>

            {/* end of block */}
        </div>
        </div>
        {error.length>0?<Alert className="alert" severity="error">{error}</Alert>:null}
    </div>
    )
}

export default CreateEvent