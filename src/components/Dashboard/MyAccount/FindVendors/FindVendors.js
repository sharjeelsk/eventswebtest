import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../Dashhead/Dashhead'

import "./FindVendors.scss"


function FindVendors() {
    const [display,setDisplay]=React.useState(false)
    // React.useEffect(()=>{
    //     axios.post(`${Link}/api/user/search`,{query:"Aurangabad"},{headers:{token:props.user.user}})
    //     .then(res=>{
    //         console.log(res)
    //         if(res.data.result.length>0){
    //             setData(res.data.result)
    //         }
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })

    // },[])
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
   ffrfersdfvsds
        


            {/* end of block */}
        </div>
        </div>
    </div>
    )
}

export default FindVendors
