import { ArrowDownwardOutlined } from '@mui/icons-material'
import { Button, Container, Dialog, Slide } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ChromeApp from '../../../apps/chrome/ChromeApp'
import { GlobalContext } from '../../../context/GlobalContext'
import MenuSearchBar from '../../../global/menu-search/MenuSearchBar'
import TopAction from '../../../global/top-action/TopAction'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MenuHomeInit = () => {
    const GLOBAL_CONTEXT = React.useContext(GlobalContext)
    return (
        <Dialog TransitionComponent={Transition} fullScreen open={GLOBAL_CONTEXT.data.dialo_home_menu} >
            <Box minHeight={'100vh'} bgcolor='action.hover'>
                <TopAction />
                <Button
                    onClick={() => GLOBAL_CONTEXT.setData({ ...GLOBAL_CONTEXT.data, dialo_home_menu: false })} color='inherit' fullWidth size='small'>
                    <ArrowDownwardOutlined />
                </Button>
                <Box p={2}>
                    <MenuSearchBar />
                </Box>

                <Container maxWidth='lg'>
                    <ChromeApp />
                </Container>
            </Box>
        </Dialog>
    )
}

export default MenuHomeInit