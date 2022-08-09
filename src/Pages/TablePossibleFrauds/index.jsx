import { ContainerApp } from '../../Components/ContainerApp'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { Dialog, Tooltip } from '@material-ui/core'
import QRCode from 'qrcode'
import ReportIcon from '@material-ui/icons/ReportProblemOutlined'

const data = [
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
        quantEmbalagem: null,
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
        codigoLote: '55555',
        tipo: 'Zinco',
        quantEmbalagem: null,
        peso: null,
    },
]

export const TablePossibleFraudes = () => {
    const [listTransactions, setListTransactions] = useState()
    const [open, setOpen] = useState(false)
    const [imgPath, setImgPath] = useState('')

    useEffect(() => {
        setListTransactions(data)
    }, [])

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
        {
            title: 'Quant. Embalagem',
            field: 'quantEmbalagem',
            render: (rowData) =>
                rowData.quantEmbalagem ? (
                    rowData.quantEmbalagem
                ) : (
                    <Tooltip title="Possible Fraud in this process">
                        <ReportIcon color="error" />
                    </Tooltip>
                ),
        },
        {
            title: 'Peso',
            field: 'peso',
            render: (rowData) =>
                rowData.peso ? (
                    rowData.peso
                ) : (
                    <Tooltip title="Possible Fraud in this process">
                        <ReportIcon color="error" />
                    </Tooltip>
                ),
        },
    ]

    return (
        <ContainerApp notStep>
            <MaterialTable
                title={'Sequência de Processsos'}
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
                        tooltip: 'Datails',
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
