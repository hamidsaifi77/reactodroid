import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import MenuCall from './MenuCall'
import MenuContact from './MenuContact'
import MenuHome from './MenuHome'

const MenuScreenHome = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={'2'} justifyContent='space-around'>
                <Grid item>
                    <MenuCall />
                </Grid>
                <Grid item>
                    <MenuHome />
                </Grid>
                <Grid item>
                    <MenuContact />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MenuScreenHome