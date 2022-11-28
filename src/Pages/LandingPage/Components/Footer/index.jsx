import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        minHeight: '30vh',
        backgroundColor: colors.dark,
    },
    logo: {
        width: '140px',
        margin: '2.2rem 0 2.2rem 0',
    },
    divider: {
        width: '80%',
        marginBottom: '2rem',
    },
})

const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item container justifyContent="center">
                <img src="/img/follow-logo.png" alt="logo" className={classes.logo} />
            </Grid>
            <Grid item container justifyContent="center">
                <Divider className={classes.divider} />
            </Grid>
            <Grid item container justifyContent="center">
                <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    align="center"
                >
                    © Follow rastreamentos em fabricação de produtos industrializados.
                    Todos os direitos reservados.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer
