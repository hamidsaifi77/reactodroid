import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import GoogleSearch from './components/GoogleSearch'
import MenuScreenHome from '../menu/MenuScreenHome'

const HomeScreen = () => {

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div
            style={{
                backgroundImage: `url("/image/${randomIntFromInterval(0, 3)}.jpg")`,
                minHeight: '100vh',
                // backgroundPosition: 'stretch'
                backgroundSize: 'cover'
            }}
        >

            <Grid justifyContent={'space-between'} direction='column' container minHeight={'90vh'}>
                <Grid item>
                    <Box pt={3}>
                        <GoogleSearch />
                    </Box>
                </Grid>
                <Grid sx={{ position: 'absolute', bottom: "10%", right: 0, left: 0 }} item>
                    <MenuScreenHome />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeScreen