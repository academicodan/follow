import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import history from '../../../../history'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100vh',
        backgroundColor: colors.dark,
        // backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
        backgroundImage: `url(${'/illustrations/welcome_follow.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '36rem',
        // backgroundPosition: 'center',

        // background-repeat: no-repeat;
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'bottom 100px left 100px',
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
            <div className={classes.containerDescription}>
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
            </div>
        </div>
    )
}

export default Welcome
