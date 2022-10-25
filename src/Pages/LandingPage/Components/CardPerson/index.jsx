import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { colors } from '../../styles'

const useStyles = makeStyles(() => ({
    root: {
        width: '360px',
        height: '500px',
        background: 'transparent',
    },
    media: ({ imgPath }) => ({
        height: '260px',
        width: '260px',
        backgroundImage: `url(${imgPath})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '50%',
        margin: '0.6rem',
        border: `4px solid ${colors.light}`,
        backgroundSize: '16rem',

        // background-repeat: no-repeat;
        // backgroundAttachment: 'fixed',
    }),
    typograpgy: {
        color: colors.dark,
    },
    desc: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: colors.dark,
    },
    descColor: {
        color: colors.pink,
    },
}))

const CardPerson = ({ name, imgPath, desc }) => {
    const classes = useStyles({ imgPath })

    return (
        <div>
            <div className={classes.media} />
            <div className={classes.desc}>
                <Typography gutterBottom>{name}</Typography>
                <Typography variant="body2" component="p" className={classes.descColor}>
                    {desc}
                </Typography>
            </div>
        </div>
    )
}

export default CardPerson
