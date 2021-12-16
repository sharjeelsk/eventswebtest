import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../Dashhead/Dashhead'
import {connect} from 'react-redux'
import "./MyServices.scss"
import axios from 'axios'
import TwoBDialog from '../../../utils/TwoBDialog'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function MyServices(props) {
    const [display,setDisplay]=React.useState(false)
    const [services,setServices]=React.useState([])
    const [id,setId]=React.useState("")
    const [open,setOpen]=React.useState(false)
    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/service/user-service`,{headers:{token:props.EventUser.user}})
        .then(res=>{
            if(res.data.result.length>0){
                setServices(res.data.result)
            }else{
                setServices([])
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    const handleSubmit = ()=>{
        setOpen(false)
    }
    console.log(services,open,id);
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

        <div className="my-services" onClick={()=>setDisplay(false)}>
        <TwoBDialog title="Delete Service" description="Are you sure you want to delete this service"
        rightButton="Delete"
        leftButton="Cancel"
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
        />
        <h1 className="heading">My Services</h1>

        <div className="row justify-content-between cardparentcontainer">
        {
            services.length>0?(
                services.map((item,index)=>(
                <div key={index} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 carddiv">
                    <div className="row align-items-center justify-content-between">
                        <h2 className="maincategory">{item.category}</h2>
                        <IconButton onClick={()=>{
                            setId(item._id)
                            setOpen(true)}}><DeleteOutlineOutlinedIcon color="error" /></IconButton>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <p className="category">{item.subCategory}</p>
                        <p className="price"> $ {item.price}</p>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <p className="time">{item.updatedAt}</p>
                        <p className="quantity">{item.quantity}</p>
                    </div>
                </div>
                ))
            ):null
        }        
        </div>

        <div style={{position:"fixed",bottom:"5%",right:"5%"}}>
              <Tooltip title="Add Services">
              <Fab onClick={()=>props.history.push("/addservices")} color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              </Tooltip>
        </div>
            {/* end of block */}
        </div>
        </div>
    </div>
    )
}

const mapStateToProps = ({EventUser})=>{
    return {
        EventUser
    }
}

export default connect(mapStateToProps)(MyServices)
