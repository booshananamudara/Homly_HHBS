
import './style.css';
import React,{ useState} from 'react'

import Box from '@mui/material/Box';
import { Grid,ThemeProvider,Container} from '@mui/material';
import theme from '../../HomlyTheme';

import SideNavbar from '../../Components/locationAdmin/SideNavbar'
import PageTitle from '../../Components/locationAdmin/PageTitle';
    


const HolidayHomeDetails = () => {

    const [showNav,setShowNav] = useState('nav_grid_deactive')

    return (
    <ThemeProvider theme={theme}>
        <Box className="main_container" sx={{width:"100%",backgroundColor:'primary.main',overflow:'hidden'}}>
                <Container maxWidth="xl" style={{padding:0}}>
                    <Grid container sx={{position:'relative'}}>
                        <Grid className={showNav} xs={3} sx={{backgroundColor:"primary.main",height:"100vh" }}>
                            <SideNavbar setShowNav={setShowNav}></SideNavbar>
                        </Grid>
                        <Grid className='container_grid' xs={9} sx={{backgroundColor:'white',borderTopLeftRadius:'20px',padding:'10px 30px',height:'100vh',position:'relative'}}>
                            <Box sx={{height:"100%"}}>
                                <PageTitle setShowNav={setShowNav} title={'Holiday Homes Details'} bell={true}/>
                               
                                
                                            
                            </Box>
                        </Grid>  
                    </Grid>
                </Container>    
            </Box>
    </ThemeProvider>
  )
}

export default HolidayHomeDetails