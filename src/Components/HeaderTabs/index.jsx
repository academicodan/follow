import { Tab, Tabs, IconButton, Badge } from '@material-ui/core'
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined'
import { Link } from 'react-router-dom'
import { HeaderTabsContainer } from './HeaderTabs.styled'

export const HeaderTabs = ({ value, handleChange }) => {
    console.log(value)
    return (
        <HeaderTabsContainer>
            <div>
                <Link to="/tableTransactions" style={{ textDecoration: 'none' }}>
                    <IconButton size="large" type="submit" color="primary">
                        <NavigateBeforeOutlinedIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
            <Tabs
                value={value}
                onChange={(e, value) => handleChange(value)}
                textColor="secondary"
            >
                <Tab label="Fármacos" id="0" aria-controls="0" />
                <Tab label="Laboratórios" id="1" aria-controls="1" />
                <Tab label="Fábrica" id="2" aria-controls="2" />
                <Tab label="Sistema de Embalagens" id="3" aria-controls="3" />
                <Tab label="Controladoria de Peso" id="4" aria-controls="4" />
                <Tab label="Testes" id="5" aria-controls="5" />
                <Tab label="Distribuidoras" id="6" aria-controls="6" />
            </Tabs>
        </HeaderTabsContainer>
    )
}
