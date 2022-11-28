import { Button, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.dark,
        padding: '3%  0',
    },
    gridMain: {
        minHeight: '100vh',
    },
    bgGrid: {
        backgroundImage: `url(${'/illustrations/welcome_follow.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60%',
        backgroundPosition: 'center',
        minHeight: '60vh',
    },
    containerDescription: {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    span: {
        color: colors.pink,
    },
})

const Welcome = () => {
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
                        className={classes.bgGrid}
                    />
                    <Grid
                        item
                        container
                        justifyContent="center"
                        xs={12}
                        md={6}
                        lg={6}
                        direction="column"
                        alignItems="center"
                    >
                        <Typography variant="h2" gutterBottom align="center">
                            <span className={classes.span}>Bem-vindo </span>a sua nova
                            experiência em rastreabilidade
                        </Typography>
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            // onClick={() => history.push('/follow')}
                            onClick={() => window.open('/follow')}
                        >
                            Me leve ao Follow
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Welcome
