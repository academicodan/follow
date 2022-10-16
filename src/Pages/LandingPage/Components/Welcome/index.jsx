import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: colors.dark,
    },
    containerDescription: {
        width: '40vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    },
    containerImage: {
        width: '40vw',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image: {
        width: '100%',
    },
})

const Welcome = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.containerDescription}>
                <Typography variant="h2">
                    Bem-vindo a sua nova experiência em rastreabilidade
                </Typography>
                <Button variant="outlined" size="large" color="primary" fullWidth>
                    Me leve ao Follow
                </Button>
            </div>
            <div className={classes.containerImage}>
                <img
                    src="/illustrations/search_world.svg"
                    alt="search-world"
                    className={classes.image}
                />
            </div>
        </div>
    )
}

export default Welcome
