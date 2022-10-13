import React from 'react'
import { Tab, Tabs, IconButton } from '@material-ui/core'
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined'
import { Link } from 'react-router-dom'
import { HeaderTabsContainer } from './HeaderTabs.styled'
import {
    possivelFraudeFarmacos,
    possivelFraudeLoteLabs,
    possivelFraudeFabrica,
    possivelFraudeValidaPeso,
    possivelFraudeTestesMicro,
    possivelFraudeDistribuidora,
} from '../../General/blockchainTrackFunctions'
import LabelIcon from '../LabelIcon'

export const HeaderTabs = ({ value, handleChange }) => {
    return (
        <HeaderTabsContainer>
            <div>
                <Link to="/tableTransactions" style={{ textDecoration: 'none' }}>
                    <IconButton size="large" type="submit" color="primary">
                        <NavigateBeforeOutlinedIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            <Tabs
                value={value}
                onChange={(e, value) => handleChange(value)}
                textColor="secondary"
            >
                <Tab
                    label={
                        <LabelIcon
                            label={'Fármacos'}
                            validation={possivelFraudeFarmacos}
                        />
                    }
                    id="0"
                    aria-controls="0"
                />
                <Tab
                    label={
                        <LabelIcon
                            label={'Laboratórios'}
                            validation={possivelFraudeLoteLabs}
                        />
                    }
                    id="1"
                    aria-controls="1"
                />
                <Tab
                    label={
                        <LabelIcon
                            label={'Fábrica'}
                            validation={possivelFraudeFabrica}
                        />
                    }
                    id="2"
                    aria-controls="2"
                />
                <Tab
                    label={
                        <LabelIcon
                            label={'Sistema de Embalagens'}
                            // validation={}
                        />
                    }
                    id="3"
                    aria-controls="3"
                />
                <Tab
                    label={
                        <LabelIcon
                            label={'Controladoria de Peso'}
                            validation={possivelFraudeValidaPeso}
                        />
                    }
                    id="4"
                    aria-controls="4"
                />
                <Tab
                    label={
                        <LabelIcon
                            label={'Testes'}
                            validation={possivelFraudeTestesMicro}
                        />
                    }
                    id="5"
                    aria-controls="5"
                />
                <Tab
                    label={
                        <LabelIcon
                            label={'Distribuidora'}
                            validation={possivelFraudeDistribuidora}
                        />
                    }
                    id="6"
                    aria-controls="6"
                />
            </Tabs>
        </HeaderTabsContainer>
    )
}
