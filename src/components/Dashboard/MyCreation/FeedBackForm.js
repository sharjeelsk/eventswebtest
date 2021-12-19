import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead/Dashhead'
import TextField from '@mui/material/TextField'
import "./FeedBackForm.scss"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Fab from '@mui/material/Fab';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import Tooltip from '@mui/material/Tooltip'
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
function FeedBackForm() {
    const [display,setDisplay]=React.useState(false)
    const [age, setAge] = React.useState('');
    const [labelText,setLabelText]=React.useState("")
    const [formInputs,setFormInputs]=React.useState([])

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const handleSubmit = ()=>{
        console.log(labelText,age);
        setFormInputs([...formInputs,{label:labelText,input:age}])
    }

    const filterForm = (item)=>{
        let arr = formInputs.filter(items=>items!==item)
        setFormInputs(arr)
    }

    const renderInput =(item)=>{
        if(item.input===1){
            return <div className="row align-items-center justify-content-between">
            <div className="col-8">
            <TextField fullWidth className="my-4" id="outlined-basic" label={item.label} variant="outlined" />
            </div>
            <div className="col-4" style={{textAlign:"right"}}>
            <IconButton onClick={()=>filterForm(item)} aria-label="delete" color="error">
            <DeleteSweepRoundedIcon />
            </IconButton>
            </div>
            </div>
        }else if(item.input===2){
            return  <div className="row align-items-center justify-content-between">
            <div className="col-8">
            <FormControlLabel control={<Checkbox defaultChecked />} label={item.label} />
            </div>
            <div className="col-4" style={{textAlign:"right"}}>
            <IconButton  onClick={()=>filterForm(item)} aria-label="delete" color="error">
            <DeleteSweepRoundedIcon />
            </IconButton>
            </div>
            </div>
        }
    }
    return (
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
        <Dashhead id={2} display={display} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container grey">
            <span className="iconbutton">
        <IconButton   size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
        <MenuIcon fontSize="inherit" />
         </IconButton>
         </span>

        <div onClick={()=>setDisplay(false)} className="feedbackform-container ">
   
        <h1>Create feedback form <InventoryOutlinedIcon sx={{fontSize:"1em"}} /></h1>

        <div className="mx-auto row">
        
        <div className="shadow-sm col-4 addform">
        <h2>Add form items</h2>
        <TextField onChange={(e)=>setLabelText(e.target.value)} className="my-4" fullWidth id="outlined-basic" label="Label text" variant="outlined" />
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Input type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Input type"
          onChange={handleChange}
        >
          <MenuItem value={1}>Text Input</MenuItem>
          <MenuItem value={2}>Checkbox</MenuItem>
        </Select>
      </FormControl>
      <div className="mt-4" style={{textAlign:"center"}}>
      <Button endIcon={<AddRoundedIcon />} onClick={()=>handleSubmit()} variant="contained">Add item</Button>
      </div>
      </div>

        <div className="col-7 feedbackform mx-auto shadow-sm">
            <h2>Form review</h2>
            {
                formInputs.map((item,index)=>(
                    <div key={index}>
                        {
                            renderInput(item)
                        }
                    </div>
                ))
            }
           {formInputs.length>0? 
           <div style={{textAlign:"center"}} className="my-4">
           <Button disabled variant="contained">Submit</Button>
           </div>
           :null}
        </div>



      </div>
      <div style={{position:"fixed",bottom:"5%",right:"5%"}}>
              <Tooltip title="Add Services">
              <Fab 
              disabled={formInputs.length<=0?true:false}
               color="primary" variant="extended">
                Create Form
                <DriveFileRenameOutlineRoundedIcon sx={{ ml: 1 }} />
                </Fab>
              </Tooltip>
            </div>
            {/* end of block */}
        </div>
        </div>
    </div>
    )
}

export default FeedBackForm
