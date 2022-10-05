import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '20vh',
        fontFamily: 'Nunito',
    },
    appBar: {
        background: 'none',
        // color: '#F2858e',
        color: '#FFF',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appBarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#F2858e',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
    link: {
        textDecoration: 'none',
        color: '#AAAAAF',
    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
                <h1 className={classes.appBarTitle}>
                    Follow
                    <span className={classes.colorText}>.</span>
                </h1>
                {/* <Scroll to="place-to-visit-2" smooth={true}> */}
                {/* <IconButton> */}
                {/* <SortIcon className={classes.icon} /> */}
                {/* </IconButton> */}
                {/* </Scroll> */}
                <Link to="/pharmaco" className={classes.link}>
                    <Button variant="contained" color="primary">
                        Conhecer Plataforma
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header
