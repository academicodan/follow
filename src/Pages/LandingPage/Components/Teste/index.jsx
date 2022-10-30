import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: (backGround) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        backgroundColor: backGround.backgroundColor,
    }),
}))
const Teste = ({ backGround }) => {
    console.log(backGround)
    const classes = useStyles(backGround)
    return <div className={classes.root}>Em desenvolvimento...</div>
}

export default Teste
