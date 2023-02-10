import React from 'react'
import { Backdrop, Button, Dialog, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system';

export default function WidthDialogAlert() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const width = window.innerWidth
        if (width > 786) {
            setOpen(true)
        }
    }, [])

    return (
        <Dialog
            fullWidth
            onClose={() => { }}
            open={open}
            sx={{
                backdropFilter: "blur(6px)",
                backgroundColor: 'transparent'
                //other styles here
            }}
        >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <Stack p={2} alignItems='center' direction={'column'} spacing={4}>
                    <Typography align='center' >Resuce your browser window width size by less than 786px or use mobile device to get better experience.</Typography>
                    <Button onClick={() => setOpen(false)} >Close this alert</Button>
                    <Typography align='center' fontSize={12} color='gray' >Love from Hamid Saifi</Typography>
                </Stack>
            </Backdrop>
        </Dialog>
    );
}
