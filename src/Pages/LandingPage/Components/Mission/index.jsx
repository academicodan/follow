import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined'
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined'
import CardInfoIcon from '../CardInfoIcon'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
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
    title: {
        color: colors.pink,
        marginBottom: '2rem',
    },
    containerMain: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.2rem',
    },
})

const Mission = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                Propósitos? Nós temos!
            </Typography>
            <div className={classes.containerMain}>
                <CardInfoIcon
                    title="Missão"
                    info="Somos uma empresa que oferece como solução um sistema de ratreamento de medicamentos durante a etapa de fabricação e validação de etapas com uso da tecnologia blockchain para os laboratórios farmacêuticos."
                    icon={<TrackChangesOutlinedIcon color="primary" fontSize="large" />}
                />
                <CardInfoIcon
                    title="Visão"
                    info="Ser a maior empresa de rastreamento de medicamentos com uso de tecnologia blockchain, garantindo segurança e confiabilidade aos laboratórios farmacêuticos e consumidores."
                    icon={<VisibilityOutlinedIcon color="primary" fontSize="large" />}
                />
                <CardInfoIcon
                    title="Valores"
                    info="Construímos valores com Transparência, Sustentabilidade, Satisfação do cliente, Ética, Responsabilidade Social e Respeito."
                    icon={<MoneyOutlinedIcon color="primary" fontSize="large" />}
                />
            </div>
        </div>
    )
}

export default Mission
