import React from 'react'
import "./Dashboard.scss"
import Dashhead from './Dashhead/Dashhead'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleMapReact from 'google-map-react';
import Marker from '../utils/Marker/Marker'
import axios from 'axios'
import {connect} from 'react-redux'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import moment from 'moment'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {storeUserInfo} from '../redux/user/userActions'
import OwnMarker from '../utils/Marker/OwnMarker';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import SimpleBackdrop from '../utils/SimpleBackdrop';

const Dashboard = (props) => {
    const [display,setDisplay]=React.useState(false)
    const [location,setLocation]=React.useState({center:{lat:59.95,lng:30.33},zoom:11})
    const [data,setData]=React.useState([])
    const [flag,setFlag]=React.useState(false)
    const [loading,setLoading]=React.useState(false)
    const [error,setError]=React.useState("")
    
    console.log("dashboard props",props)
    const getGeo = async ()=>{
      window.navigator.geolocation.getCurrentPosition((loca)=>{
        setLocation({center:{lat:loca.coords.latitude,lng:loca.coords.longitude},zoom:18})
      },(err)=>setError(err.message));
    }
    React.useEffect(()=>{
      setLoading(true)
      getGeo()
         axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/event/all-event`,{headers:{token:props.userToken}})
          .then(res=>{
            if(res.data.msg==="Success" && res.data.result.length>0){
              setData(res.data.result)
            }
            axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/user/single-user`,{headers:{token:props.userToken}})
            .then(res=>{
              if(res.data.msg==="Success"){
                props.storeUserInfo(res.data.result)
              }
              setLoading(false)
            })
            .catch(err=>{
              console.log(err);
              setLoading(false)

            })
          })
          .catch(err=>{
            console.log(err);
          setLoading(false)

          })
          
    },[flag])
    const getEvent  = ()=>{
      axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/event/all-event`,{headers:{token:props.userToken}})
          .then(res=>{
            if(res.data.msg==="Success" && res.data.result.length>0){
              setData(res.data.result)
            }})
            .catch(err=>{
              console.log(err);
            })
    }
    console.log(data);
    const setSearchResult=(e)=>{
      if(e.length<=0){
        getEvent()
      }else{
        let array = data.filter(item=>{
          //console.log(item)
          let name = item.name.slice(0,e.length).trim().replace(' ','').toLowerCase();
          let serachname = e.toLowerCase().replace(' ','').trim();
          if(name===serachname){
            return item;
          }
        })
        setData(array)
      }
      
    }
    return (
        <div className="row">
          <SimpleBackdrop open={loading} />
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={1} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container">
                <span className="iconbutton">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

            <div onClick={()=>setDisplay(false)}>
            <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBOzAkOqCVMjP4hXIkabfHi40vJ8afKKZ4'}}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
        >
        <OwnMarker 
      lat = {location.center.lat}
      lng={location.center.lng}
      text="My Location"
      />
          {data.map((marker,index)=>(
            <Marker
            lat={marker.location.latitude}
            lng={marker.location.longitude}
            text={marker.name}
          />
          ))}
        </GoogleMapReact>
      </div>
            <h1><MapOutlinedIcon sx={{fontSize:"2em"}}/> Nearby Events</h1>   
            <div className="searchdiv">
            <TextField fullWidth 
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <TravelExploreRoundedIcon />
            //     </InputAdornment>
            //   ),
            // }}
            onChange={(e)=>setSearchResult(e.target.value)}
            id="filled-basic" label="Search event by name" variant="filled" />
            </div> 
            <div className="parentofcards row justify-content-between">
              {
                data.length>0?(
                  data.map((item,index)=>(
                    <div onClick={()=>props.history.push("/eventdetail",item)} key={index} className="cardhead col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <div className="row justify-content-between">
                      <h2 className="col-10">{item.name}</h2>
                      <p className="col-2 subs">{item.totalSubs} Joined</p>
                      </div>

                      <div className="chipdiv">
                      <span className="private">{item.type}</span>
                      <span className="status-red">{item.status}</span>
                      </div>

                      <div className="row">
                        <div className="col-6">
                        <p>{item.description}</p>
                        </div>
                        <div className="col-6">
                        <p className="start">Start : {moment.parseZone(item.start).local().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                        <p className="end">End : {moment.parseZone(item.end).local().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                        </div>
                      </div>

                    </div>
                  ))
                ):<p>No nearby events</p>
              }
              </div>
              <div style={{position:"fixed",bottom:"5%",right:"5%"}}>
              <Tooltip title="Create Event">
              <Fab onClick={()=>props.history.push("/createevent")} color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              </Tooltip>
              </div>



              



                {/* end of block */}
            </div>
            </div>
        </div>
    );
}

const mapDispatchToProps =(dispatch)=>{
  return {
    storeUserInfo:(info)=>dispatch(storeUserInfo(info))
  }
}

const mapStateToProps =({EventUser})=>{
return {
    userToken:EventUser.user
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);