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
} from './blockchainVars'

export var codigoLoteConsulta = "";
export var listaChaveFarmacosConsulta = "";
export var codigoPesoValidadoConsulta = "";
export var distribuidoraDestinoConsulta = "";

//Function para request de dados de EMBALAGEM
export const BlockchainGetTransactionsEmbalagens = async (urlParams) => {

    //PUXAR DADOS DA BLOCKCHAIN - EMBALAGEM
    var embalagem = JSON.stringify({
        "channel": CHANNEL,
        "chaincode": CHAINCODE_NAME,
        "chaincodeVer": CHAINCODE_VER,
        "method": QUERY_EVENT,
        "args": ["{\"selector\":{\"CodigoLoteEmbalagens\":\""+urlParams.get('codigolote')+"\"}}"]
    });

    var configEmbalagem = {
        method: 'post',
        url: URL_QUERY,
        headers: { 
        'Authorization': AUTH_BASE64, 
        'Content-Type': 'application/json'
        },
        data : embalagem
    };

    //loading = true;
    const response = await axios(configEmbalagem);
    console.log("RESULT: "+response.data.result.payload);
    var dataEmbalagens = [];
    for(var i=0; i < (response.data.result.payload.length);i++){
        console.log((i+1)+"/"+response.data.result.payload.length);
        //Adiciona na lista todos os registros encontrados
        dataEmbalagens.push({
            codigoLote: response.data.result.payload[i].Record.CodigoLoteEmbalagens,
            tipo: response.data.result.payload[i].Record.Tipo,
            quantPacotes: response.data.result.payload[i].Record.QuantidadePacotes,
            peso: response.data.result.payload[i].Record.Peso,
            dataRegistro: response.data.result.payload[i].Record.DataRegistro,
        })
    }   
    //Pega o códigoLote e seta em uma variavel para poder ser utilizada na consulta das outras etapas 
    codigoLoteConsulta = response.data.result.payload[0].Record.CodigoLoteEmbalagens;

    //loading = false;
    //setIsLoading(false)
    return dataEmbalagens;
}

//Function para request de dados de LOTELABS
export const BlockchainGetTransactionsLoteLabs = async () => {

    //PUXAR DADOS BLOCKCHAIN - LOTELABS
    var lotelabs = JSON.stringify({
        "channel": CHANNEL,
        "chaincode": CHAINCODE_NAME,
        "chaincodeVer": CHAINCODE_VER,
        "method": QUERY_EVENT,
        "args": ["{\"selector\":{\"CodigoLote\":\""+codigoLoteConsulta+"\"}}"]
    });
    
    var configLoteLabs = {
        method: 'post',
        url: URL_QUERY,
        headers: { 
        'Authorization': AUTH_BASE64, 
        'Content-Type': 'application/json'
        },
        data : lotelabs
    };

    //loading = true;
    const response = await axios(configLoteLabs);
    console.log("RESULT: "+JSON.stringify(response.data.result.payload));
    var dataLotelabs = [];
    for(var i=0; i < (response.data.result.payload.length);i++){
        console.log((i+1)+"/"+response.data.result.payload.length);
        //Adiciona na lista todos os registros encontrados
        dataLotelabs.push({
            codigoLote: response.data.result.payload[i].Record.CodigoLote,
            dataRegistro: response.data.result.payload[i].Record.DataRegistro,
            quantFarmacos: response.data.result.payload[i].Record.QuantidadeFarmacos,
            peso: response.data.result.payload[i].Record.PesoTotal,
            listaChaveFarmacos: response.data.result.payload[i].Record.ListaChaveFarmacos,
        })
    }   
    //Pega a lista de farmacos e seta em uma variavel para poder ser utilizada na consulta das outras etapas 
    listaChaveFarmacosConsulta = response.data.result.payload[0].Record.ListaChaveFarmacos;
    //loading = false;
    //setIsLoading(false)
    return dataLotelabs;
}

