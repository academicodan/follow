import React from "react"
import { Tooltip } from '@material-ui/core'
import ReportIcon from '@material-ui/icons/ReportProblemOutlined'

//FINALIZADO
const farmacos = [
    { title: 'Chave Farmaco', field: 'codigoChaveFarmaco' },
    { title: 'Data Registro', field: 'dataRegistro' },
    { title: 'Tipo', field: 'tipo' },
    { title: 'Peso', field: 'peso' },
]

//FINALIZADO
const laboratorio = [
    { title: 'Código Lote', field: 'codigoLote' },
    { title: 'Data Registro', field: 'dataRegistro' },
    { title: 'Quantidade fármacos', field: 'quantFarmacos' },
    { title: 'Peso Total', field: 'peso' },
    { title: 'Listagem de chaves de fármacos', field: 'listaChaveFarmacos' },
]

//FINALIZADO
const fabrica = [
    { title: 'Código Lote', field: 'codigoLote' },
    { title: 'Data Registro', field: 'dataRegistro' },
    { title: 'Tipo', field: 'tipo' },
    { title: 'Quantidade de Pacotes', field: 'quantPacotes' },
    { title: 'Peso', field: 'peso' },
]

//FINALIZADO
const embalagens = [
    { title: 'Código Lote', field: 'codigoLote' },
    { title: 'Data Registro', field: 'dataRegistro' },
    { title: 'Tipo', field: 'tipo' },
    { title: 'Quantidade de Pacotes', field: 'quantPacotes' },
    { title: 'Peso', field: 'peso' },
]

//FINALIZADO
const controladoriaDePeso = [
    { title: 'Código Validação', field: 'codigoPesoValidacao' },
    { title: 'Data Registro', field: 'dataRegistro' },
    { title: 'Código Validado', field: 'codigoLoteValidado' },
    { title: 'Resultado', field: 'resultado' },
]

//FINALIZADO
const testes = [
    { title: 'Código Teste', field: 'codigoTeste' },
    { title: 'Data Registro', field: 'dataRegistro' },
    { title: 'Código Validado', field: 'codigoPesoValidado' },
    { title: 'Resultado', field: 'resultado' },
    { title: 'Distribuidora de Destino', field: 'distribuidoraDestino' },
]

//FINALIZADO
const distribuidora = [
    { title: 'Codigo Lote Distribuidora', field: 'codigoLoteDistribuidora' },
    { title: 'Data Registro', field: 'dataRegistro' },
    { title: 'Distribuidora', field: 'distribuidora' },
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