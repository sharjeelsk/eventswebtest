import React from 'react'
import Dashhead from '../Dashhead/Dashhead'
import axios from 'axios'
import {connect} from 'react-redux'
import moment from 'moment'
import Button from '@mui/material/Button'
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Alert from '@mui/material/Alert'
import NotificationsOffRoundedIcon from '@mui/icons-material/NotificationsOffRounded';
import SimpleBackdrop from '../../utils/SimpleBackdrop'
import FailureScreen from '../../utils/FailureScreen';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
const MySubscription = (props) => {
    const [creation,setCreation]=React.useState([])
    const [error,setError] = React.useState("")
    const [refresh,setRefresh]=React.useState(false)
    const [loading,setLoading]=React.useState(false)
    React.useEffect(()=>{  
        setLoading(true) 
        axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/event/user-event`, {headers:{token:props.user.user}})
        .then(res=>{
            setLoading(false)
            let MyCreatiion =res.data.result.filter(item=>item.organiserId!==props.user.userInfo._id)
            console.log(MyCreatiion)
            
            setCreation(MyCreatiion)
        })
        .catch(err=>{
            setLoading(false)
           setError("something went wrong")
        })
    },[refresh])

    const handleUnsubscribe = (id)=>{
        setLoading(true)
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/event/unsub-event`,{eventId:id},{headers:{token:props.user.user}})
        .then(res=>{
            setLoading(false)
          console.log(res)
          setRefresh(!refresh)
        })
        .catch(err=>{
            setLoading(false)
          console.log(err)
          setError("Something went wrong")
        })
    }
    
    const [display,setDisplay]=React.useState(false)
    return (
        <div className="row">
            <SimpleBackdrop open={loading} />
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={3} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container">
            <span className="iconbutton">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

             <div onClick={()=>setDisplay(false)}>
            <h1 className="dashboard-heading">My Subscriptions</h1>
            <div className="parentofcards row justify-content-between">
              {
                creation.length>0?(
                  creation.map((item,index)=>(
                    <div key={index}  className="cardhead col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
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

                      <div className="row justify-content-between cardbuttondiv">
                      <Button
                          className="cardbutton"
                          onClick={()=>props.history.push("/eventdetail",item)}
                          startIcon={<InfoRoundedIcon />}
                          >
                              Details
                          </Button>
                          <Button  
                          onClick={()=>handleUnsubscribe(item._id)}
                          className="cardbutton"
                          endIcon={<NotificationsOffRoundedIcon />}
                          variant="contained">Unsubscribe</Button>
                        </div>

                    </div>
                  ))
                ):<FailureScreen icon={<NotificationsOffOutlinedIcon sx={{fontSize:"4em"}} color="primary" />} title="You haven't subscribed to any events" />
              }
              </div>
              </div>
            </div>
            {error.length>0?<Alert className="alert" severity="error">{error}</Alert>:null}
        </div>
    );
}

const mapStateToProps = ({EventUser})=>{
    return {
        user:EventUser
    }
}

export default connect(mapStateToProps)(MySubscription)