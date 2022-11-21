import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import ConsultCard from '../ConsultCard'
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined'
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined'
const useStyles = makeStyles({
    root: {
        minHeight: '70vh',
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
})

const ConsultInformation = () => {
    const classes = useStyles()
    return (
        // <div className={classes.root}>
        //     <div className={classes.containerBady}>
        //         <div className={classes.containerInfo}>
        //             <Typography variant="h2" color="primary" className={classes.title}>
        //                 Como podemos consultar essas informaçoes?
        //             </Typography>
        //         </div>
        //         <div className={classes.containerCards}>
        // <ConsultCard
        //     info={'Leitor padrão de QRCode para abrir uma página Web.'}
        //     icon={<CropFreeOutlinedIcon fontSize="large" color="primary" />}
        // />
        // <ConsultCard
        //     info={
        //         'Utilizando nosso app de realidade aumentada que pode também ler o QRCode e nos retornar o resultado de confiabilidade no medicamento de forma bem mais divertidade inovadora'
        //     }
        //     icon={
        //         <BurstModeOutlinedIcon fontSize="large" color="primary" />
        //     }
        // />
        //         </div>
        //     </div>
        // </div>
        <Grid container className={classes.root}>
            <Grid item container xs={12} md={4} lg={4}>
                <Typography variant="h2" color="primary" className={classes.title}>
                    Como podemos consultar essas informaçoes?
                </Typography>
            </Grid>
            <Grid item container xs={12} md={8} lg={8} justifyContent="center">
                <ConsultCard
                    info={'Leitor padrão de QRCode para abrir uma página Web.'}
                    icon={<CropFreeOutlinedIcon fontSize="large" color="primary" />}
                />
                <ConsultCard
                    info={
                        'Utilizando nosso app de realidade aumentada que pode também ler o QRCode e nos retornar o resultado de confiabilidade no medicamento de forma bem mais divertidade inovadora'
                    }
                    icon={<BurstModeOutlinedIcon fontSize="large" color="primary" />}
                />
            </Grid>
        </Grid>
    )
}

export default ConsultInformation
