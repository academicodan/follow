import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { colors } from '../LandingPage/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import PageviewIcon from '@material-ui/icons/Pageview'
import history from '../../history'

const useStyles = makeStyles({
    root: {
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
    gridMain: {
        minHeight: '100vh',
    },
})

const Follow = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    className={classes.gridMain}
                >
                    <Grid
                        item
                        container
                        justifyContent="center"
                        xs={12}
                        md={12}
                        lg={12}
                    >
                        <div>
                            <Typography
                                variant="h2"
                                className={classes.typography}
                                gutterBottom
                            >
                                Follow
                            </Typography>
                            <img
                                src="/img/follow-logo.png"
                                alt="logo"
                                className={classes.img}
                            />
                        </div>
                    </Grid>
                    <Grid item container xs={12} md={12} lg={12} spacing={2}>
                        <Grid item container xs={12} md={6} lg={6}>
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
                        </Grid>
                        <Grid item container xs={12} md={6} lg={6}>
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
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Follow
