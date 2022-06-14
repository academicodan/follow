import { Button, InputAdornment, TextField } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm, FormActions } from '../Context/FormContext'
import axios from 'axios'
import { ContainerApp } from '../Components/ContainerApp'
import { FooterActions } from '../Components/FooterActions'

export const PackgingSystem = () => {
    const [codigoLoteEmbalagens, setCodigoLoteEmbalagens] = useState('')
    const [tipoFarmacoEmbalagem, setTipoFarmacoEmbalagem] = useState('')
    const [quantidadeFarmacoEmbalagem, setQuantidadeFarmacoEmbalagem] = useState('')
    const [pesoEmbalagem, setPesoEmbalagem] = useState('')

    const history = useHistory()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.validationStepFactory) {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            })
        } else {
            history.goBack()
        }
    }, [])

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
            channel: 'pucchannel',
            chaincode: 'oabcs-medicine-puc',
            chaincodeVer: 'v2',
            method: 'addItemEmbalado',
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
            url: 'https://blockhubiteam-ladcsteam-iad.blockchain.ocp.oraclecloud.com:7443/restproxy/bcsgw/rest/v1/transaction/invocation',
            headers: {
                Authorization: 'Basic cGVkcm8uYmxvY2tjaGFpbjpCbG9jayYxMjQ0MjkxMg==',
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
            type: FormActions.setValidationStepPackgingSystem,
            payload: true,
        })
        history.push('/weightcontroller')
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
                    required
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
                    required
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
                    required
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
                    required
                    type="text"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">kg</InputAdornment>
                        ),
                    }}
                />
                <FooterActions path={'/factory'} />
            </form>
        </ContainerApp>
    )
}
