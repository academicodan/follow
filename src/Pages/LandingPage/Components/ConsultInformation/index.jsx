import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import ConsultCard from '../ConsultCard'
import BurstModeOutlinedIcon from '@material-ui/icons/BurstModeOutlined'
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined'
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
        <div className={classes.root}>
            <div className={classes.containerBady}>
                <div className={classes.containerInfo}>
                    <Typography variant="h2" color="primary" className={classes.title}>
                        Como podemos consultar essas informaçoes?
                    </Typography>
                </div>
                <div className={classes.containerCards}>
                    <ConsultCard
                        info={'Leitor padrão de QRCode para abrir uma página Web.'}
                        icon={<CropFreeOutlinedIcon fontSize="large" color="primary" />}
                    />
                    <ConsultCard
                        info={
                            'Utilizando nosso app de realidade aumentada que pode também ler o QRCode e nos retornar o resultado de confiabilidade no medicamento de forma bem mais divertidade inovadora'
                        }
                        icon={
                            <BurstModeOutlinedIcon fontSize="large" color="primary" />
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default ConsultInformation
