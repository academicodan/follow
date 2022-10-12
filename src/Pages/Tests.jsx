import React from 'react'

import { TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useForm, FormActions } from '../Context/FormContext'
import axios from 'axios'
import { ContainerApp } from '../Components/ContainerApp'
import { FooterActions } from '../Components/FooterActions'
import {
    URL_INVOCATION,
    URL_QUERY,
    CHANNEL,
    CHAINCODE_NAME,
    CHAINCODE_VER,
    ADD_LOCAL_FARMACO,
    ADD_CHAVE_FARMACO,
    ADD_ITEM_FARMACO,
    ADD_LOTE_LABS,
    ADD_ITEM_PROCESSADO,
    ADD_ITEM_EMBALADO,
    ADD_ITEM_PESO_VALIDADO,
    ADD_ITEM_TESTADO,
    ADD_ITEM_DISTRIBUIDO,
    QUERY_EVENT,
    AUTH_BASE64,
} from '../General/blockchainVars'

export const Tests = () => {
    const [codigoTeste, setCodigoTeste] = useState('')
    const [codigoPesoValidado, setCodigoPesoValidado] = useState('')
    const [resultadoTeste, setResultadoTeste] = useState('')
    const [distribuidoraDestino, setDistribuidoraDestino] = useState('')

    const { dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 5,
        })
    }, [dispatch])

    const handleNextStep = () => {
        console.table({
            codigoTeste,
            codigoPesoValidado,
            resultadoTeste,
            distribuidoraDestino,
        })
        //6 aqui.
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        var datetimenow = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
        var data = JSON.stringify({
            channel: CHANNEL,
            chaincode: CHAINCODE_NAME,
            chaincodeVer: CHAINCODE_VER,
            method: ADD_ITEM_TESTADO,
            args: [
                codigoTeste,
                datetimenow,
                codigoPesoValidado,
                resultadoTeste,
                distribuidoraDestino,
            ],
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
                    value={codigoTeste}
                    onChange={(ev) => setCodigoTeste(ev.target.value)}
                    id="codigo-teste"
                    label="Código Teste"
                    variant="outlined"
                    placeholder="Insira Código Teste"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={codigoPesoValidado}
                    onChange={(ev) => setCodigoPesoValidado(ev.target.value)}
                    id="codigo-peso-validado"
                    label="Código Peso Validado"
                    variant="outlined"
                    placeholder="Insira o Código Peso Validado"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={resultadoTeste}
                    onChange={(ev) => setResultadoTeste(ev.target.value)}
                    id="resultado-teste"
                    label="Resultado Teste"
                    variant="outlined"
                    placeholder="Ex: Positivo ou Teste com falhas"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={distribuidoraDestino}
                    onChange={(ev) => setDistribuidoraDestino(ev.target.value)}
                    id="distribuidora-destino"
                    label="Distribuidora Destino"
                    variant="outlined"
                    placeholder="Insira Distribuidora Destino"
                    fullWidth
                    margin="normal"
                    type="text"
                />
                <FooterActions />
            </form>
        </ContainerApp>
    )
}
