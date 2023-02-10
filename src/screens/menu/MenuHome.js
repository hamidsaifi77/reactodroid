import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import MenuHomeInit from './menu-home/MenuHomeInit'

const MenuHome = () => {
    const GLOBAL_CONTEXT = React.useContext(GlobalContext)
    return (
        <Box borderRadius={'50%'} bgcolor='white' boxShadow={10}  >
            <MenuHomeInit />
            <IconButton onClick={() => GLOBAL_CONTEXT.setData({ ...GLOBAL_CONTEXT.data, dialo_home_menu: true })} >
                <Menu sx={{ color: 'black' }} />
            </IconButton>
        </Box>
    )
}

export default MenuHome