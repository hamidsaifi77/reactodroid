import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import GoogleSearch from './components/GoogleSearch'
import MenuScreenHome from '../menu/MenuScreenHome'

const HomeScreen = () => {
    return (
        <div
            style={{
                backgroundImage: `url("https://picsum.photos/900/1200")`,
                minHeight: '100vh',
                backgroundPosition: 'center'
            }} >
            <Grid justifyContent={'space-between'} direction='column' container minHeight={'90vh'}>
                <Grid item>
                    <Box pt={3}>
                        <GoogleSearch />
                    </Box>
                </Grid>
                <Grid item>
                    <MenuScreenHome />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeScreen