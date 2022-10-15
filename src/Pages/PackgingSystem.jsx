import React from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
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

export const PackgingSystem = () => {
    const [codigoLoteEmbalagens, setCodigoLoteEmbalagens] = useState('')
    const [tipoFarmacoEmbalagem, setTipoFarmacoEmbalagem] = useState('')
    const [quantidadeFarmacoEmbalagem, setQuantidadeFarmacoEmbalagem] = useState('')
    const [pesoEmbalagem, setPesoEmbalagem] = useState('')

    const { dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3,
        })
    }, [dispatch])

    const handleNextStep = () => {
        console.table({
            codigoLoteEmbalagens,
            tipoFarmacoEmbalagem,
            quantidadeFarmacoEmbalagem,
            pesoEmbalagem,
        })
        //4 aqui
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed)
        var datetimenow = today.toLocaleDateString() + ' ' + today.toLocaleTimeString()
        var data = JSON.stringify({
            channel: CHANNEL,
            chaincode: CHAINCODE_NAME,
            chaincodeVer: CHAINCODE_VER,
            method: ADD_ITEM_EMBALADO,
            args: [
                codigoLoteEmbalagens,
                datetimenow,
                tipoFarmacoEmbalagem,
                quantidadeFarmacoEmbalagem,
                pesoEmbalagem,
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
                    value={codigoLoteEmbalagens}
                    onChange={(ev) => setCodigoLoteEmbalagens(ev.target.value)}
                    id="codigo-lote-embalagens"
                    label="Código Lote Embalagens"
                    variant="outlined"
                    placeholder="Insira o Código Lote Embalagens"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={tipoFarmacoEmbalagem}
                    onChange={(ev) => setTipoFarmacoEmbalagem(ev.target.value)}
                    id="tipo-farmaco-embalagem"
                    label="Tipo"
                    variant="outlined"
                    placeholder="Insira o Tipo"
                    fullWidth
                    margin="normal"
                    type="text"
                />

                <TextField
                    value={quantidadeFarmacoEmbalagem}
                    onChange={(ev) => setQuantidadeFarmacoEmbalagem(ev.target.value)}
                    id="quantidade-farmaco-embalagem"
                    label="Quantidade Fármaco Embalagem"
                    variant="outlined"
                    placeholder="Insira a Quantidade Fármaco Embalagem"
                    fullWidth
                    margin="normal"
                    type="number"
                />

                <TextField
                    value={pesoEmbalagem}
                    onChange={(ev) => setPesoEmbalagem(ev.target.value)}
                    id="peso-embalagem"
                    label="Peso"
                    variant="outlined"
                    placeholder="Insira o peso da Embalagem"
                    fullWidth
                    margin="normal"
                    type="text"
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
