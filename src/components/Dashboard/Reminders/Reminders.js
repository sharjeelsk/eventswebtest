import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead/Dashhead'
import {connect} from 'react-redux'
import "./Reminders.scss"
import axios from 'axios'

function Reminders(props) {
    const [display,setDisplay]=React.useState(false)
    React.useEffect(()=>{
    console.log("user",props.user.user)
    axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/reminder/user-reminder`,{headers:{token:props.user.user}})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })

    },[])
    console.log(props)
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

        <div onClick={()=>setDisplay(false)}>
   
        


            {/* end of block */}
        </div>
        </div>
    </div>
    )
}
const mapStateToProps =({EventUser})=>{
    return {
        user:EventUser
    }
}

export default connect(mapStateToProps)(Reminders)
