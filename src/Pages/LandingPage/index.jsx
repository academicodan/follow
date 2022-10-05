import { Collapse, CssBaseline } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Components/Header'
import Teste from './Components/Teste'
import WelcomeContent from './Components/WelcomeContent'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        // backgroundImage: `url(${"/assets/bg.jpg"})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        backgroundColor: '#1C1E26',
    },
}))

const LandingPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <WelcomeContent />
            <Teste backGround={{ backgroundColor: '#F2858e' }} />
            <Teste backGround={{ backgroundColor: '#FFF' }} />
            <Teste backGround={{ backgroundColor: '#1C1E26' }} />
            <Teste backGround={{ backgroundColor: '#F2858e' }} />
        </div>
    )
}

export default LandingPage
