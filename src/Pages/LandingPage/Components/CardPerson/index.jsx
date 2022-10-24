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
    media: {
        height: '360px',
    },
    typograpgy: {
        color: colors.dark,
    },
}))

const CardPerson = ({ name, imgPath, desc }) => {
    const classes = useStyles({})

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia image={imgPath} className={classes.media} />
            </CardActionArea>
            <CardContent className={classes.typograpgy}>
                <Typography gutterBottom>{name}</Typography>
                <Typography variant="body2" component="p">
                    {desc}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardPerson
