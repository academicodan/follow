import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { colors } from '../../styles'

const useStyles = makeStyles(() => ({
    root: {
        width: '20rem',
        height: '16rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        color: colors.dark,
        gap: '2rem',
    },
    info: {
        textAlign: 'center',
    },
}))

const ConsultCard = ({ icon, color, info }) => {
    const classes = useStyles({ color })

    return (
        <div className={classes.root}>
            <Typography className={classes.info} variant={'subtitle1'}>
                {info}
            </Typography>
            {icon}
        </div>
    )
}

export default ConsultCard
