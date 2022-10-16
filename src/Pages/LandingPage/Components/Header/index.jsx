import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    logo: {
        width: '8rem',
        margin: '0.5rem 0.5rem',
    },
})

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar elevation={0} color="transparent">
            <Toolbar>
                <img src="/img/follow-logo.png" alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
}

export default Header
