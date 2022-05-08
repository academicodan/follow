import { useEffect, useState } from 'react'
import { columns } from '../../General/columnsData'
import { rowData } from '../../General/rowData'
import {
    ConatinerHeader,
    ContainerMain,
    ContainerContent,
} from '../../Styleds/Main.styled'
import { HeaderTabs } from '../HeaderTabs'
import { PanelView } from '../PanelView'

export const TabPanelDetails = () => {
    const [value, setValue] = useState(0)
    const [rowsData, setRowData] = useState([])
    const [columnData, setColumnData] = useState([])
    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        console.log(urlParams.get('codigolote'))
        setRowData(rowData)
        setColumnData(columns)
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
                    activeTab={value}
                    rowData={rowsData}
                    columnData={columnData}
                />
            </ContainerContent>
        </ContainerMain>
    )
}
