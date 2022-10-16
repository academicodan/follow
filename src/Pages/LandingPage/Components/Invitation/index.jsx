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
})

const Invitation = () => {
    const classes = useStyles()
    return <div className={classes.root}>Invitation</div>
}

export default Invitation
