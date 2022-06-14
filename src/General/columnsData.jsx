import { Tooltip } from '@material-ui/core'
import ReportIcon from '@material-ui/icons/ReportProblemOutlined'

const farmacos = [
    { title: 'Chave Farmaco', field: 'column1' },
    { title: 'Data Registro', field: 'column2' },
    { title: 'Tipo', field: 'column3' },
    { title: 'Peso', field: 'column4' },
]

const laboratorio = [
    { title: 'Código Lote', field: 'column6' },
    { title: 'Data Registro', field: 'column7' },
    { title: 'Quantidade fármacos', field: 'column8' },
    { title: 'Peso Total', field: 'column9' },
    { title: 'Listagem de chaves de fármacos', field: 'column10' },
]
const fabrica = [
    { title: 'Código Lote', field: 'column11' },
    { title: 'Data Registro', field: 'column12' },
    { title: 'Tipo', field: 'column13' },
    { title: 'Quantidade de Pacotes', field: 'column14' },
    { title: 'Peso', field: 'column15' },
]
const embalagens = [
    { title: 'Código Lote', field: 'column16' },
    { title: 'Data de Registro', field: 'column17' },
    { title: 'Tipo', field: 'column18' },
    {
        title: 'Quantidade Embalagens',
        field: 'column19',
        render: (rowData) =>
            rowData.column19 ? (
                rowData.column19
            ) : (
                <Tooltip title="Registration not carried out">
                    <ReportIcon color="error" />
                </Tooltip>
            ),
    },
    { title: 'Peso', field: 'column20' },
]
const controladoriaDePeso = [
    { title: 'Código Validação', field: 'column21' },
    { title: 'Data Registro', field: 'column22' },
    { title: 'Código Validado', field: 'column23' },
    { title: 'Resultado', field: 'column24' },
]
const testes = [
    { title: 'Código Teste', field: 'column25' },
    { title: 'Data Registro', field: 'column26' },
    { title: 'Código Validado', field: 'column27' },
    { title: 'Resultado', field: 'column28' },
    { title: 'Distribuidora de Destino', field: 'column29' },
]
const distribuidora = [
    { title: 'Codigo Lote Distribuidora', field: 'column30' },
    { title: 'Data Registro', field: 'column31' },
    { title: 'Distribuidora', field: 'column32' },
]

export const columns = [
    farmacos,
    laboratorio,
    fabrica,
    embalagens,
    controladoriaDePeso,
    testes,
    distribuidora,
]
