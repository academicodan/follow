import React from "react"
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { ContainerDetails } from '../ContainerDetails'
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



const rowData1 = [
    {
        column1: '1',
        column2: '12345',
        column3: 'Cloro',
        column4: '7',
        column5: 14,
    },
    {
        column1: '1',
        column2: '12345',
        column3: 'Cloro',
        column4: '7',
        column5: 14,
    },
    {
        column1: '1',
        column2: '12345',
        column3: 'Cloro',
        column4: '7',
        column5: 14,
    },
    {
        column1: '1',
        column2: '12345',
        column3: 'Cloro',
        column4: '7',
        column5: 14,
    },
    {
        column1: '1',
        column2: '12345',
        column3: 'Cloro',
        column4: '7',
        column5: 14,
    },
]

const rowData2 = [
    {
        column6: '1',
        column7: '12345',
        column8: 'Cloro',
        column9: '7',
        column10: 14,
    },
    {
        column6: '1',
        column7: '12345',
        column8: 'Cloro',
        column9: '7',
        column10: 14,
    },
    {
        column6: '1',
        column7: '12345',
        column8: 'Cloro',
        column9: '7',
        column10: 14,
    },
    {
        column6: '1',
        column7: '12345',
        column8: 'Cloro',
        column9: '7',
        column10: 14,
    },
    {
        column6: '1',
        column7: '12345',
        column8: 'Cloro',
        column9: '7',
        column10: 14,
    },
]
const rowData3 = [
    {
        column11: '1',
        column12: '12345',
        column13: 'Cloro',
        column14: '7',
        column15: 14,
    },
    {
        column11: '1',
        column12: '12345',
        column13: 'Cloro',
        column14: '7',
        column15: 14,
    },
    {
        column11: '1',
        column12: '12345',
        column13: 'Cloro',
        column14: '7',
        column15: 14,
    },
    {
        column11: '1',
        column12: '12345',
        column13: 'Cloro',
        column14: '7',
        column15: 14,
    },
    {
        column11: '1',
        column12: '12345',
        column13: 'Cloro',
        column14: '7',
        column15: 14,
    },
    {
        column11: '1',
        column12: '12345',
        column13: 'Cloro',
        column14: '7',
        column15: 14,
    },
]
const rowData4 = [
    {
        column16: '1',
        column17: '12345',
        column18: 'Cloro',
        column19: '7',
        column20: 14,
    },
    {
        column16: '1',
        column17: '12345',
        column18: 'Cloro',
        column19: '7',
        column20: 14,
    },
    {
        column16: '1',
        column17: '12345',
        column18: 'Cloro',
        column19: '7',
        column20: 14,
    },
    {
        column16: '1',
        column17: '12345',
        column18: 'Cloro',
        column19: '7',
        column20: 14,
    },
    {
        column16: '1',
        column17: '12345',
        column18: 'Cloro',
        column19: '7',
        column20: 14,
    },
    {
        column16: '1',
        column17: '12345',
        column18: 'Cloro',
        column19: '7',
        column20: 14,
    },
]

const columns1 = [
    { title: 'A', field: 'codigoLote' },
    { title: 'B', field: 'tipo' },
    { title: 'C', field: 'quantPacotes' },
    { title: 'D', field: 'peso' },
    { title: 'E', field: 'dataRegistro' },
]

const columns2 = [
    { title: 'F', field: 'column6' },
    { title: 'G', field: 'column7' },
    { title: 'H', field: 'column8' },
    { title: 'I', field: 'column9' },
    { title: 'J', field: 'column10' },
]
const columns3 = [
    { title: 'K', field: 'column11' },
    { title: 'L', field: 'column12' },
    { title: 'M', field: 'column13' },
    { title: 'N', field: 'column14' },
    { title: 'O', field: 'column15' },
]
const columns4 = [
    { title: 'P', field: 'column16' },
    { title: 'Q', field: 'column17' },
    { title: 'R', field: 'column18' },
    { title: 'S', field: 'column19' },
    { title: 'T', field: 'column20' },
]


export const DetailsTableTransactions = (hash) => {
    const [rowData, setRowData] = useState([])
    const [columnData, setColumnData] = useState([])


    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        console.log(urlParams.get('codigolote'))
        setRowData([rowData1, rowData2, rowData3, rowData4])
        
    }, [])

    return (
        <ContainerDetails>
            <MaterialTable
                data={rowData[0]}
                columns={columnData[0]}
                options={{
                    paging: false,
                }}
            />
            <MaterialTable
                data={rowData[1]}
                columns={columnData[1]}
                options={{
                    paging: false,
                }}
            />
            <MaterialTable
                data={rowData[2]}
                columns={columnData[2]}
                options={{
                    paging: false,
                }}
            />
            <MaterialTable
                data={rowData[3]}
                columns={columnData[3]}
                options={{
                    paging: false,
                }}
            />
        </ContainerDetails>
    )
}
