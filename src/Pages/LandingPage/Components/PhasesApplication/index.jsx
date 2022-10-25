import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import InfoBorder from '../InfoBorder'

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
})

const PhasesApplication = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.containerIcon}>
                <InfoBorder info="Farmacos" color={colors.pink} />
                <InfoBorder info="Laboratorio" color={colors.dark} />
                <InfoBorder info="Fábrica" color={colors.pink} />
                <InfoBorder info="Sistema de embalagem" color={colors.dark} />
            </div>
            <div className={classes.containerIcon}>
                <InfoBorder info="Controladoria de peso" color={colors.pink} />
                <InfoBorder info="Testes" color={colors.dark} />
                <InfoBorder info="Distribuidora" color={colors.pink} />
            </div>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.button}
            >
                Registrar etapas do processo
            </Button>
        </div>
    )
}

export default PhasesApplication
