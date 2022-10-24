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
        maxWidth: '28rem',
    },
    info: {
        textAlign: 'center',
    },
}))

const CardInfoIcon = ({ icon, title, info }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {/* <Typography variant="h4" gutterBottom>
                {title}
            </Typography> */}
            <Typography className={classes.info} variant={'subtitle1'} gutterBottom>
                {info}
            </Typography>
            {icon}
        </div>
    )
}

export default CardInfoIcon
