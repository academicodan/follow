import { CssBaseline } from '@material-ui/core'
import React from 'react'
import ConsultInformation from './Components/ConsultInformation'
import FollowApplication from './Components/FollowApplication'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Mission from './Components/Mission'
import Phases from './Components/Phases'
import PhasesApplication from './Components/PhasesApplication'
import Team from './Components/Team'
import UserProcess from './Components/UserProcess'
import Welcome from './Components/Welcome'

const LandingPage = () => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Welcome />
            <FollowApplication />
            <UserProcess />
            <ConsultInformation />
            <Phases />
            <PhasesApplication />
            <Mission />
            <Team />
            <Footer />
        </div>
    )
}

export default LandingPage
