import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../Dashhead/Dashhead'
import axios from 'axios'
import {connect} from 'react-redux'
import "./MyGroups.scss"
import { listSubheaderClasses } from '@mui/material';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Tooltip from '@mui/material/Tooltip'
import FailureScreen from '../../../utils/FailureScreen'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
function MyGroups(props) {
    const [display,setDisplay]=React.useState(false)
    const [data,setData] = React.useState([])
    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/userContact/single-userContact`,{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res);
            if(res.data.result.groups.length>0){
                setData(res.data.result.groups)
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    const renderList =(list)=>{
        if(list.length>3){
            return <div className="row mx-auto">
            {
            list.map((num,indx)=>(
                indx<=2?<div className="mx-1" key={indx}>
                <p>{num[1]}</p>
                </div>:null
            ))
            }
            <p className="count-number">+{list.length-3}</p>
            </div>
        }else{
            return <div className="row mx-auto" >
            {
            list.map((num,index)=>(
            <p key={index}>{num[1]}</p>
            ))
            }
            </div>

        }
    }

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
        <h1 className="mt-3 mb-4">My Groups <GroupsRoundedIcon /></h1>
        <div className="row parent-group">
        {
            data.length>0?(
                data.map((item,index)=>(
                    <div onClick={()=>props.history.push("/crudgroup",{route:true,list:item.list})} className="mx-auto shadow-sm col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 group-container" key={index}>
                        <h2 className="group-heading">{item.groupName}</h2>
                        {renderList(item.list)}
                    </div>
                ))
            ):<FailureScreen title="You haven't added any groups" icon={<GroupsRoundedIcon sx={{fontSize:"4em"}} color="primary" />} />
        }    
        </div>    
        <div style={{position:"fixed",bottom:"5%",right:"5%"}}>
              <Tooltip title="Add Services">
              <Fab onClick={()=>props.history.push("/crudgroup",{route:false})} color="primary" variant="extended">
                Create Group
                <AddRoundedIcon sx={{ ml: 1 }} />
                </Fab>
              </Tooltip>
            </div>

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

export default connect(mapStateToProps)(MyGroups)
