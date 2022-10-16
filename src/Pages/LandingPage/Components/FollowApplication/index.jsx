import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: colors.light,
    },
    titleContainer: {
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem 2rem',
    },
    spanFab: {
        color: colors.pink,
    },
})

const FollowApplication = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <Typography variant="h2" color="primary">
                    Aplicação Follow
                </Typography>
            </div>
            <Typography>
                Desenvolvemos um sistema na qual regitra cada etapa e monitora de forma
                segura a<span>Fabricação dos medicamentos</span>.
            </Typography>
        </div>
    )
}

export default FollowApplication
