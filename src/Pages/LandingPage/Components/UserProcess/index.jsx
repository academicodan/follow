import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import SecurityIcon from '@material-ui/icons/Security'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '70vh',
        justifyContent: 'center',
        backgroundColor: colors.light,
        padding: '0px 140px 0px 140px',
    },
    typografy: {
        color: colors.dark,
    },
    spanFab: {
        color: colors.pink,
    },
    containerInfo: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImage: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '26rem',
    },
    icon: {
        color: colors.pink,
        fontSize: '10rem',
        marginBottom: '1rem',
    },
})

const UserProcess = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.containerImage}>
                <img
                    src="/illustrations/localization.svg"
                    alt="localization"
                    className={classes.image}
                />
            </div>
            <div className={classes.containerInfo}>
                <SecurityIcon className={classes.icon} />
                <Typography
                    variant={'subtitle1'}
                    className={classes.typografy}
                    paragraph
                >
                    O Usuário final pode de forma eficiente escanear o QRCode do
                    medicamento na fármacia e terá acesso a todas as etapas de
                    fabricação que foram passadas antes de chegar até a farmácia.
                </Typography>
                <Typography variant={'subtitle1'} className={classes.typografy}>
                    Todas essas informações estarão registradas na blockchain, trazendo
                    muito mais valor e confiabilidade a esse rastreio.
                </Typography>
            </div>
        </div>
    )
}

export default UserProcess
