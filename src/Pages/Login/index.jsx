import Button from '@material-ui/core/Button'
import React, { useContext, useEffect, useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Context } from '../../Context/AuthContext'
import {
    Fade,
    FormControl,
    IconButton,
    InputAdornment,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

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
        justifyContent: 'center',
        marginTop: '1rem',
    },
    containerForm: {
        width: '40%',
    },
    formControl: {
        minWidth: '100%',
    },
    image: {
        width: '12rem',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.2rem',
        marginBottom: '2rem',
    },
}))

const usersOptions = [
    { user: 'Farmaco', value: 'pharmaco' },
    { user: 'Laboratório', value: 'laboratory' },
    { user: 'Fábrica', value: 'factory' },
    { user: 'Sistema de embalagem', value: 'packgingsystem' },
    { user: 'Controladoria de peso', value: 'weightcontroller' },
    { user: 'Testes', value: 'tests' },
    { user: 'Distribuidora', value: 'distributor' },
]

const Login = () => {
    const classes = useStyles()
    const { handleLogin } = useContext(Context)
    const [user, setUser] = useState({ user: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <div className={classes.root}>
            <Fade in={checked} {...(checked ? { timeout: 1500 } : {})}>
                <div className={classes.header}>
                    <Typography variant="h2" component="span" color="secondary">
                        Bem-Vindo ao Follow
                    </Typography>

                    <img
                        src="/img/follow-logo.png"
                        alt="logo"
                        className={classes.image}
                    />
                </div>
            </Fade>
            <form
                className={classes.containerForm}
                onSubmit={(e) => {
                    e.preventDefault()
                    // setUser({ user: '', password: '' })
                    handleLogin(user)
                }}
            >
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    margin="normal"
                    fullWidth
                >
                    <Select
                        value={user.user}
                        onChange={(ev) => setUser({ ...user, user: ev.target.value })}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">Usuario</MenuItem>
                        {usersOptions.map((item) => {
                            return <MenuItem value={item.value}>{item.user}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    margin="normal"
                    fullWidth
                >
                    <OutlinedInput
                        value={user.password}
                        onChange={(ev) =>
                            setUser({ ...user, password: ev.target.value })
                        }
                        id="password"
                        variant="outlined"
                        placeholder="Senha"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className={classes.footerButton}>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        size="large"
                        fullWidth
                        disabled={!user.password.length}
                    >
                        Acessar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login
