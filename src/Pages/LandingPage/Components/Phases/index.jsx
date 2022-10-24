import { Container, Grid, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light,
        padding: '0px 140px 0px 140px',
    },
    containerInfo1: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%',
        height: '50%',
        color: colors.dark,
        // backgroundImage: `url(${'/illustrations/result_test.svg'})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '40%',
        // backgroundPosition: 'right bottom',
        // paddingRight: '12rem',
    },
    img: {
        width: '400px',
    },
    containerInfo2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        height: '50%',
        color: colors.dark,

        // backgroundImage: `url(${'/illustrations/laboratory.svg'})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '50%',
        // backgroundPosition: 'bottom right',
        // width: '50%',
    },

    span: {
        color: colors.pink,
    },
})

const Phases = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.containerInfo1}>
                <Typography variant="h2" className={classes.smartTitle} paragraph>
                    Etapas do processo
                </Typography>
                <Typography variant={'subtitle1'}>
                    Inserimos as informações na Blockchain por etapas, cada uma delas
                    respeitando as regras definidas no nosso{' '}
                    <span className={classes.span}>Contrato Inteligente</span>.
                </Typography>
                <img
                    src="/illustrations/laboratory.svg"
                    alt="laboratory"
                    className={classes.img}
                />
            </div>
            <div className={classes.containerInfo2}>
                <Typography variant="h2" className={classes.smartTitle} paragraph>
                    Smart Contract
                </Typography>
                <Typography variant={'subtitle1'} paragraph>
                    É um tipo de contrato digital que garante a auto-excecução das
                    clausulas, sempre que as condições contratuais previstas são
                    atendidas.
                </Typography>
                <Typography variant={'subtitle1'}>
                    Codificamos no nosso SmartContract{' '}
                    <span className={classes.span}>
                        todas as etapas do processo de fabricação de medicamentos
                    </span>{' '}
                    , onde a validação é feita de forma individual de acordo o item que
                    deseja registrar na blockchain, e assim a inserção é feita de
                    maneira correta.
                </Typography>
            </div>
        </div>
    )
}

export default Phases
