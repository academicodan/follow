import { Button, Container, IconButton, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ContainerApp } from '../../Components/ContainerApp'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'
import style from './styles.module.scss'
import { useState } from 'react'
import { FormActions, useForm } from '../../Context/FormContext'

export const SearchTrackingSimulator = () => {
    const [codeSearchBlockchain, setCodeSearchBlockchain] = useState('')
    const { dispatch } = useForm()
    const history = useHistory()

    const handleTrackingSimulator = () => {
        dispatch({
            type: FormActions.setCodeSearchBlockchain,
            payload: codeSearchBlockchain,
        })
        alert(codeSearchBlockchain)
        history.push('/trackingSimulator')
    }

    return (
        <ContainerApp notStep>
            {/* <div className={style.displaySearch}> */}
            <Container style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    value={codeSearchBlockchain}
                    onChange={(ev) => setCodeSearchBlockchain(ev.target.value)}
                    variant="outlined"
                    label="Insira o Codigo de Rastreio"
                    margin="normal"
                    type="text"
                    fullWidth
                />
                <div className={style.displayIcon}>
                    <IconButton
                        size="large"
                        color="primary"
                        onClick={handleTrackingSimulator}
                    >
                        <LocationSearchingIcon size="large" color="primary" />
                    </IconButton>
                </div>
            </Container>
            {/* </div> */}
        </ContainerApp>
    )
}
