import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React, { useContext, useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Context } from '../../Context/AuthContext'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#1C1E26',
    },
    loginTitle: {
        fontSize: '2rem',
        color: '#FFF',
    },
    footerButton: {
        display: 'flex',
        justifyContent: 'end',
    },
}))

const Login = () => {
    const classes = useStyles()
    const { handleLogin } = useContext(Context)
    const [user, setUser] = useState({ user: '', password: '' })

    return (
        <div className={classes.root}>
            <div>
                <h2 className={classes.loginTitle}>
                    Faça o Login para acessar o Sistema
                </h2>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    setUser({ user: '', password: '' })
                    handleLogin(user)
                }}
            >
                <div className={classes.containerForm}>
                    <TextField
                        value={user.user}
                        onChange={(ev) => setUser({ ...user, user: ev.target.value })}
                        id="user-name"
                        variant="outlined"
                        placeholder="Usuário"
                        fullWidth
                        margin="normal"
                        type="text"
                    />
                    <TextField
                        value={user.password}
                        onChange={(ev) =>
                            setUser({ ...user, password: ev.target.value })
                        }
                        id="password"
                        variant="outlined"
                        placeholder="Senha"
                        fullWidth
                        margin="normal"
                        type="password"
                    />
                </div>
                <div className={classes.footerButton}>
                    <Button color="primary" variant="contained" type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login
