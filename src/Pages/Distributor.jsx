import React from 'react'
import { TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
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
import { useForm } from '../Context/hook/useForm'
import { FormActions } from '../Context/FormContext/FormReducer'

export const Distributor = () => {
    const [distribuidora, setDistribuidora] = useState('')
    const [codigoLoteDistribuidora, setCodigoLoteDistribuidora] = useState('')

    const { dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 6,
        })
    }, [dispatch])

    const handleNextStep = () => {
        console.table({ distribuidora, codigoLoteDistribuidora })
        //7 aqui
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        var datetimenow = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
        var data = JSON.stringify({
            channel: CHANNEL,
            chaincode: CHAINCODE_NAME,
            chaincodeVer: CHAINCODE_VER,
            method: ADD_ITEM_DISTRIBUIDO,
            args: [distribuidora, datetimenow, codigoLoteDistribuidora],
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
                    value={distribuidora}
                    onChange={(ev) => setDistribuidora(ev.target.value)}
                    id="distribuidora"
                    label="Distribuidora"
                    variant="outlined"
                    placeholder="Insira a Distribuidora"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={codigoLoteDistribuidora}
                    onChange={(ev) => setCodigoLoteDistribuidora(ev.target.value)}
                    id="codigo-lote-distribuidora"
                    label="Código Lote Distribuidora"
                    variant="outlined"
                    placeholder="Insira o Código Lote Distribuidora"
                    fullWidth
                    margin="normal"
                    type="text"
                />
                <FooterActions />
            </form>
        </ContainerApp>
    )
}
