import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '50vh',
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
        width: '30rem',
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
