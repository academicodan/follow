import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import InfoCicle from '../InfoCicle'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh',
        backgroundColor: colors.light,
        // backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        // backgroundImage: `url(${'/illustrations/network.svg'})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '',
        // backgroundPosition: 'center',

        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background-position: center;
        padding: '0px 140px 0px 140px',
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
    },
    title: {},
    typografy: {
        color: colors.dark,
    },
    containerBady: {
        display: 'flex',
        width: '100%',
        height: '40vh',
    },
    spanFab: {
        color: colors.pink,
    },
    containerIcon: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInfo: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const FollowApplication = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.containerBady}>
                <div className={classes.containerInfo}>
                    <Typography
                        variant="h2"
                        color="primary"
                        className={classes.title}
                        gutterBottom
                    >
                        Aplicação Follow
                    </Typography>
                    <Typography variant="subtitle1" className={classes.typografy}>
                        Desenvolvemos um sistema que monitora e registra cada etapa da
                        <span className={classes.spanFab}>
                            {' '}
                            fabricação dos medicamentos
                        </span>
                        , utilizando ainda a tecnologia
                        <span className={classes.spanFab}> Blockchain</span> que nos
                        traz muito mais segurança com a imutabilidade das informações.
                    </Typography>
                </div>
                <div className={classes.containerIcon}>
                    <InfoCicle info="Monitoramento" color={colors.pink} />
                    <InfoCicle info="Segurança" color={colors.dark} />
                    <InfoCicle info="Imutabilidade" color={colors.pink} />
                </div>
            </div>
        </div>
    )
}

export default FollowApplication
