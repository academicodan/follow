import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import ConsultInformation from './Components/ConsultInformation'
import FollowApplication from './Components/FollowApplication'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Invitation from './Components/Invitation'
import Mission from './Components/Mission'
import Phases from './Components/Phases'
import PhasesApplication from './Components/PhasesApplication'
import Team from './Components/Team'
import Technologies from './Components/Technologies'
import UserProcess from './Components/UserProcess'
import Welcome from './Components/Welcome'

const useStyles = makeStyles((theme) => ({
    root: {
        // minHeight: '100vh',
        // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        // backgroundImage: `url(${"/assets/bg.jpg"})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundColor: colors,
    },
}))

const LandingPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Welcome />
            <FollowApplication />
            <UserProcess />
            <ConsultInformation />
            <Phases />
            <PhasesApplication />
            {/* <Mission /> */}
            {/* <Team />  */}
            {/* <Invitation /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default LandingPage
