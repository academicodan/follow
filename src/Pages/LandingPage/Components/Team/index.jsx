import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../styles'
import CardPerson from '../CardPerson'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: colors.light,
    },
    title: {
        color: colors.pink,
        marginBottom: '4rem',
    },
    containerCards: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
    },
})

const Team = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title} gutterBottom>
                Quem são eles? Onde vivem?
            </Typography>
            <div className={classes.containerCards}>
                <CardPerson
                    name="Daniel Ribeiro, 23 anos"
                    desc="Software Developer"
                    imgPath={'/teamProfile/daniel_profile.jpg'}
                />
                <CardPerson
                    name="Livia Bellomi, 38 anos"
                    desc="Android Developer"
                    imgPath={'/teamProfile/livia_profile.jpg'}
                />
                <CardPerson
                    name="Pedro Carrijo, 21 anos"
                    desc="Cloud Egineer"
                    imgPath={'/teamProfile/pedro_profile.jpg'}
                />
                <CardPerson
                    name="Maria Luiza, 21 anos"
                    desc="Solution Analyst"
                    imgPath={'/teamProfile/marialuiza_profile.jpg'}
                />
            </div>
        </div>
    )
}

export default Team
