import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead/Dashhead'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./BidsScreen.scss"
import {connect} from 'react-redux'
import Button from '@mui/material/Button'
import axios from 'axios'
import Rating from '@mui/material/Rating';

function OrganizerBid(props) {
    const [display,setDisplay]=React.useState(false);
    const [value, setValue] = React.useState('mybid');
    const [myBid,setMyBid]=React.useState([])
    const [bids,setBids]=React.useState([])
    const [flag,setFlag]=React.useState(false)
    const [status,setStatus]=React.useState("")
    const [rating,setRating]=React.useState(0)
    console.log(rating)
    //const bids = props.location.state
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleRating = (newValue,id)=>{
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/user/rate-user`,{userId:id,stars:newValue},{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res);
            if(res.data.msg === "Success"){
                setRating(newValue);
            }
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    console.log(myBid)
    React.useEffect(()=>{
        
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/event/single-event`, {eventId:props.location.state }, {headers:{token:props.user.user}})
        .then(res=>{
            console.log(res)
            setStatus(res.data.result.status)
            let array = res.data.result.bids.filter(item=>item.status==="Approved")
            if(array.length>0){
                setValue("mybid")
            }else{
                setValue("allbids")    
            }
            setMyBid(array)
            setBids(res.data.result.bids)
        })
        .catch(err=>{
            console.log(err)
        })

        
    },[flag])

    const handleApprove = (id)=>{
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/bid/approve-bid`,{bidId:id},{headers:{token:props.user.user}})
        .then(res=>{    
            console.log(res);
            setFlag(!flag)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
        <Dashhead id={2} display={display} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container">
            <span className="iconbutton">
        <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
        <MenuIcon fontSize="inherit" />
         </IconButton>
         </span>

        <div className="container" onClick={()=>setDisplay(false)}>
        <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="mybid" label="Approved Bids" />
        <Tab value="allbids" label="All Bids" />
      </Tabs>
    </Box>
    <div className="row mt-3 bid-parent">
    {
            myBid.length>0 && value==="mybid"?(
                myBid.map((item,index)=>(
                    <div className="shadow-sm col-5 mx-auto bid-parent-container" key={index}>
                    <div className="">
                    <div className="row justify-content-between">
                    <h3 className="name col-9">{item.userId.name}</h3>
                    <p className="price col-3">${item.totalPrice}</p>
                    </div>

                    <p className="for">{item.userId.organisation}</p>
                    <p className="description">{item.description}</p>

                    {
                        item.services.map((service,sindex)=>(
                            <div key={sindex} className="row shadow-sm services-container">
                                <div className="col-1">
                                <p className="index">{sindex+1}</p>
                                </div>

                                <div className="col-8">
                                <p className="service-subcat">{service.subCategory}</p>
                                <p className="service-cat">{service.category}</p>
                                </div>

                                <div className="col-3">
                                <p className="service-price">${service.price}</p>
                                <p className="service-quantity">{service.quantity}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                ))
            ):<p>You haven't approved</p>
        }
        </div>
        {/* all ibds starts */}
        <div className="row mt-3 bid-parent">
        {
            bids.length>0 && value==="allbids"?(
                bids.map((item,index)=>(
                    <div className="shadow-sm col-5 mx-auto bid-parent-container" key={index}>
                    <div className="">
                    <div className="row justify-content-between">
                    <h3 className="name col-9">{item.userId.name}</h3>
                    <p className="price col-3">${item.totalPrice}</p>
                    </div>

                    <p className="for">{item.userId.organisation}</p>
                    <p className="description">{item.description}</p>

                    {
                        item.services.map((service,sindex)=>(
                            <div key={sindex} className="row shadow-sm services-container">
                                <div className="col-1">
                                <p className="index">{sindex+1}</p>
                                </div>

                                <div className="col-8">
                                <p className="service-subcat">{service.subCategory}</p>
                                <p className="service-cat">{service.category}</p>
                                </div>

                                <div className="col-3">
                                <p className="service-price">${service.price}</p>
                                <p className="service-quantity">{service.quantity}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                ))
            ):null
        }
        </div>
            {/* end of block */}
        </div>
        </div>
    </div>
    )
}

const mapStateToProps = ({EventUser})=>{
    return {
        user:EventUser
    }
}

export default connect(mapStateToProps)(OrganizerBid)


// {status.toLowerCase()==="over"?
//                         <Rating
//                         name="simple-controlled"
//                         value={item.userId.rating.avg}
//                         onChange={(event, newValue) => {
//                             handleRating(newValue,item.userId._id)
                          
//                         }}
//                       />
//                         :null}