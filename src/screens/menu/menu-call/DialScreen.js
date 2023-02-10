import { ArrowDownwardOutlined, Backspace, Call } from '@mui/icons-material';
import { Box, Button, ButtonBase, Dialog, Grid, IconButton, Slide, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import TopAction from '../../../global/top-action/TopAction';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const DialScreen = () => {
    const GLOBAL_CONTEXT = React.useContext(GlobalContext)
    const [num, setNum] = React.useState("")
    return (
        <Dialog
            onClose={() => GLOBAL_CONTEXT.setData({ ...GLOBAL_CONTEXT.data, dial_number: false })}
            open={GLOBAL_CONTEXT.data.dial_number}
            TransitionComponent={Transition} fullScreen>



            <Grid container >
                <Grid sx={{ position: 'absolute', right: 0, left: 0, top: 0 }} item>
                    <TopAction />
                    <Button
                        onClick={() => GLOBAL_CONTEXT.setData({ ...GLOBAL_CONTEXT.data, dial_number: false })} color='inherit' fullWidth size='small'>
                        <ArrowDownwardOutlined />
                    </Button>

                    <Container maxWidth='lg'>
                        <Stack direction={'row'} alignItems='center'>
                            <Typography variant='h6' >{num}</Typography>
                        </Stack>
                    </Container>
                </Grid>
                <Grid sx={{ position: 'absolute', right: 0, left: 0, bottom: 0 }} item>
                    <Box mt={2}>
                        <Grid container>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("1"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >1</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("2"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >2</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("3"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >3</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("4"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >4</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("5"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >5</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("6"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >6</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("7"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >7</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("8"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >8</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("9"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >9</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("*"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >*</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("0"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >0</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={4} sm={4} lg={4} item>
                                <Stack display='flex' alignItems='center' justifyContent={'center'} minHeight={'15vh'} width='100%'>
                                    <IconButton onClick={() => setNum(num.concat("#"))} >
                                        <Box p={2} height={60} width={60} borderRadius={60 / 5} bgcolor='action.hover' display={'flex'} alignItems='center' justifyContent={'center'} >
                                            <Typography variant='h5' >#</Typography>
                                        </Box>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid xs={12} sm={12} lg={12} item>
                                <Stack minHeight={80} direction={'row'} justifyContent='space-around'>
                                    <IconButton onClick={() => window.location.href = `tel:${num}`} >
                                        <Call />
                                    </IconButton>
                                    <IconButton onClick={() => setNum(num.substring(0, num.length - 1))} >
                                        <Backspace />
                                    </IconButton>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>
            </Grid>
        </Dialog>
    )
}

export default DialScreen