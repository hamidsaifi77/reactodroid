import { ButtonBase, CardMedia } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const GoogleSearch = () => {
    const img1 = "/static/google-logo-icon-png-transparent-background-osteopathy-16.png"
    const img2 = "/static/Google_mic.svg.png"
    return (
        <Box m={2} bgcolor={'white'} borderRadius={6} p={1}>
            <Stack alignItems={'center'} direction={'row'} justifyContent='space-between'>
                <CardMedia src={`${img1}`} component={'img'} sx={{ height: 30, width: 30, ml: 0.5 }} />
                <CardMedia src={`${img2}`} component={'img'} sx={{ height: 23, width: 15, mr: 1 }} />
            </Stack>
        </Box>
    )
}

export default GoogleSearch