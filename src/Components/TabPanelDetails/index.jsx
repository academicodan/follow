import React from "react"
import { useEffect, useState } from 'react'
import { columns } from '../../General/columnsData'
//import { rowData } from '../../General/rowData'
import {
    ConatinerHeader,
    ContainerMain,
    ContainerContent,
} from '../../Styleds/Main.styled'
import { HeaderTabs } from '../HeaderTabs'
import { PanelView } from '../PanelView'
import { 
    BlockchainGetTransactionsEmbalagens,
    BlockchainGetTransactionsLoteLabs, 
    BlockchainGetTransactionsFarmacos,
    BlockchainGetTransactionsFabrica,
    BlockchainGetTransactionsControladoriaPeso,
    BlockchainGetTransactionsTestesMicro,
    BlockchainGetTransactionsDistribuidora} from '../../General/blockchainTrackFunctions'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
console.log(urlParams.get('codigolote'))


export const TabPanelDetails = () => {
    const [value, setValue] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    const [rowsData, setRowData] = useState([])
    const [columnData, setColumnData] = useState([])


    async function getBlockchainData() {
        //Chama as functions em suas respectivas ordens de consulta na blockchain
        const blockDataEmbalagens = await BlockchainGetTransactionsEmbalagens(urlParams);
        const blockDataLoteLabs = await BlockchainGetTransactionsLoteLabs();
        const blockDataFarmacos = await BlockchainGetTransactionsFarmacos();
        const blockDataFabrica = await BlockchainGetTransactionsFabrica();
        const blockDataControladoriaPeso = await BlockchainGetTransactionsControladoriaPeso();
        const blockDataTestesMicro = await BlockchainGetTransactionsTestesMicro();
        const blockDataDistribuidora = await BlockchainGetTransactionsDistribuidora();
        
       
        //Seta os dados das tabelas com os dados puxados das requisições anteriores
        setRowData([blockDataFarmacos,blockDataLoteLabs,blockDataFabrica,blockDataEmbalagens,blockDataControladoriaPeso,blockDataTestesMicro,blockDataDistribuidora])
        setColumnData(columns)
        //setIsLoading(false);
    }

    useEffect(() => {
        //Chama o método async para popular as tables
        getBlockchainData();
    }, [])

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <ContainerMain>
            <ConatinerHeader>
                <HeaderTabs value={value} handleChange={handleChange} />
            </ConatinerHeader>
            <ContainerContent>
                <PanelView
                    //isLoading = {isLoading}
                    activeTab={value}
                    rowData={rowsData}
                    columnData={columnData}
                />
            </ContainerContent>
        </ContainerMain>
    )
}
