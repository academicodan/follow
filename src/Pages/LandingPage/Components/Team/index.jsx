import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import CardPerson from '../CardPerson'

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.light,
        padding: '6% 0',
    },
    title: {
        color: colors.pink,
    },
    containerCards: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.6rem',
    },
    gridMain: {
        minHeight: '80vh',
    },
})

const Team = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Grid container className={classes.gridMain} justifyContent="center">
                    <Grid
                        item
                        container
                        justifyContent="center"
                        xs={12}
                        md={12}
                        lg={12}
                        align="center"
                    >
                        <Typography variant="h2" className={classes.title}>
                            Quem são eles? Onde vivem?
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent="center" xs={12} md={6} lg={3}>
                        <CardPerson
                            name="Daniel Ribeiro, 23 anos"
                            desc="Software Engineer"
                            imgPath={'/teamProfile/daniel_profile.jpg'}
                        />
                    </Grid>
                    <Grid item container justifyContent="center" xs={12} md={6} lg={3}>
                        <CardPerson
                            name="Livia Bellomi, 38 anos"
                            desc="Android Developer"
                            imgPath={'/teamProfile/livia_profile.jpg'}
                        />
                    </Grid>
                    <Grid item container justifyContent="center" xs={12} md={6} lg={3}>
                        <CardPerson
                            name="Pedro Carrijo, 21 anos"
                            desc="Cloud Egineer"
                            imgPath={'/teamProfile/pedro_profile.jpg'}
                        />
                    </Grid>
                    <Grid item container justifyContent="center" xs={12} md={6} lg={3}>
                        <CardPerson
                            name="Maria Luiza, 21 anos"
                            desc="Solution Analyst"
                            imgPath={'/teamProfile/marialuiza_profile.jpg'}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Team
