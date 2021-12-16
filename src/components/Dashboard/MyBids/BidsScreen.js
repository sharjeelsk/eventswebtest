import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead/Dashhead'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
    {
            myBid.length>0 && value==="mybid"?(
                myBid.map((item,index)=>(
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

                                    </div>
                                ))
                            ):<p>No Services</p>
                        }
                    </div>
                ))
            ):null
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

export default connect(mapStateToProps)(BidsScreen)
