import { ChevronLeft, FiberManualRecord, Square } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router-dom'

const BottomAction = () => {
    const history = useHistory()
    return (
        <Box bgcolor={'rgba(0, 0, 0, 0.2)'} >
            <Box mr={'10%'} ml='10%'>
                <Stack alignItems={'center'} direction={'row'} justifyContent='space-between'>
                    <IconButton onClick={() => {
                        history.goBack()
                    }} size='small' >
                        <ChevronLeft sx={{ height: 30, width: 30, color: "white" }} />
                    </IconButton>
                    <IconButton size='small' >
                        <FiberManualRecord sx={{ height: 25, width: 25, color: "white" }} />
                    </IconButton>
                    <IconButton size='small' >
                        <Square sx={{ height: 21, width: 21, color: "white" }} />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    )
}

export default BottomAction