import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead/Dashhead'
import Marker from '../../utils/Marker/Marker'
import GoogleMapReact from 'google-map-react';
import {regionFrom} from '../../utils/deltaCalculator'
import "./MyAccount.scss"
import Alert from '@mui/material/Alert'
import OwnMarker from '../../utils/Marker/OwnMarker';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import axios from 'axios'
import {storeUserInfo} from '../../redux/user/userActions'
import {connect} from 'react-redux'
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import profile from '../../../Images/profile.png'
import GradingIcon from '@mui/icons-material/Grading';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import GroupsIcon from '@mui/icons-material/Groups';
import Button from '@mui/material/Button'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import storageSession from 'redux-persist/lib/storage/session'

function MyAccount(props) {
    const [display,setDisplay]=React.useState(false)
    //const [location,setLocation]=React.useState({center:{lat:59.95,lng:30.33},zoom:11})
    let userInfo =props.userInfo;
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/user/single-user`,{headers:{token:props.userToken}})
            .then(res=>{
                console.log(res)
                if(res.data.result.img){
                //setImageLink(res.data.result.img)
                }
                
                props.storeUserInfo(res.data.result)
                })
                .catch(err=>{
                    console.log(err)
                })
    },[])
    const handleLogout = ()=>{
        window.sessionStorage.clear()
        //storageSession.removeItem('socket')
        props.history.push("/")

    }
    return (
        <div className="row myaccountdiv">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
        <Dashhead id={6} display={display} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container">
            <span className="iconbutton">
        <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
        <MenuIcon fontSize="inherit" />
         </IconButton>
         </span>

        <div className="  " onClick={()=>setDisplay(false)}>

        
        <div className="shadow-sm row align-items-center profilediv">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 imagediv">
        {userInfo.img?<img src={`${process.env.REACT_APP_DEVELOPMENT}/api/user/image/${userInfo.img}`} alt="img" />:<img src={profile} alt="profile" />}
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 infodiv ">
        <h2 className="name"><PersonOutlineTwoToneIcon /> {userInfo.name}</h2>  
        <p className="mobile"><LocalPhoneTwoToneIcon /> {userInfo.mobileNo}</p>      
        <p className="email"><EmailTwoToneIcon /> {userInfo.email}</p>
        <p className="organisation"><BusinessTwoToneIcon /> {userInfo.organisation}</p>
        <p className="address"><HomeTwoToneIcon /> {userInfo.address}</p>
        </div>
        </div>
        
        <div className="row justify-content-between approvaldiv">
        <div onClick={()=>props.history.push("/myapprovals")} className="row shadow-sm align-items-center col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 cardiv">
            <GradingIcon className="cardIcon" />
            <p className="cardheading">My Approvals</p>
        </div>
        <div onClick={()=>props.history.push("/myservices")} className="row shadow-sm align-items-center col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 cardiv">
            <HomeRepairServiceIcon className="cardIcon" />
            <p className="cardheading">My Services</p>
        </div>
        </div>


        <div className="row justify-content-between approvaldiv">
        <div onClick={()=>props.history.push("/mygroups")} className="row shadow-sm align-items-center col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 cardiv">
            <GroupsIcon className="cardIcon" />
            <p className="cardheading">My Groups</p>
        </div>
        <div onClick={()=>props.history.push("/findvendors")} className="row shadow-sm align-items-center col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 cardiv">
            <PersonSearchIcon className="cardIcon" />
            <p className="cardheading">Find Vendors</p>
        </div>
        </div>
        <div className="logoutbuttondiv">
        <Button onClick={()=>handleLogout()} className="logoutbutton" variant="contained">Logout <LogoutIcon sx={{marginLeft:1}} /></Button>
        </div>


        
            {/* end of block */}
        </div>
        </div>
    </div>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return {
      storeUserInfo:(info)=>dispatch(storeUserInfo(info))
    }
  }
  
  const mapStateToProps =({EventUser})=>{
  return {
      userToken:EventUser.user,
      userInfo:EventUser.userInfo
  }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(MyAccount)
