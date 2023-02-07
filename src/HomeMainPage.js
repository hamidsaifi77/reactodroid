import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BottomAction from './global/bottom-action/BottomAction'
import TopAction from './global/top-action/TopAction'
import HomeScreen from './screens/home/HomeScreen'

const HomeMainPage = () => {
    return (
        <Box>
            <Box sx={{ position: 'absolute', top: 0, right: 0, left: 0 }} overflow={'auto'} >
                <TopAction />
            </Box>
            <HomeScreen />
            <Box sx={{ position: 'absolute', bottom: 0, right: 0, left: 0 }} overflow={'auto'} >
                <BottomAction />
            </Box>
        </Box>

    )
}

export default HomeMainPage