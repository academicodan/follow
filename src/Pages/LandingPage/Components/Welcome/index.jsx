import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
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
        // backgroundSize: '',
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
        alignItems: 'flex-start',
    },
})

const Welcome = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.containerDescription}>
                <Typography variant="h2" gutterBottom>
                    Bem-vindo a sua nova experiência em rastreabilidade
                </Typography>
                <Button variant="outlined" size="large" color="primary">
                    Me leve ao Follow
                </Button>
            </div>
        </div>
    )
}

export default Welcome
