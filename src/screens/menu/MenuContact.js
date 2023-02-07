import { Contacts } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MenuContact = () => {
    return (
        <Box borderRadius={'50%'} bgcolor='white' boxShadow={10} >
            <IconButton>
                <Contacts sx={{ color: 'black' }} />
            </IconButton>
        </Box>
    )
}

export default MenuContact