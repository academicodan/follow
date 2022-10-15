import ChipAlert from '../Components/ChipAlert'

//FINALIZADO
const farmacos = [
    {
        title: 'Chave Farmaco',
        field: 'codigoChaveFarmaco',
        render: (rowData) =>
            rowData.codigoChaveFarmaco !== 'possível fraude' ? (
                rowData.codigoChaveFarmaco
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Data Registro',
        field: 'dataRegistro',
        render: (rowData) =>
            rowData.dataRegistro !== 'possível fraude' ? (
                rowData.dataRegistro
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Tipo',
        field: 'tipo',
        render: (rowData) =>
            rowData.tipo !== 'possível fraude' ? rowData.tipo : <ChipAlert />,
    },
    {
        title: 'Peso',
        field: 'peso',
        render: (rowData) =>
            rowData.peso !== 'possível fraude' ? rowData.peso : <ChipAlert />,
    },
]

//FINALIZADO
const laboratorio = [
    {
        title: 'Código Lote',
        field: 'codigoLote',
        render: (rowData) =>
            rowData.codigoLote !== 'possível fraude' ? (
                rowData.codigoLote
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Data Registro',
        field: 'dataRegistro',
        render: (rowData) =>
            rowData.dataRegistro !== 'possível fraude' ? (
                rowData.dataRegistro
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Quantidade fármacos',
        field: 'quantFarmacos',
        render: (rowData) =>
            rowData.quantFarmacos !== 'possível fraude' ? (
                rowData.quantFarmacos
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Peso Total',
        field: 'peso',
        render: (rowData) =>
            rowData.peso !== 'possível fraude' ? rowData.peso : <ChipAlert />,
    },
    {
        title: 'Listagem de chaves de fármacos',
        field: 'listaChaveFarmacos',
        render: (rowData) =>
            rowData.listaChaveFarmacos !== 'possível fraude' ? (
                rowData.listaChaveFarmacos
            ) : (
                <ChipAlert />
            ),
    },
]

//FINALIZADO
const fabrica = [
    {
        title: 'Código Lote',
        field: 'codigoLote',
        render: (rowData) =>
            rowData.codigoLote !== 'possível fraude' ? (
                rowData.codigoLote
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Data Registro',
        field: 'dataRegistro',
        render: (rowData) =>
            rowData.dataRegistro !== 'possível fraude' ? (
                rowData.dataRegistro
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Tipo',
        field: 'tipo',
        render: (rowData) =>
            rowData.tipo !== 'possível fraude' ? rowData.tipo : <ChipAlert />,
    },
    {
        title: 'Quantidade de Pacotes',
        field: 'quantPacotes',
        render: (rowData) =>
            rowData.quantPacotes !== 'possível fraude' ? (
                rowData.quantPacotes
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Peso',
        field: 'peso',
        render: (rowData) =>
            rowData.peso !== 'possível fraude' ? rowData.peso : <ChipAlert />,
    },
]

//FINALIZADO
const embalagens = [
    {
        title: 'Código Lote',
        field: 'codigoLote',
        render: (rowData) =>
            rowData.codigoLote !== 'possível fraude' ? (
                rowData.codigoLote
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Data Registro',
        field: 'dataRegistro',
        render: (rowData) =>
            rowData.dataRegistro !== 'possível fraude' ? (
                rowData.dataRegistro
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Tipo',
        field: 'tipo',
        render: (rowData) =>
            rowData.tipo !== 'possível fraude' ? rowData.tipo : <ChipAlert />,
    },
    {
        title: 'Quantidade de Pacotes',
        field: 'quantPacotes',
        render: (rowData) =>
            rowData.quantPacotes !== 'possível fraude' ? (
                rowData.quantPacotes
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Peso',
        field: 'peso',
        render: (rowData) =>
            rowData.peso !== 'possível fraude' ? rowData.peso : <ChipAlert />,
    },
]

//FINALIZADO
const controladoriaDePeso = [
    {
        title: 'Código Validação',
        field: 'codigoPesoValidacao',
        render: (rowData) =>
            rowData.codigoPesoValidacao !== 'possível fraude' ? (
                rowData.codigoPesoValidacao
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Data Registro',
        field: 'dataRegistro',
        render: (rowData) =>
            rowData.dataRegistro !== 'possível fraude' ? (
                rowData.dataRegistro
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Código Validado',
        field: 'codigoLoteValidado',
        render: (rowData) =>
            rowData.codigoLoteValidado !== 'possível fraude' ? (
                rowData.codigoLoteValidado
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Resultado',
        field: 'resultado',
        render: (rowData) =>
            rowData.resultado !== 'possível fraude' ? rowData.resultado : <ChipAlert />,
    },
]

//FINALIZADO
const testes = [
    {
        title: 'Código Teste',
        field: 'codigoTeste',
        render: (rowData) =>
            rowData.codigoTeste !== 'possível fraude' ? (
                rowData.codigoTeste
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Data Registro',
        field: 'dataRegistro',
        render: (rowData) =>
            rowData.dataRegistro !== 'possível fraude' ? (
                rowData.dataRegistro
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Código Validado',
        field: 'codigoPesoValidado',
        render: (rowData) =>
            rowData.codigoPesoValidado !== 'possível fraude' ? (
                rowData.codigoPesoValidado
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Resultado',
        field: 'resultado',
        render: (rowData) =>
            rowData.resultado !== 'possível fraude' ? rowData.resultado : <ChipAlert />,
    },
    {
        title: 'Distribuidora de Destino',
        field: 'distribuidoraDestino',
        render: (rowData) =>
            rowData.distribuidoraDestino !== 'possível fraude' ? (
                rowData.distribuidoraDestino
            ) : (
                <ChipAlert />
            ),
    },
]

//FINALIZADO
const distribuidora = [
    {
        title: 'Codigo Lote Distribuidora',
        field: 'codigoLoteDistribuidora',
        render: (rowData) =>
            rowData.codigoLoteDistribuidora !== 'possível fraude' ? (
                rowData.codigoLoteDistribuidora
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Data Registro',
        field: 'dataRegistro',
        render: (rowData) =>
            rowData.dataRegistro !== 'possível fraude' ? (
                rowData.dataRegistro
            ) : (
                <ChipAlert />
            ),
    },
    {
        title: 'Distribuidora',
        field: 'distribuidora',
        render: (rowData) =>
            rowData.distribuidora !== 'possível fraude' ? (
                rowData.distribuidora
            ) : (
                <ChipAlert />
            ),
    },
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
