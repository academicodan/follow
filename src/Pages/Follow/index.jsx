import { Button, makeStyles, Typography } from '@material-ui/core'
import { colors } from '../LandingPage/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import PageviewIcon from '@material-ui/icons/Pageview'
import history from '../../history'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: colors.dark,
    },
    containerTitle: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '6rem',
    },
    img: {
        width: '12rem',
    },
    containerButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    },
    typography: {
        color: colors.light,
    },
    container: {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
    },
})

const Follow = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.containerTitle}>
                <Typography variant="h2" className={classes.typography} gutterBottom>
                    Follow
                </Typography>
                <img src="/img/follow-logo.png" alt="logo" className={classes.img} />
            </div>
            <div className={classes.containerButton}>
                <div className={classes.container}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        startIcon={<CloudUploadIcon />}
                        onClick={() => history.push('/login')}
                    >
                        Registrar Items
                    </Button>
                </div>
                <div className={classes.container}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        fullWidth
                        startIcon={<PageviewIcon />}
                        onClick={() => history.push('/tableTransactions')}
                    >
                        Consultar Transações
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Follow