//Function para request de dados de FARMACOS
export const BlockchainGetTransactionsFarmacos = async () => {

    var listachaves = listaChaveFarmacosConsulta.split(',');
    var dataFarmacos = [];

    //PASSA POR CADA CHAVE FARMACO ENVOLVIDA NO LOTE PARA PEGAR OS DADOS INDIVIDUAIS
    for(var i=0; i < listachaves.length;i++){
        //PUXAR DADOS BLOCKCHAIN - FARMACOS
        var farmacos = JSON.stringify({
            "channel": CHANNEL,
            "chaincode": CHAINCODE_NAME,
            "chaincodeVer": CHAINCODE_VER,
            "method": QUERY_EVENT,
            "args": ["{\"selector\":{\"CodigoChaveFarmaco\":\""+listachaves[i]+"\"}}"]
        });
        
        var configFarmacos = {
            method: 'post',
            url: URL_QUERY,
            headers: { 
            'Authorization': AUTH_BASE64, 
            'Content-Type': 'application/json'
            },
            data : farmacos
        };

        //loading = true;
        const response = await axios(configFarmacos);
        console.log("RESULT: "+JSON.stringify(response.data.result.payload));
        
        for(var i=0; i < (response.data.result.payload.length);i++){
            console.log((i+1)+"/"+response.data.result.payload.length);
            //Adiciona na lista todos os registros encontrados
            dataFarmacos.push({
                codigoChaveFarmaco: response.data.result.payload[i].Record.CodigoChaveFarmaco,
                dataRegistro: response.data.result.payload[i].Record.DataRegistro,
                tipo: response.data.result.payload[i].Record.Tipo,
                peso: response.data.result.payload[i].Record.Peso,
            })

        }   
        
        //loading = false;
        //setIsLoading(false)
    }
    return dataFarmacos;
}

//Function para request de dados de FABRICA
export const BlockchainGetTransactionsFabrica = async () => {

    //PUXAR DADOS BLOCKCHAIN - FABRICA
    var lotefab = JSON.stringify({
        "channel": CHANNEL,
        "chaincode": CHAINCODE_NAME,
        "chaincodeVer": CHAINCODE_VER,
        "method": QUERY_EVENT,
        "args": ["{\"selector\":{\"CodigoLoteFab\":\""+codigoLoteConsulta+"\"}}"]
    });
    
    var configLoteFab = {
        method: 'post',
        url: URL_QUERY,
        headers: { 
        'Authorization': AUTH_BASE64, 
        'Content-Type': 'application/json'
        },
        data : lotefab
    };

    //loading = true;
    const response = await axios(configLoteFab);
    console.log("RESULT: "+JSON.stringify(response.data.result.payload));
    var dataLotefab = [];
    for(var i=0; i < (response.data.result.payload.length);i++){
        console.log((i+1)+"/"+response.data.result.payload.length);
        //Adiciona na lista todos os registros encontrados
        dataLotefab.push({
            codigoLote: response.data.result.payload[i].Record.CodigoLoteFab,
            dataRegistro: response.data.result.payload[i].Record.DataRegistro,
            tipo: response.data.result.payload[i].Record.Tipo,
            quantPacotes: response.data.result.payload[i].Record.QuantidadePacotes,
            peso: response.data.result.payload[i].Record.Peso,
        })
    }   

    //loading = false;
    //setIsLoading(false)
    return dataLotefab;
}

//Function para request de dados de CONTROLADORIA PESO
export const BlockchainGetTransactionsControladoriaPeso = async () => {

    //PUXAR DADOS BLOCKCHAIN - CONTROLADORIA PESO
    var controlepeso = JSON.stringify({
        "channel": CHANNEL,
        "chaincode": CHAINCODE_NAME,
        "chaincodeVer": CHAINCODE_VER,
        "method": QUERY_EVENT,
        "args": ["{\"selector\":{\"CodigoLoteValidado\":\""+codigoLoteConsulta+"\"}}"]
    });
    
    var configControlePeso = {
        method: 'post',
        url: URL_QUERY,
        headers: { 
        'Authorization': AUTH_BASE64, 
        'Content-Type': 'application/json'
        },
        data : controlepeso
    };

    const response = await axios(configControlePeso);
    console.log("RESULT: "+JSON.stringify(response.data.result.payload));
    var dataPesoValidado = [];
    for(var i=0; i < (response.data.result.payload.length);i++){
        console.log((i+1)+"/"+response.data.result.payload.length);
        //Adiciona na lista todos os registros encontrados
        dataPesoValidado.push({
            codigoPesoValidacao: response.data.result.payload[i].Record.CodigoPesoValidacao,
            dataRegistro: response.data.result.payload[i].Record.DataRegistro,
            codigoLoteValidado: response.data.result.payload[i].Record.CodigoLoteValidado,
            resultado: response.data.result.payload[i].Record.Resultado,
        })
    }   
    codigoPesoValidadoConsulta = response.data.result.payload[0].Record.CodigoPesoValidacao;

    //setIsLoading(false)
    return dataPesoValidado;
}

