import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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
import LandingPage from './Pages/LandingPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/pharmaco" exact component={Pharmaco} />
            <Route path="/laboratory" component={Laboratory} />
            <Route path="/factory" component={Factory} />
            <Route path="/packgingsystem" component={PackgingSystem} />
            <Route path="/weightcontroller" component={WeightController} />
            <Route path="/tests" component={Tests} />
            <Route path="/distributor" component={Distributor} />
            <Route
                path="/searchTrackingSimulator"
                component={SearchTrackingSimulator}
            />
            <Route path="/trackingSimulator" component={TrackingSimulator} />
            <Route path="/tableTransactions" component={TableTransactions} />
            <Route
                path="/detailsTableTransactions"
                component={DetailsTableTransactions}
            />
            <Route path="/tabPanelDetails" component={TabPanelDetails} />
            <Route path="/tablePossibleFrauds" component={TablePossibleFraudes} />
        </BrowserRouter>
    )
}
