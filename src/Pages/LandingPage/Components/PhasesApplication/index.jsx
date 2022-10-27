import { Button } from '@material-ui/core'
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: colors.light,
        backgroundImage: `url(${'/illustrations/factory.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '24rem',
        // backgroundPosition: 'center',

        // background-repeat: no-repeat;
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'bottom 120px right 160px',
        padding: '0px 140px 0px 140px',
    },
    containerIcon: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        marginTop: '4rem',
    },
    icon: {
        color: colors.dark,
    },
})

const PhasesApplication = () => {
    const classes = useStyles()
    // <CropFreeOutlinedIcon fontSize="large" color="primary" />
    return (
        <div className={classes.root}>
            <div className={classes.containerIcon}>
                <InfoBorder
                    info="1 - Farmacos"
                    color={colors.pink}
                    icon={<EcoIcon fontSize="large" color="primary" />}
                />
                <InfoBorder
                    info="2 - Laboratorio"
                    color={colors.dark}
                    icon={<SyncIcon fontSize="large" className={classes.icon} />}
                />
                <InfoBorder
                    info="3 - Fábrica"
                    color={colors.pink}
                    icon={<BuildIcon fontSize="large" color="primary" />}
                />
                <InfoBorder
                    info="4 - Sistema de embalagem"
                    color={colors.dark}
                    icon={<ReceiptIcon fontSize="large" className={classes.icon} />}
                />
            </div>
            <div className={classes.containerIcon}>
                <InfoBorder
                    info="5 - Controladoria de peso"
                    color={colors.pink}
                    icon={<AssessmentIcon fontSize="large" color="primary" />}
                />
                <InfoBorder
                    info="6 - Testes"
                    color={colors.dark}
                    icon={<AssignmentIcon fontSize="large" className={classes.icon} />}
                />
                <InfoBorder
                    info="7 - Distribuidora"
                    color={colors.pink}
                    icon={<LocalShippingIcon fontSize="large" color="primary" />}
                />
            </div>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.button}
                // onClick={() => history.push('/login')}
                onClick={() => window.open('/login')}
            >
                Registrar etapas do processo
            </Button>
        </div>
    )
}

export default PhasesApplication
