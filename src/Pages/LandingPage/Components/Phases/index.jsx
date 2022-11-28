import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.light,
    },
    containerInfo1: {
        color: colors.dark,
    },
    img: {
        width: '16rem',
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
    gridMain: {
        minHeight: '70vh',
    },
})

const Phases = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container className={classes.gridMain}>
                    <Grid
                        item
                        container
                        xs={12}
                        md={6}
                        lg={6}
                        direction="column"
                        alignItems="center"
                        className={classes.containerInfo1}
                    >
                        <Typography
                            variant="h2"
                            className={classes.smartTitle}
                            paragraph
                            align="center"
                        >
                            Etapas do processo
                        </Typography>
                        <Typography variant={'subtitle1'} align="center">
                            Inserimos as informações na Blockchain por etapas, cada uma
                            delas respeitando as regras definidas no nosso{' '}
                            <span className={classes.span}>Contrato Inteligente</span>.
                        </Typography>
                        <img
                            src="/illustrations/laboratory.svg"
                            alt="laboratory"
                            className={classes.img}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        md={6}
                        lg={6}
                        direction="column"
                        alignItems="center"
                        className={classes.containerInfo1}
                    >
                        <Typography
                            variant="h2"
                            className={classes.smartTitle}
                            paragraph
                            align="center"
                        >
                            Contrato Inteligente
                        </Typography>
                        <Typography variant={'subtitle1'} paragraph align="center">
                            É um tipo de contrato digital que garante a auto-excecução
                            das clausulas, sempre que as condições contratuais previstas
                            são atendidas.
                        </Typography>
                        <Typography variant={'subtitle1'} align="center">
                            Codificamos no nosso SmartContract{' '}
                            <span className={classes.span}>
                                todas as etapas do processo de fabricação de
                                medicamentos
                            </span>{' '}
                            , onde a validação é feita de forma individual de acordo o
                            item que deseja registrar na blockchain, e assim a inserção
                            é feita de maneira correta.
                        </Typography>
                        <img
                            src="/illustrations/accept_terms.svg"
                            alt="laboratory"
                            className={classes.img}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Phases
