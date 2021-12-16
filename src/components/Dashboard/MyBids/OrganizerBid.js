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
    {
            myBid.length>0 && value==="mybid"?(
                myBid.map((item,index)=>(
                    <div className="bid-container" key={index}>
                        <div className="row align-items-center justify-content-between">
                        <h2 className="name">{item.userId.name}</h2>
                        <p className="price">$ {item.totalPrice}</p>
                        </div>
                        {status.toLowerCase()==="over"?
                        <Rating
                        name="simple-controlled"
                        value={item.userId.rating.avg}
                        onChange={(event, newValue) => {
                            handleRating(newValue,item.userId._id)
                          
                        }}
                      />
                        :null}
                        <p className="org">{item.userId.organisation}</p>
                        <p className="description">{item.description}</p>
                        {
                            item.services.length>0?(
                                item.services.map((services,indexc)=>(
                                    <div className="shadow-sm services-container">
                                        <div className="firstrow row align-items-center">
                                            <div className="index">
                                            <h3>{indexc+1}</h3>
                                            </div>

                                            <div className="maincategory">
                                            <h3>{services.category}</h3>
                                            </div>
                                        </div>

                                        <div className="last-container">
                                        <p className="subcategory">{services.subCategory}</p>
                                        <div className="secondrow row align-items-center justify-content-between">
                                        <p className='s-quantity'>Quantity {services.quantity}</p>
                                        <p className="s-price">$ {services.price}</p>
                                        </div>
                                        </div>

                                    </div>
                                ))
                            ):null
                        }
                    </div>
                ))
            ):<p>You haven't approved</p>
        }
        {/* all ibds starts */}
        {
            bids.length>0 && value==="allbids"?(
                bids.map((item,index)=>(
                    <div className="bid-container" key={index}>
                        <div className="row align-items-center justify-content-between">
                        <h2 className="name">{item.userId.name}</h2>
                        <p className="price">$ {item.totalPrice}</p>
                        </div>
                        <p className="org">{item.userId.organisation}</p>
                        <p className="description">{item.description}</p>
                        {
                            item.services.length>0?(
                                item.services.map((services,indexc)=>(
                                    <div className="shadow-sm services-container">
                                        <div className="firstrow row align-items-center">
                                            <div className="index">
                                            <h3>{indexc+1}</h3>
                                            </div>

                                            <div className="maincategory">
                                            <h3>{services.category}</h3>
                                            </div>
                                        </div>

                                        <div className="last-container">
                                        <p className="subcategory">{services.subCategory}</p>
                                        <div className="secondrow row align-items-center justify-content-between">
                                        <p className='s-quantity'>Quantity {services.quantity}</p>
                                        <p className="s-price">$ {services.price}</p>
                                        </div>
                                        </div>
                                    <Button onClick={()=>handleApprove(item._id)}>Approve</Button>
                                    </div>
                                ))
                            ):<p>No Services</p>
                        }
                    </div>
                ))
            ):null
        }

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
