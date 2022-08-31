import React from 'react'

//URLs
const URL ='https://blockchainpedro-3-brztechcloud01-gru.blockchain.ocp.oraclecloud.com:7443/restproxy'
const URL_INVOCATION = URL + '/bcsgw/rest/v1/transaction/invocation'
const URL_QUERY = URL + '/bcsgw/rest/v1/transaction/query'

//CHANNEL,CHAINCODE,CHAINCODE_VER
const CHANNEL = 'default'
const CHAINCODE_NAME = 'oabcs-medicine-puc'
const CHAINCODE_VER = 'v1'

//Functions
const ADD_LOCAL_FARMACO = 'addLocalFarmaco'
const ADD_CHAVE_FARMACO = 'addChaveFarmaco'
const ADD_ITEM_FARMACO = 'addItemFarmaco'
const ADD_LOTE_LABS = 'addLoteLabs'
const ADD_ITEM_PROCESSADO = 'addItemProcessado'
const ADD_ITEM_EMBALADO = 'addItemEmbalado'
const ADD_ITEM_PESO_VALIDADO = 'addItemPesoValidado'
const ADD_ITEM_TESTADO = 'addItemTestado'
const ADD_ITEM_DISTRIBUIDO = 'addItemDistribuido'
const QUERY_EVENT = 'queryEvent'

//AUTH
const AUTH_BASE64 = "Basic cGVkcm8uY2Fycmlqb0BvcmFjbGUuY29tOk9yYWNsZSYxMjQ0Mjk4Mw==";



export {
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
}
