import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import history from '../../../../history'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        backgroundColor: colors.dark,
        // backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        // backgroundImage: `url(${'/illustrations/welcome_follow.svg'})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '36rem',
        // backgroundPosition: 'center',

        // background-repeat: no-repeat;
        // backgroundAttachment: 'fixed',
        // backgroundPosition: 'bottom 100px left 100px',
    },
    bgGrid: {
        backgroundImage: `url(${'/illustrations/welcome_follow.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '60%',
        backgroundPosition: 'center',
        minHeight: '40vh',
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
        // <div className={classes.root}>
        <Grid container className={classes.root}>
            <Grid item xs={12} md={6} lg={6} className={classes.bgGrid} />
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
            {/* <div className={classes.containerDescription}>
                <Typography variant="h2" gutterBottom>
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
            </div> */}
        </Grid>
        // </div>
    )
}

export default Welcome
