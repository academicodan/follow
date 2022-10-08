import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Laboratory } from './Pages/Laboratory'
import { Pharmaco } from './Pages/Pharmaco'
import { Factory } from './Pages/Factory'
import { PackgingSystem } from './Pages/PackgingSystem'
import { WeightController } from './Pages/WeightController'
import { Tests } from './Pages/Tests'
import { Distributor } from './Pages/Distributor'
import { SearchTrackingSimulator } from './Pages/SearchTrackingSimulator'
import { TrackingSimulator } from './Pages/TrackingSimulator'
import { TableTransactions } from './Pages/TableTransactions'
import { DetailsTableTransactions } from './Components/DetailsTableTransactions'
import { TabPanelDetails } from './Components/TabPanelDetails'
import { TablePossibleFraudes } from './Pages/TablePossibleFrauds'
import Login from './Pages/Login'
import { Context } from './Context/AuthContext'

const CustomRouter = ({ isPrivite, ...rest }) => {
    const { authenticated } = useContext(Context)

    if (isPrivite && !authenticated) {
        return <Redirect to="/" />
    }

    return <Route {...rest} />
}

export const Routes = () => {
    // return (
    //     <BrowserRouter>
    //         <Route path="/" exact component={Login} />
    //         {/* <Route path="/" exact component={Pharmaco} /> */}
    //         <Route path="/laboratory" component={Laboratory} />
    //         <Route path="/factory" component={Factory} />
    //         <Route path="/packgingsystem" component={PackgingSystem} />
    //         <Route path="/weightcontroller" component={WeightController} />
    //         <Route path="/tests" component={Tests} />
    //         <Route path="/distributor" component={Distributor} />
    //         <Route
    //             path="/searchTrackingSimulator"
    //             component={SearchTrackingSimulator}
    //         />
    //         <Route path="/trackingSimulator" component={TrackingSimulator} />
    //         <Route path="/tableTransactions" component={TableTransactions} />
    //         <Route
    //             path="/detailsTableTransactions"
    //             component={DetailsTableTransactions}
    //         />
    //         <Route path="/tabPanelDetails" component={TabPanelDetails} />
    //         <Route path="/tablePossibleFrauds" component={TablePossibleFraudes} />
    //     </BrowserRouter>
    // )

    return (
        <Switch>
            <CustomRouter exact path="/" component={Login} />
            <CustomRouter exact isPrivite path="/pharmaco" component={Pharmaco} />
            <CustomRouter exact isPrivite path="/laboratory" component={Laboratory} />
            <CustomRouter
                exact
                isPrivite
                path="/tablePossibleFrauds"
                component={TablePossibleFraudes}
            />
        </Switch>
    )
}
