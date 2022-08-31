import React, { useMemo } from "react"
import { ContainerApp } from '../../Components/ContainerApp'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { Dialog } from '@material-ui/core'
import QRCode from 'qrcode'
import axios from 'axios'
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
    AUTH_BASE64
} from '../../General/blockchainVars'
import SelectInput from "@material-ui/core/Select/SelectInput"


var data = [];


//PUXAR DADOS DA BLOCKCHAIN
    var dataBLOCK = JSON.stringify({
        "channel": CHANNEL,
        "chaincode": CHAINCODE_NAME,
        "chaincodeVer": CHAINCODE_VER,
        "method": QUERY_EVENT,
        "args": [
        "{\"selector\":{\"CodigoLoteEmbalagens\":\"lote123\"}}"
        ]
    });
    
    var config = {
        method: 'post',
        url: URL_QUERY,
        headers: { 
        'Authorization': AUTH_BASE64, 
        'Content-Type': 'application/json'
        },
        data : dataBLOCK
    };

  //FIM PUXAR DADOS BLOCKCHAIN

const data1 = [
    {
        id: '1',
        codigoLote: '12345',
        tipo: 'Cloro',
        quantEmbalagem: '7',
        peso: 14,
    },
    {
        id: '2',
        codigoLote: '12346',
        tipo: 'Cloro',
        quantEmbalagem: '7',
        peso: 14,
    },
    {
        id: '3',
        codigoLote: '12347',
        tipo: 'Cloro',
        quantEmbalagem: '7',
        peso: 14,
    },
    {
        id: '4',
        codigoLote: '12348',
        tipo: 'Cloro',
        quantEmbalagem: '7',
        peso: 14,
    },
    {
        id: '5',
        codigoLote: '12349',
        tipo: 'Cloro',
        quantEmbalagem: '7',
        peso: 14,
    },
]


// Is possible convert id or data(number) in status
export const TableTransactions = () => {
    const [listTransactions, setListTransactions] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false)
    const [imgPath, setImgPath] = useState('')

    
    const BlockchainGetTransactions = async () => {
        //loading = true;
        const response = await axios(config);
        console.log(response.data.result);
        for(var i=0; i < (response.data.result.payload.length);i++){
            console.log((i+1)+"/"+response.data.result.payload.length);
            /**LEMBRAR DE EDITAR O TIPO DE OBJETO PARA A ETAPA DE EMBALAGEM (PRECISA FAZER UM GET NO SMARTCONTRACT PARA ISSO) */
            data.push({
                id: i+1,
                codigoLote: response.data.result.payload[i].Record.CodigoLoteEmbalagens,
                tipo: response.data.result.payload[i].Record.Tipo,
                quantPacotes: response.data.result.payload[i].Record.QuantidadePacotes,
                peso: response.data.result.payload[i].Record.Peso,
                dataRegistro: response.data.result.payload[i].Record.DataRegistro,
            })
        }   
        //loading = false;
        setIsLoading(false)
        return data;
    }

    async function getBlockchainData() {
        const blockData = await BlockchainGetTransactions();
        setListTransactions(blockData);
    }

    useEffect(() => {
        getBlockchainData();
     }, [])

    // const listTransactions = useMemo(() =>{
    //     return getBlockchainData();
    // },[getBlockchainData])
    

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false)
        console.log(value)
    }

    const SimpleDiolog = () => {
        return (
            <Dialog open={open} onClose={handleClose}>
                <div
                    style={{
                        width: '400px',
                        height: '400px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src={imgPath} alt="" />
                </div>
            </Dialog>
        )
    }

    const generateqrCode = async () => {
        try {
            const response = await QRCode.toDataURL(
                'https://ibeco.com.br/voce-sabe-o-que-e-farmaco/'
            )
            console.log(response)
            setImgPath(response)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        { title: 'Id', field: 'id' },
        { title: 'Codigo Lote', field: 'codigoLote' },
        { title: 'Tipo', field: 'tipo' },
        { title: 'Quant. Pacotes', field: 'quantPacotes' },
        { title: 'Peso', field: 'peso' },
        { title: 'Data Registro', field: 'dataRegistro' },
    ]
    return (
        <ContainerApp notStep>
            <MaterialTable
                title={'Sequência de Processsos'}
                isLoading = {isLoading}
                data={listTransactions}
                columns={columns}
                style={{ width: '100%' }}
                options={{
                    paging: false,
                    actionsColumnIndex: -1,
                }}
                actions={[
                    {
                        icon: 'info',
                        tooltip: 'Details',
                        onClick: (event, rowData) => {
                            console.log(rowData.codigoLote)
                            window.location.href =
                                '/tabPanelDetails?codigolote=' + rowData.codigoLote
                        },
                    },
                    {
                        icon: 'qr_code_scanner',
                        iconProps: {
                            color: 'secondary',
                        },
                        onClick: (event, rowData) => {
                            handleClickOpen(rowData)
                            generateqrCode()
                        },
                    },
                ]}
            />
            <SimpleDiolog />
        </ContainerApp>
    )
}
