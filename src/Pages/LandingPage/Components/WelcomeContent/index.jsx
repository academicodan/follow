import { Collapse, IconButton, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        textAlign: 'center',
        flexDirection: 'column',
    },
    appBar: {
        background: 'none',
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
        color: '#F2858e',
        fontSize: '4rem',
    },
    image: {
        width: '60rem',
    },
}))

const WelcomeContent = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])
    return (
        <div className={classes.root}>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1500 } : {})}
                collapsedSize={10}
            >
                {/* <h1 className={classes.title}> */}
                {/* Welcome to <br /> <span className={classes.colorText}>Follow</span> */}
                {/* </h1> */}
                {/* <Scroll to="place-to-visit-1" smooth={true}> */}
                {/* <IconButton> */}
                {/* <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon> */}
                {/* </IconButton> */}
                {/* </Scroll> */}
                <div>
                    <img
                        src="/img/follow-logo.png"
                        alt="logo"
                        className={classes.image}
                    />
                </div>
            </Collapse>
        </div>
    )
}

export default WelcomeContent
