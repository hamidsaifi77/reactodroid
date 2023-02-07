import { ArrowDownwardOutlined, CallReceived, CallMissed, CallOutlined, Person, CallMade, Dialpad } from '@mui/icons-material';
import { Box, Button, Dialog, IconButton, Slide, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system';
import moment from 'moment';
import React from 'react'
import { GlobalContext } from '../../../context/GlobalContext';
import SearchContactBar from '../../../global/contact-search/SearchContactBar';
import TopAction from '../../../global/top-action/TopAction';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialNumber = () => {
    const GLOBAL_CONTEXT = React.useContext(GlobalContext)

    const calldata = [
        {
            name: "John Doe",
            type: 'missed',
            time: Date.now()
        },
        {
            name: "Parul",
            type: 'rec',
            time: Date.now()
        },
        {
            name: "Nisha",
            type: 'dial',
            time: Date.now()
        },
        {
            name: "Prashant",
            type: 'dial',
            time: Date.now()
        },
        {
            name: "Deepak",
            type: 'rec',
            time: Date.now()
        },
        {
            name: "Zaheen",
            type: 'rec',
            time: Date.now()
        },
        {
            name: "Mom",
            type: 'rec',
            time: Date.now()
        },
        {
            name: "Dad",
            type: 'rec',
            time: Date.now()
        },
        {
            name: "Bro",
            type: 'dial',
            time: Date.now()
        },
        {
            name: "Bro",
            type: 'dial',
            time: Date.now()
        },
        {
            name: "Bro",
            type: 'dial',
            time: Date.now()
        },

    ]

    return (
        <Dialog
            onClose={() => GLOBAL_CONTEXT.setData({ ...GLOBAL_CONTEXT.data, dial_dialog: false })}
            open={GLOBAL_CONTEXT.data.dial_dialog}
            TransitionComponent={Transition} fullScreen>
            <TopAction />

            <Button
                onClick={() => GLOBAL_CONTEXT.setData({ ...GLOBAL_CONTEXT.data, dial_dialog: false })} color='inherit' fullWidth size='small'>
                <ArrowDownwardOutlined />
            </Button>

            <Container sx={{ mt: 2 }} maxWidth='lg'>
                <SearchContactBar />
                <Box mt={2} >
                    <Stack direction={'column'} spacing={2}>
                        {calldata.map((i, key) => {
                            return (
                                <Stack key={key} alignItems={'center'} direction={'row'} justifyContent='space-between'>
                                    <Stack alignItems={'center'} spacing={2} direction={'row'}>
                                        <Box p={1} bgcolor={'purple'} borderRadius={'50%'}>
                                            <Person />
                                        </Box>
                                        <Stack direction={'column'}>
                                            <Typography variant='body2' fontWeight={'bold'}>
                                                {i.name}
                                            </Typography>
                                            {i.type === "missed" && <Stack spacing={0.5} direction={'row'} alignItems='center'>
                                                <CallMissed sx={{ height: 12, width: 12, color: 'red' }} />
                                                <Typography color={'red'} variant='caption'>{moment(i.time).format("hh:mm A")}</Typography>
                                            </Stack>}
                                            {i.type === "rec" && <Stack spacing={0.5} direction={'row'} alignItems='center'>
                                                <CallReceived sx={{ height: 12, width: 12, }} />
                                                <Typography variant='caption'>{moment(i.time).format("hh:mm A")}</Typography>
                                            </Stack>}
                                            {i.type === "dial" && <Stack spacing={0.5} direction={'row'} alignItems='center'>
                                                <CallMade sx={{ height: 12, width: 12, }} />
                                                <Typography variant='caption'>{moment(i.time).format("hh:mm A")}</Typography>
                                            </Stack>}
                                        </Stack>
                                    </Stack>

                                    <IconButton>
                                        <CallOutlined />
                                    </IconButton>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Box>
            </Container>

            <Box sx={{ bottom: 15, position: "fixed", display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <Box p={0.5} borderRadius={"50%"} bgcolor='white' m={2} boxShadow={10} >
                    <IconButton>
                        <Dialpad sx={{ color: 'black' }} />
                    </IconButton>
                </Box>
            </Box>

        </Dialog >
    )
}

export default DialNumber