//Function para request de dados de TESTES MICROBIOLÓGICOS
export const BlockchainGetTransactionsTestesMicro = async () => {

    //PUXAR DADOS BLOCKCHAIN - TESTES MICRO
    var testesMicro = JSON.stringify({
        "channel": CHANNEL,
        "chaincode": CHAINCODE_NAME,
        "chaincodeVer": CHAINCODE_VER,
        "method": QUERY_EVENT,
        "args": ["{\"selector\":{\"CodigoPesoValidado\":\""+codigoPesoValidadoConsulta+"\"}}"]
    });
    
    var configTestesMicro = {
        method: 'post',
        url: URL_QUERY,
        headers: { 
        'Authorization': AUTH_BASE64, 
        'Content-Type': 'application/json'
        },
        data : testesMicro
    };

    const response = await axios(configTestesMicro);
    console.log("RESULT: "+JSON.stringify(response.data.result.payload));
    var dataTestesMicro = [];
    for(var i=0; i < (response.data.result.payload.length);i++){
        console.log((i+1)+"/"+response.data.result.payload.length);
        //Adiciona na lista todos os registros encontrados
        dataTestesMicro.push({
            codigoTeste: response.data.result.payload[i].Record.CodigoTeste,
            dataRegistro: response.data.result.payload[i].Record.DataRegistro,
            codigoPesoValidado: response.data.result.payload[i].Record.CodigoPesoValidado,
            resultado: response.data.result.payload[i].Record.Resultado,
            distribuidoraDestino: response.data.result.payload[i].Record.DistribuidoraDestino,
        })
    }   
    distribuidoraDestinoConsulta = response.data.result.payload[0].Record.DistribuidoraDestino;
    //setIsLoading(false)
    return dataTestesMicro;
}

//Function para request de dados de DISTRIBUIDORA
export const BlockchainGetTransactionsDistribuidora = async () => {

    //PUXAR DADOS BLOCKCHAIN - DISTRIBUIDORA
    var distribuidora = JSON.stringify({
        "channel": CHANNEL,
        "chaincode": CHAINCODE_NAME,
        "chaincodeVer": CHAINCODE_VER,
        "method": QUERY_EVENT,
        "args": ["{\"selector\":{\"Distribuidora\":\""+distribuidoraDestinoConsulta+"\"}}"]
    });
    
    var configDistribuidora = {
        method: 'post',
        url: URL_QUERY,
        headers: { 
        'Authorization': AUTH_BASE64, 
        'Content-Type': 'application/json'
        },
        data : distribuidora
    };

    const response = await axios(configDistribuidora);
    console.log("RESULT: "+JSON.stringify(response.data.result.payload));
    var dataDistribuidora = [];
    for(var i=0; i < (response.data.result.payload.length);i++){
        console.log((i+1)+"/"+response.data.result.payload.length);
        //Adiciona na lista todos os registros encontrados
        dataDistribuidora.push({
            codigoTeste: response.data.result.payload[i].Record.CodigoTeste,
            dataRegistro: response.data.result.payload[i].Record.DataRegistro,
            codigoPesoValidado: response.data.result.payload[i].Record.CodigoPesoValidado,
            resultado: response.data.result.payload[i].Record.Resultado,
            distribuidoraDestino: response.data.result.payload[i].Record.DistribuidoraDestino,
        })
    }   
    //setIsLoading(false)
    return dataDistribuidora;
}
