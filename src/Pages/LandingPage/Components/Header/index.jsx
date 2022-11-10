import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    logo: {
        width: '6rem',
    },
    appbar: {
        backgroundColor: colors.dark,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '5.0rem',
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
