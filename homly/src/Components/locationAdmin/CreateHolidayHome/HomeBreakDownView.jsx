import React from 'react'
import { Box,TextField,Typography,Grid} from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const HomeBreakDownView = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
  return (
    <Box>
        <fieldset style={{borderRadius:'16px',color:'grey',padding:'1.2em'}}>
        <legend>Holiday Home Breakdown</legend>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                  <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                    <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                        <Typography  variant='p' sx={{color:'black'}}>Maximum Adults</Typography>
                    </Box>
                    <TextField type='number' id="outlined-required" label="Maximum Adults" placeholder='Maximum Adults' fullWidth size='small'/>
                  </Box>  
                  <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                    <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                        <Typography  variant='p' sx={{color:'black'}}>Maximum Childern</Typography>
                    </Box>
                    <TextField type='number' id="outlined-required" label="Maximum Children" placeholder='Maximum Children' fullWidth size='small'/>
                  </Box>  
                  <FormGroup sx={{display:'flex',width:'100%'}}>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                 
                </FormGroup>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                    <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                        <Typography  variant='p' sx={{color:'black'}}>Other Charges</Typography>
                    </Box>
                    <TextField type='number' id="outlined-required" label="Other Charges" placeholder='Other Charges' fullWidth size='small'/>
                  </Box>  
                  <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                    <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                        <Typography  variant='p' sx={{color:'black'}}>Service Charges</Typography>
                    </Box>
                    <TextField type='number' id="outlined-required" label="Service Charges" placeholder='Service Charges' fullWidth size='small'/>
                  </Box>  
                  <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                    <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                        <Typography  variant='p' sx={{color:'black'}}>Total Rental</Typography>
                    </Box>
                    <TextField type='number' id="outlined-required" label="Total Rental" placeholder='Total Rental' fullWidth size='small'/>
                  </Box>  
                  <Box className="input_container" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1em',marginBottom:'12px'}}>
                    <Box sx={{minWidth:'100px',maxWidth:'200px'}} className="label_container" >
                        <Typography  variant='p' sx={{color:'black'}}>Enter facilities</Typography>
                    </Box>
                    <TextField type='number' id="outlined-required" label="Facilities" placeholder='Enter Facilities' fullWidth size='small'/>
                  </Box>  
                </Grid>


            </Grid>
            <Grid container spacing={3}>
                
                <Grid item md={12} sm={12} xs={12} sx={{marginTop:'2em'}}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Rooms/Units" {...a11yProps(0)} />
                            <Tab label="Halls" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Rooms/Units
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Halls
                        </CustomTabPanel>
                    </Box>
                </Grid>
            </Grid> 
        </fieldset>


    </Box>
  )
}

export default HomeBreakDownView