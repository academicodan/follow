import { Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '30vh',
        width: '100%',
        backgroundColor: colors.dark,
        padding: '20px 140px 20px 140px',
    },
    logo: {
        width: '120px',
        margin: '2.2rem 0 2.2rem 0',
    },
    divider: {
        width: '100%',
        marginBottom: '2rem',
    },
})

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src="/img/follow-logo.png" alt="logo" className={classes.logo} />
            <Divider className={classes.divider} />
            <Typography variant="body2" component="p" color="textSecondary">
                © Follow rastreamentos em fabricação de produtos industrializados. Todos
                os direitos reservados.
            </Typography>
        </div>
    )
}

export default Footer
