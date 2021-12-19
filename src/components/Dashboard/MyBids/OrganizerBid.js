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
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import Alert from '@mui/material/Alert'
import Ratenowdialogue from '../../utils/Ratenowdialogue';
function OrganizerBid(props) {
    const [display,setDisplay]=React.useState(false);
    const [value, setValue] = React.useState('mybid');
    const [myBid,setMyBid]=React.useState([])
    const [bids,setBids]=React.useState([])
    const [flag,setFlag]=React.useState(false)
    const [status,setStatus]=React.useState("")
    const [rating,setRating]=React.useState(0)
    const [error,setError]=React.useState("")
    const [open,setOpen]=React.useState(false)
    console.log(rating)
    //const bids = props.location.state
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
 
    console.log(myBid)
    React.useEffect(()=>{
        
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/event/single-event`, {eventId:props.location.state }, {headers:{token:props.user.user}})
        .then(res=>{
            setError("")
            console.log(res)
            setStatus(res.data.result.status)
            let array = res.data.result.bids.filter(item=>item.status==="Approved")
            if(array.length>0){
                setValue("mybid")
            }else{
                setValue("allbids")   
                setError("You haven't approved any bids yet") 
            }
            setMyBid(array)
            setBids(res.data.result.bids)
        })
        .catch(err=>{
            setError("Something went wrong")
            console.log(err)
        })

        
    },[flag])

    const handleApprove = (id)=>{
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/bid/approve-bid`,{bidId:id},{headers:{token:props.user.user}})
        .then(res=>{    
            console.log(res);
            setError("")
            setFlag(!flag)
        })
        .catch(err=>{
            setError("Something went wrong")
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

                    <div className="row mx-auto  align-items-center justify-content-between">
                    <p className="for">{item.userId.organisation}</p>
                    <Ratenowdialogue rightButton="submit" leftButton="cancel" 
                    description="Vendor reviews help organizers choose the best vendor for a event. Therefore, while it is not mandatory, it is highly recommended for organizers to leave a review for a vendor they have just completed a event with." 
                    title="Rate vendor" setOpen={setOpen}  open={open} item={item} />
                    <Button onClick={()=>setOpen(true)}>Rate User</Button>
                    </div>
                    <Rating
                    readOnly 
                        name="read-only"
                        value={item.userId.rating.avg}
                        
                      />
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
        {/* all ibds starts */}
        <div className="row mt-3 bid-parent">
        {
            bids.length>0 && value==="allbids"?(
                bids.map((item,index)=>(
                    <div className="shadow-sm col-5 mx-auto bid-parent-container" key={index}>
                    
                    <div className="">
                    <div className="row justify-content-between">
                    <h3 className="name col-8">{item.userId.name}</h3>
                    {item.status!=="Approved"?<Button onClick={()=>handleApprove(item._id)} endIcon={<GavelRoundedIcon />} variant="contained">Approve Bid</Button>:null}
                    </div>

                    <div className="row justify-content-between mx-auto mt-3">
                    <p className="for ">{item.userId.organisation}</p>
                    <p className="price ">${item.totalPrice}</p>
                    </div>
                    <Rating
                    readOnly 
                        name="read-only"
                        value={item.userId.rating.avg}
                        
                      />
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
        {error.length>0?<Alert className="alert" severity="error">{error}</Alert>:null}
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