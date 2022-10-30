import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { colors } from '../../styles'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: colors.dark,
        maxWidth: '60rem',
    },
    info: {
        textAlign: 'center',
    },
    title: {
        display: 'flex',
        height: '50px',
        alignItems: 'center',
        color: colors.pink,
        gap: '0.6rem',
    },
}))

const CardInfoIcon = ({ icon, title, info }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h5">{title}</Typography>
                {icon}
            </div>
            <Typography className={classes.info} variant={'subtitle1'} gutterBottom>
                {info}
            </Typography>
        </div>
    )
}

export default CardInfoIcon
