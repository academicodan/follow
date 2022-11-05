import React from 'react'
import { TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { FormActions } from '../Context/FormContext'
import axios from 'axios'
import { ContainerApp } from '../Components/ContainerApp'
import { FooterActions } from '../Components/FooterActions'
import {
    ADD_ITEM_PESO_VALIDADO,
    AUTH_BASE64,
    CHAINCODE_NAME,
    CHAINCODE_VER,
    CHANNEL,
    URL_INVOCATION,
} from '../General/blockchainVars'
import { useForm } from '../Context/hook/useForm'

export const WeightController = () => {
    const [codigoPesoValidacao, setCodigoValidacao] = useState('')
    const [codigoLoteValidado, setCodigoLoteValidado] = useState('')
    const [resultadoPeso, setResultadoPeso] = useState('')

    const { dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4,
        })
    }, [dispatch])

    const handleNextStep = () => {
        console.table({ codigoPesoValidacao, codigoLoteValidado, resultadoPeso })
        //5. aqui
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        var datetimenow = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
        var data = JSON.stringify({
            channel: CHANNEL,
            chaincode: CHAINCODE_NAME,
            chaincodeVer: CHAINCODE_VER,
            method: ADD_ITEM_PESO_VALIDADO,
            args: [codigoPesoValidacao, datetimenow, codigoLoteValidado, resultadoPeso],
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
                    value={codigoPesoValidacao}
                    onChange={(ev) => setCodigoValidacao(ev.target.value)}
                    id="codigo-peso-validacao"
                    label="Codigo Peso Validacao"
                    variant="outlined"
                    placeholder="Insira o Codigo Peso Validacao"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={codigoLoteValidado}
                    onChange={(ev) => setCodigoLoteValidado(ev.target.value)}
                    id="codigo-lote-validado"
                    label="Código Lote Validado"
                    variant="outlined"
                    placeholder="Insira o Código Lote Validado"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={resultadoPeso}
                    onChange={(ev) => setResultadoPeso(ev.target.value)}
                    id="resultado-peso"
                    label="Resultado Peso"
                    variant="outlined"
                    placeholder="Ex: Peso correspondente ou Peso não correspondente"
                    fullWidth
                    margin="normal"
                    type="text"
                />
                <FooterActions />
            </form>
        </ContainerApp>
    )
}
