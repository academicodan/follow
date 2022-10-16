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

const Team = () => {
    const classes = useStyles()
    return <div className={classes.root}>Team</div>
}

export default Team
