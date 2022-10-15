import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Laboratory } from './Pages/Laboratory'
import { Pharmaco } from './Pages/Pharmaco'
import { Factory } from './Pages/Factory'
import { PackgingSystem } from './Pages/PackgingSystem'
import { WeightController } from './Pages/WeightController'
import { Tests } from './Pages/Tests'
import { Distributor } from './Pages/Distributor'
import { TableTransactions } from './Pages/TableTransactions'
import { TabPanelDetails } from './Components/TabPanelDetails'
import { TablePossibleFraudes } from './Pages/TablePossibleFrauds'
import Login from './Pages/Login'
import { Context } from './Context/AuthContext'
import LandingPage from './Pages/LandingPage'

const CustomRouter = ({ isPrivite, ...rest }) => {
    const { authenticated } = useContext(Context)

    if (isPrivite && !authenticated) {
        return <Redirect to="/" />
    }

    return <Route {...rest} />
}

export const Routes = () => {
    return (
        <Switch>
            <CustomRouter exact path="/follow" component={LandingPage} />
            <CustomRouter exact path="/" component={Login} />
            <CustomRouter exact isPrivite path="/pharmaco" component={Pharmaco} />
            <CustomRouter exact isPrivite path="/laboratory" component={Laboratory} />
            <CustomRouter exact isPrivite path="/factory" component={Factory} />
            <CustomRouter
                exact
                isPrivite
                path="/packgingsystem"
                component={PackgingSystem}
            />
            <CustomRouter
                exact
                isPrivite
                path="/weightcontroller"
                component={WeightController}
            />
            <CustomRouter exact isPrivite path="/tests" component={Tests} />
            <CustomRouter exact isPrivite path="/distributor" component={Distributor} />
            <CustomRouter
                exact
                path="/tableTransactions"
                component={TableTransactions}
            />

            {/* <CustomRouter
                exact
                path="/searchTrackingSimulator"
                component={SearchTrackingSimulator}
            /> */}
            {/* <CustomRouter
                exact
                path="/trackingSimulator"
                component={TrackingSimulator}
            /> */}
            <CustomRouter exact path="/tabPanelDetails" component={TabPanelDetails} />
            <CustomRouter
                exact
                path="/tablePossibleFrauds"
                component={TablePossibleFraudes}
            />
        </Switch>
    )
}
