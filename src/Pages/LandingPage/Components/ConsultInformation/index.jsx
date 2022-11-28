import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import ConsultCard from '../ConsultCard'
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined'
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined'
const useStyles = makeStyles({
    root: {
        backgroundColor: colors.light,
        padding: '6% 0',
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
    },
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
    containerCards: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    },
    containerInfo: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridMain: {
        minHeight: '70vh',
    },
})

const ConsultInformation = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container className={classes.gridMain} alignItems="center">
                    <Grid item container xs={12} md={6} lg={6} justifyContent="center">
                        <Typography
                            variant="h2"
                            color="primary"
                            align="center"
                            gutterBottom
                        >
                            Como podemos consultar essas informaçoes?
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} md={6} lg={6} justifyContent="center">
                        <Grid
                            item
                            container
                            xs={12}
                            md={6}
                            lg={6}
                            justifyContent="center"
                        >
                            <ConsultCard
                                info={
                                    'Leitor padrão de QRCode para abrir uma página Web.'
                                }
                                icon={
                                    <CropFreeOutlinedIcon
                                        fontSize="large"
                                        color="primary"
                                    />
                                }
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            md={6}
                            lg={6}
                            justifyContent="center"
                        >
                            <ConsultCard
                                info={
                                    'Utilizando nosso app de realidade aumentada que pode também ler o QRCode e nos retornar o resultado de confiabilidade no medicamento de forma bem mais divertidade inovadora'
                                }
                                icon={
                                    <BurstModeOutlinedIcon
                                        fontSize="large"
                                        color="primary"
                                    />
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ConsultInformation
