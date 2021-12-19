import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead/Dashhead'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import "./BidsScreen.scss"
import {connect} from 'react-redux'

function BidsScreen(props) {
    const [display,setDisplay]=React.useState(false);
    const [value, setValue] = React.useState('allbids');
    const [myBid,setMyBid]=React.useState([])
    const bids = props.location.state
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    console.log(props)
    React.useEffect(()=>{
        let Bid = bids.filter(bid=>bid.userId._id===props.user.userInfo._id)
        setMyBid(Bid)
        
    },[])
    return (
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
        <Dashhead id={4} display={display} />
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
        <Tab value="mybid" label="My Bid" />
        <Tab value="allbids" label="All Bids" />
      </Tabs>
    </Box>
    <div className="row mt-3 bid-parent">
    {
            myBid.length>0 && value==="mybid"?(
                myBid.map((item,index)=>(
                    <div className="shadow-sm col-6 bid-parent-container" key={index}>
                    <div className="">
                    <div className="row justify-content-between">
                    <h3 className="name col-9">{item.userId.name}</h3>
                    <p className="price col-3">${item.totalPrice}</p>
                    </div>
                    <Chip label={item.status} />

                    <p className="mt-3 for">{item.userId.organisation}</p>
                    <p className="description">{item.description}</p>

                    {
                        item.services.map((service,sindex)=>(
                            <div key={sindex} className="row shadow-sm services-container">
                                <div className="col-1">
                                <p className="index">{sindex+1}</p>
                                </div>

                                <div className="col-7">
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
        <div className="row bid-parent">
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

                                <div className="col-7">
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

export default connect(mapStateToProps)(BidsScreen)
