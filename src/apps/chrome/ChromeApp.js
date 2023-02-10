import { CardMedia, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChromeApp = () => {
    return (
        <IconButton component={Link} to="/app/chrome" >
            <CardMedia src="/image/google-chrome-icon-png-logo-1.png" component={'img'} height={50} />
        </IconButton>
    )
}

export default ChromeApp