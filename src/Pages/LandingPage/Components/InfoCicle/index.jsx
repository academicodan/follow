import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    root: ({ color }) => ({
        width: '10rem',
        height: '10rem',
        borderRadius: '50%',
        margin: '0.6rem',
        border: `4px solid ${color}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }),
    info: ({ color }) => ({
        color: color,
    }),
}))

const InfoCicle = ({ icon, color, info }) => {
    const classes = useStyles({ color })

    return (
        <div className={classes.root}>
            <Typography className={classes.info} variant={'body1'}>
                {info}
            </Typography>
        </div>
    )
}

export default InfoCicle
