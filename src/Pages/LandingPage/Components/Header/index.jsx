import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    logo: {
        width: '8rem',
    },
    appbar: {
        backgroundColor: colors.dark,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100px',
        alignItems: 'center',
    },
})

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar elevation={2} className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <img src="/img/follow-logo.png" alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
