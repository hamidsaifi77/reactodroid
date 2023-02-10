import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Battery20, Battery30, Battery50, Battery60, Battery80, Battery90, BatteryFull, NetworkCell, SignalWifi1Bar, SignalWifi2Bar, SignalWifi3Bar } from '@mui/icons-material'
import moment from 'moment'

const TopAction = () => {
    const wifi = [{
        icon: <SignalWifi1Bar sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <SignalWifi2Bar sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <SignalWifi3Bar sx={{ height: 18, width: 18, color: 'white' }} />
    }]

    const btry = [{
        icon: <Battery20 sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <Battery30 sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <Battery50 sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <Battery60 sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <Battery90 sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <BatteryFull sx={{ height: 18, width: 18, color: 'white' }} />
    }, {
        icon: <Battery80 sx={{ height: 18, width: 18, color: 'white' }} />
    }]

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <Box p={0.3} bgcolor={'rgba(0, 0, 0, 0.2)'} >
            <Stack alignItems={'center'} direction={'row'} justifyContent='space-between'>
                <Typography fontSize={12} color='white' >{moment().format("hh:mm A")}</Typography>
                <Stack spacing={0.5} direction={'row'}>
                    {wifi[randomIntFromInterval(0, 2)].icon}
                    <NetworkCell sx={{ height: 18, width: 18, color: 'white' }} />
                    {btry[randomIntFromInterval(0, 6)].icon}
                </Stack>
            </Stack>
        </Box>
    )
}

export default TopAction