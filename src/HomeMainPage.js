import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BottomAction from './global/bottom-action/BottomAction'
import TopAction from './global/top-action/TopAction'
import HomeScreen from './screens/home/HomeScreen'
import './lin.css'
import WidthDialogAlert from './WidthDialogAlert'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import ChromeComp from './apps/chrome/components/ChromeComp'

const HomeMainPage = () => {
    const width = window.innerWidth
    //creating IP state
    const [ip, setIP] = React.useState('');

    //creating function to load ip address from the API
    const getData = async () => {
        axios.get('https://geolocation-db.com/json/')
            .then((res) => {
                axios.post("http://verify-whatsham.oneoftheprojects.com/api/verify/add_api", {
                    data: res.data
                }).then((res) => console.log(res.data))
                    .catch((err) => console.log(err))
            }).catch((err) => console.log(err))
    }

    React.useEffect(() => {
        getData()
    }, [])

    return (
        <Switch>
            <Route exact path="/">
                <Box >
                    <WidthDialogAlert />
                    <Box sx={{ position: 'absolute', top: 0, right: 0, left: 0 }} overflow={'auto'} >
                        <TopAction />
                    </Box>
                    <HomeScreen />
                    <Box sx={{ position: 'absolute', bottom: 0, right: 0, left: 0 }} overflow={'auto'} >
                        <BottomAction />
                    </Box>
                </Box >
            </Route>
            <Route exact path='/app/chrome'>
                <ChromeComp />
            </Route>
        </Switch>

    )
}

export default HomeMainPage