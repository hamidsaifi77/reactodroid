import { Filter1, Home, HomeOutlined, MoreVert, ShareOutlined } from '@mui/icons-material'
import { Button, Container, Divider, Grid, IconButton, Popover, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import BottomAction from '../../../global/bottom-action/BottomAction'
import TopAction from '../../../global/top-action/TopAction'

const ChromeComp = () => {
    const [state, setState] = React.useState({
        url: "https://hamidsaifi.com"
    })
    const history = useHistory()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    return (
        <div>
            <Box sx={{ position: 'absolute', top: 0, right: 0, left: 0 }} overflow={'auto'} >
                <TopAction />
            </Box>

            <Box mt={4}>
                <Stack pr={1} pl={1} pb={1} direction={'row'} spacing={1}>
                    <IconButton onClick={() => setState({ ...state, url: "https://hamidsaifi.com" })} color='inherit' >
                        <HomeOutlined />
                    </IconButton>
                    <input
                        onChange={(e) => setState({ ...state, url_link: !e.target.value.match(/^[a-zA-Z]+:\/\//) ? 'http://' + e.target.value : e.target.value })}
                        style={{ padding: 10, borderRadius: 10, borderWidth: 0, backgroundColor: '#F3F3F3', width: '100%', fontSize: 12 }}
                        placeholder={state.url} />

                    <IconButton color='info' onClick={() => setState({ ...state, url: state.url_link })} >
                        <Typography fontWeight={'bold'} variant='caption' >Go</Typography>
                    </IconButton>

                    <IconButton onClick={() => navigator.share(state.url)} color='inherit'>
                        <ShareOutlined />
                    </IconButton>
                    <IconButton color='inherit'>
                        <Filter1 />
                    </IconButton>

                    <IconButton onClick={handleClick} aria-describedby={id} variant="contained" color='inherit'>
                        <MoreVert />
                    </IconButton>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Button component={Link} to="/" >Exit</Button>
                    </Popover>

                </Stack>
                <Divider />

                <iframe height="100%" width="100%" src={state.url} style={{ position: 'absolute', top: "11%", bottom: 0, right: 0, left: 0 }} />
            </Box>

            <Box sx={{ position: 'absolute', bottom: 0, right: 0, left: 0 }} overflow={'auto'} >
                <BottomAction />
            </Box>
        </div >
    )
}

export default ChromeComp