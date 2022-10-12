import React, { useContext } from 'react'
import {
    Button,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

import { Link } from 'react-router-dom'

import style from './styles.module.scss'
import { Context } from '../../Context/AuthContext'

export const Header = ({ hasLogTransactions, hasLogaut }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const { handleLogaut } = useContext(Context)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <header className={style.displayHeader}>
                <img
                    src="/img/follow-logo.png"
                    alt="follow-logo"
                    className={style.logo}
                />
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography className={style.typography}>Follow</Typography>
                <div className={style.displayLinks}>
                    {hasLogTransactions && (
                        <Link to="/pharmaco" className={style.link}>
                            <Button variant="outlined">Registrar Transações</Button>
                        </Link>
                    )}
                    <Link to="/tableTransactions" className={style.link}>
                        <Button variant="contained" color="primary">
                            Sequência de Processos
                        </Button>
                    </Link>
                    <IconButton onClick={handleClick}>
                        <MoreVert />
                    </IconButton>
                </div>
            </header>
            <Divider />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                style={{ minWidth: '200px' }}
            >
                <MenuItem />
                <MenuItem onClick={handleLogaut} style={{ minWidth: '200px' }}>
                    Sair
                </MenuItem>
            </Menu>
        </>
    )
}
