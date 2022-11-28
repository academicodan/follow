import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import InfoCicle from '../InfoCicle'

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        backgroundColor: colors.light,
        // backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        // backgroundImage: `url(${'/illustrations/network.svg'})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '',
        // backgroundPosition: 'center',
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background-position: center;
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
    gridMain: {
        minHeight: '50vh',
    },
})

const FollowApplication = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container className={classes.gridMain} alignItems="center">
                    <Grid
                        item
                        container
                        xs={12}
                        md={7}
                        lg={7}
                        direction="column"
                        alignItems="center"
                    >
                        <Typography
                            variant="h2"
                            color="primary"
                            className={classes.title}
                            gutterBottom
                            align="center"
                        >
                            Aplicação Follow
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.typografy}
                            align="center"
                        >
                            Desenvolvemos um sistema que monitora e registra cada etapa
                            da
                            <span className={classes.spanFab}>
                                {' '}
                                fabricação dos medicamentos
                            </span>
                            , utilizando ainda a tecnologia
                            <span className={classes.spanFab}> Blockchain</span> que nos
                            traz muito mais segurança com a imutabilidade das
                            informações.
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} md={5} lg={5} justifyContent="center">
                        <InfoCicle info="Monitoramento" color={colors.pink} />
                        <InfoCicle info="Segurança" color={colors.dark} />
                        <InfoCicle info="Imutabilidade" color={colors.pink} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FollowApplication
