import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MenuHome = () => {
    return (
        <Box borderRadius={'50%'} bgcolor='white' boxShadow={10}  >
            <IconButton>
                <Menu sx={{ color: 'black' }} />
            </IconButton>
        </Box>
    )
}

export default MenuHome