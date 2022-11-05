import React from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { FormActions } from '../Context/FormContext'
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

export const Laboratory = () => {
    const [codigoLote, setCodigoLote] = useState('')
    const [quantidadeFarmaco, setQuantidadeFarmaco] = useState('')
    const [pesoTotal, setPesoTotal] = useState('')
    const [listaChaveFarmaco, setListaChaveFarmaco] = useState('')

    const { dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        })
    }, [dispatch])

    const handleNextStep = () => {
        console.table({ codigoLote, quantidadeFarmaco, pesoTotal, listaChaveFarmaco })
        //2. codar aqui
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        var datetimenow = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
        var data = JSON.stringify({
            channel: CHANNEL,
            chaincode: CHAINCODE_NAME,
            chaincodeVer: CHAINCODE_VER,
            method: ADD_LOTE_LABS,
            args: [
                codigoLote,
                datetimenow,
                quantidadeFarmaco,
                pesoTotal,
                listaChaveFarmaco,
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
                    value={codigoLote}
                    onChange={(ev) => setCodigoLote(ev.target.value)}
                    id="codigo-lote"
                    label="Codigo Lote"
                    variant="outlined"
                    placeholder="Insira o Código Lote"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={quantidadeFarmaco}
                    onChange={(ev) => setQuantidadeFarmaco(ev.target.value)}
                    id="quantidade-farmaco"
                    label="Quantidade Fármaco"
                    variant="outlined"
                    placeholder="Insira a Qunatidade Fármaco"
                    fullWidth
                    margin="normal"
                    type="number"
                />

                <TextField
                    value={listaChaveFarmaco}
                    onChange={(ev) => setListaChaveFarmaco(ev.target.value)}
                    id="lista-chave-farmaco"
                    label="Lista Chave Fármaco"
                    variant="outlined"
                    placeholder="Insira a Lista Chave Fármaco"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={pesoTotal}
                    onChange={(ev) => setPesoTotal(ev.target.value)}
                    id="peso"
                    label="Peso total"
                    variant="outlined"
                    placeholder="Insira o peso total"
                    fullWidth
                    margin="normal"
                    type="number"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">kg</InputAdornment>
                        ),
                    }}
                />
                <FooterActions />
            </form>
        </ContainerApp>
    )
}
