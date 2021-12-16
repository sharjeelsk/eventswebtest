import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../Dashhead/Dashhead'
import axios from 'axios'
import {connect} from 'react-redux'

function MyApprovals(props) {
    const [display,setDisplay]=React.useState(false)
    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/user/myApprovals`,{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
        <Dashhead id={6} display={display} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container">
            <span className="iconbutton">
        <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
        <MenuIcon fontSize="inherit" />
         </IconButton>
         </span>

        <div onClick={()=>setDisplay(false)}>
        my approvals
        


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

export default connect(mapStateToProps)(MyApprovals)
