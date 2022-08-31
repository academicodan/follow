import React from "react"
import { InputAdornment, TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, FormActions } from '../Context/FormContext'
import axios from 'axios'
import { ContainerApp } from '../Components/ContainerApp'
import { FooterActions } from '../Components/FooterActions'
import { ADD_ITEM_FARMACO, AUTH_BASE64, CHAINCODE_NAME, CHAINCODE_VER, CHANNEL, URL_INVOCATION } from "../General/blockchainVars"

export const Pharmaco = () => {
    const [codigoChaveFarmaco, setCodigoChaveFarmaco] = useState('')
    const [tipo, setTipo] = useState('')
    const [peso, setPeso] = useState('')

    const history = useHistory()
    const { dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0,
        })
    }, [])

    const handleNextStep = () => {
        console.table({ codigoChaveFarmaco, tipo, peso })
        //1. CODAR AQUI
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        var datetimenow = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
        var data = JSON.stringify({
            channel: CHANNEL,
            chaincode: CHAINCODE_NAME,
            chaincodeVer: CHAINCODE_VER,
            method: ADD_ITEM_FARMACO,
            args: [codigoChaveFarmaco, datetimenow, tipo, peso],
        })

        var config = {
            method: 'post',
            url: URL_INVOCATION,
            headers: {
                Authorization: AUTH_BASE64,
                'Content-Type': 'application/json',
            },
            data: data,
        }

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error)
            })

        dispatch({
            type: FormActions.setValidationStepPharmaco,
            payload: true,
        })
        history.push('/laboratory')
    }

    return (
        <ContainerApp>
            <form
                onSubmit={(ev) => {
                    ev.preventDefault()
                    handleNextStep()
                }}
            >
                <TextField
                    value={codigoChaveFarmaco}
                    onChange={(ev) => setCodigoChaveFarmaco(ev.target.value)}
                    id="codigo-chave-farmaco"
                    label="Codigo Chave Fármaco"
                    variant="outlined"
                    placeholder="Insira o Código Chave Fármaco"
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                />

                <TextField
                    value={tipo}
                    onChange={(ev) => setTipo(ev.target.value)}
                    id="tipo"
                    label="Tipo"
                    variant="outlined"
                    placeholder="Insira o Tipo"
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                />

                <TextField
                    value={peso}
                    onChange={(ev) => setPeso(ev.target.value)}
                    id="peso"
                    label="Peso"
                    variant="outlined"
                    placeholder="Insira o Peso do Fármaco"
                    fullWidth
                    margin="normal"
                    required
                    type="number"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">kg</InputAdornment>
                        ),
                    }}
                />
                <FooterActions isDisable />
            </form>
        </ContainerApp>
    )
}
