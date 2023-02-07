import { Mic, Search } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const SearchContactBar = () => {
    return (
        <Box bgcolor={'action.hover'} borderRadius={4} p={1}>
            <Stack alignItems='center' direction={'row'} justifyContent='space-between' spacing={2}>
                <Stack spacing={2} direction={'row'} alignItems='center' >
                    <Search />
                    <Typography color={'gray'} variant='body2' >Search contacts & place</Typography>
                </Stack>
                <Mic />
            </Stack>
        </Box>
    )
}

export default SearchContactBar