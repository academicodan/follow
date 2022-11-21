import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import InfoBorder from '../InfoBorder'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import SyncIcon from '@material-ui/icons/Sync'
// import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'; - Test
import AssignmentIcon from '@material-ui/icons/Assignment'
// import AvTimerIcon from '@material-ui/icons/AvTimer'; = Test
import AssessmentIcon from '@material-ui/icons/Assessment'
import EcoIcon from '@material-ui/icons/Eco'
// import BusinessIcon from '@material-ui/icons/Business'; - Fabrica
// Fabrica
import BuildIcon from '@material-ui/icons/Build'

import ReceiptIcon from '@material-ui/icons/Receipt'
import history from '../../../../history'

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        backgroundColor: colors.light,
        backgroundImage: `url(${'/illustrations/factory.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '40%',
        // teams,
        // backgroundPosition: 'center',

        // background-repeat: no-repeat;
        // backgroundAttachment: 'fixed',
        // backgroundPosition: 'bottom  right 10%',
        // padding: '0px 80px 0px 80px',
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
})

const PhasesApplication = () => {
    const classes = useStyles()
    // <CropFreeOutlinedIcon fontSize="large" color="primary" />
    return (
        // <div className={classes.root}>
        //     <div className={classes.containerIcon}>
        //         <InfoBorder
        //             info="1 - Farmacos"
        //             color={colors.pink}
        //             icon={<EcoIcon fontSize="large" color="primary" />}
        //         />
        // <InfoBorder
        //     info="2 - Laboratorio"
        //     color={colors.dark}
        //     icon={<SyncIcon fontSize="large" className={classes.icon} />}
        // />
        //         <InfoBorder
        //             info="3 - Fábrica"
        //             color={colors.pink}
        //             icon={<BuildIcon fontSize="large" color="primary" />}
        //         />
        //         <InfoBorder
        //             info="4 - Sistema de embalagem"
        //             color={colors.dark}
        //             icon={<ReceiptIcon fontSize="large" className={classes.icon} />}
        //         />
        //     </div>
        //     <div className={classes.containerIcon}>
        //         <InfoBorder
        //             info="5 - Controladoria de peso"
        //             color={colors.pink}
        //             icon={<AssessmentIcon fontSize="large" color="primary" />}
        //         />
        //         <InfoBorder
        //             info="6 - Testes"
        //             color={colors.dark}
        //             icon={<AssignmentIcon fontSize="large" className={classes.icon} />}
        //         />
        //         <InfoBorder
        //             info="7 - Distribuidora"
        //             color={colors.pink}
        //             icon={<LocalShippingIcon fontSize="large" color="primary" />}
        //         />
        //     </div>
        //     <Button
        //         variant="outlined"
        //         color="primary"
        //         size="large"
        //         className={classes.button}
        //         // onClick={() => history.push('/login')}
        //         onClick={() => window.open('/login')}
        //     >
        //         Registrar etapas do processo
        //     </Button>
        // </div>

        <Grid container className={classes.root}>
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
                    icon={<SyncIcon fontSize="large" className={classes.icon} />}
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
                    icon={<ReceiptIcon fontSize="large" className={classes.icon} />}
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
                    icon={<AssignmentIcon fontSize="large" className={classes.icon} />}
                />
            </Grid>
            <Grid item container xs={12} md={4} lg={4} justifyContent="center">
                <InfoBorder
                    info="7 - Distribuidora"
                    color={colors.pink}
                    icon={<LocalShippingIcon fontSize="large" color="primary" />}
                />
            </Grid>
        </Grid>
    )
}

export default PhasesApplication
