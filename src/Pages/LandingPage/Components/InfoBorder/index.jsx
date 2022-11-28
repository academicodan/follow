import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    root: ({ color }) => ({
        minWidth: '200px',
        height: '100px',
        borderRadius: '10px',
        borderBottom: `4px solid ${color}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }),
    info: ({ color }) => ({
        color: color,
    }),
}))

const InfoBorder = ({ icon, color, info }) => {
    const classes = useStyles({ color })

    return (
        <div className={classes.root}>
            <Typography className={classes.info} variant={'body1'}>
                {info}
            </Typography>
            {icon}
        </div>
    )
}

export default InfoBorder
