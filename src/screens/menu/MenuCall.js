import { Call } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import DialNumber from './menu-call/DialNumber'

const MenuCall = () => {
    const GLOBAL_CONTEXT = React.useContext(GlobalContext)
    return (
        <>
            <DialNumber />
            <Box borderRadius={'50%'} bgcolor='white' boxShadow={10}  >
                <IconButton
                    onClick={() => GLOBAL_CONTEXT.setData({ ...GLOBAL_CONTEXT.data, dial_dialog: true })}>
                    <Call sx={{ color: 'black' }} />
                </IconButton>
            </Box>
        </>

    )
}

export default MenuCall