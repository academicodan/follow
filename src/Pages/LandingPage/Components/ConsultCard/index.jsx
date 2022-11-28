import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { colors } from '../../styles'

const useStyles = makeStyles(() => ({
    root: {
        minWidth: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: colors.dark,
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
