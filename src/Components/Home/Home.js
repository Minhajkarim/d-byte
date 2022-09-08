import { Grid } from '@material-ui/core';
import React from 'react'
import './Home.css'
import {Button} from '@material-ui/core';



const Home = () => {
  return (
    <div>
      <div className='main-home'>
        <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
                
                <div data-aos="fade-left">
                    <h1 className='heading1'>Welcome To <br/>Design Bytes International</h1>
                </div>
                <Button className='home-btn'>Join Us</Button>
                
            </Grid>
        </Grid>
        </div> 
    </div>
  )
}

export default Home;