import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import InfoBorder from '../InfoBorder'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import SyncIcon from '@material-ui/icons/Sync'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AssessmentIcon from '@material-ui/icons/Assessment'
import EcoIcon from '@material-ui/icons/Eco'
import BuildIcon from '@material-ui/icons/Build'

import ReceiptIcon from '@material-ui/icons/Receipt'

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.light,
        backgroundImage: `url(${'/illustrations/factory.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30%',
        backgroundPosition: 'bottom  right 10%',
        padding: '6% 0',
    },
    containerIcon: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: '2rem',
    },
    icon: {
        color: colors.dark,
    },
    gridMain: {
        minHeight: '80vh',
    },
})

const PhasesApplication = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container className={classes.gridMain} justifyContent="center">
                    <Grid item container xs={12} md={3} lg={3} justifyContent="center">
                        <InfoBorder
                            info="1 - Farmacos"
                            color={colors.pink}
                            icon={<EcoIcon fontSize="large" color="primary" />}
                        />
                    </Grid>
                    <Grid item container xs={12} md={3} lg={3} justifyContent="center">
                        <InfoBorder
                            info="2 - Laboratorio"
                            color={colors.dark}
                            icon={
                                <SyncIcon fontSize="large" className={classes.icon} />
                            }
                        />
                    </Grid>
                    <Grid item container xs={12} md={3} lg={3} justifyContent="center">
                        <InfoBorder
                            info="3 - Fábrica"
                            color={colors.pink}
                            icon={<BuildIcon fontSize="large" color="primary" />}
                        />
                    </Grid>
                    <Grid item container xs={12} md={3} lg={3} justifyContent="center">
                        <InfoBorder
                            info="4 - Sistema de embalagem"
                            color={colors.dark}
                            icon={
                                <ReceiptIcon
                                    fontSize="large"
                                    className={classes.icon}
                                />
                            }
                        />
                    </Grid>
                    <Grid item container xs={12} md={4} lg={4} justifyContent="center">
                        <InfoBorder
                            info="5 - Controladoria de peso"
                            color={colors.pink}
                            icon={<AssessmentIcon fontSize="large" color="primary" />}
                        />
                    </Grid>
                    <Grid item container xs={12} md={4} lg={4} justifyContent="center">
                        <InfoBorder
                            info="6 - Testes"
                            color={colors.dark}
                            icon={
                                <AssignmentIcon
                                    fontSize="large"
                                    className={classes.icon}
                                />
                            }
                        />
                    </Grid>
                    <Grid item container xs={12} md={4} lg={4} justifyContent="center">
                        <InfoBorder
                            info="7 - Distribuidora"
                            color={colors.pink}
                            icon={
                                <LocalShippingIcon fontSize="large" color="primary" />
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default PhasesApplication
