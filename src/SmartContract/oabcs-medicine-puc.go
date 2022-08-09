/**
 *
 */
 package main

 import (''
	 "bytes"
	 "crypto/ecdsa"
	 "crypto/x509"
	 "encoding/json"
	 "fmt"
	 "math/big"
	 
	 "github.com/hyperledger/fabric/core/chaincode/shim"
	 sc "github.com/hyperledger/fabric/protos/peer"
 )
 
 // Define the Smart Contract structure
 type SmartContract struct {
 }

//etapa 1. registra os farmacos (fornecedores do lab)
type LocalFarmaco struct{
	CodigoFarmaco string `json:"CodigoFarmaco"` 
	CNPJ string `json:"CNPJ"`
 }

//etapa 2. registra chaves para os determinados farmacos (Ex: Chave1 ; Farmaco1)
type ChaveFarmaco struct{
	CodigoChave string `json:"CodigoChave"`
	CodigoFarmaco string `json:"CodigoFarmaco"` 
 }

//etapa 3. envio do fornecedor(farmaco) para o labs (farmaco -> labs)
type ItemFarmaco struct{
	CodigoChaveFarmaco string `json:"CodigoChaveFarmaco"` //codigo chave para identificar o dono do "lote"
	DataRegistro string `json:"DataRegistro"` //timestamp
	Tipo string `json:"Tipo"`
	Peso string `json:"Peso"`
 }

 //etapa 4. labs junta os farmacos e envia para a fabrica em um lote (labs -> fabrica)
 type LoteLabs struct{
	CodigoLote string `json:"CodigoLote"`//gera um lote juntando os farmacos recebidos
	DataRegistro string `json:"DataRegistro"` //timestamp
	QuantidadeFarmacos string `json:"QuantidadeFarmacos"`
	PesoTotal string `json:"PesoTotal"` //kg
	ListaChaveFarmacos string `json:"ListaChaveFarmacos"` //ListaChaveFarmacos = "chave1,chave2,chave3" 
 }

//etapa 5. fabrica faz o "processamento" dos items e envia para o sistema de embalagens (fabrica -> embalagens)
type ItemProcessado struct{
	CodigoLoteFab string `json:"CodigoLoteFab"`//gera um lote juntando os farmacos recebidos
	DataRegistro string `json:"DataRegistro"` //timestamp
	Tipo string `json:"Tipo"`
	QuantidadePacotes string `json:"QuantidadePacotes"`
	Peso string `json:"Peso"` //kg
 }
 //etapa 6. embalar o item e enviar para a pesagem (sist. embalagens -> controlador de peso)
 type ItemEmbalado struct{
	CodigoLoteEmbalagens string `json:"CodigoLoteEmbalagens"`//gera um lote juntando os farmacos recebidos
	DataRegistro string `json:"DataRegistro"` //timestamp
	Tipo string `json:"Tipo"`
	QuantidadeEmbalagens string `json:"QuantidadePacotes"`
	Peso string `json:"Peso"` //kg
 }

//etapa 7. pesar o item e se validado como OK, enviar para os testes microbiológicos (validacão peso -> testes microbiologicos)
  type ItemPesoValidado struct{
	CodigoPesoValidacao string `json:"CodigoPesoValidacao"`//codigo de validacão
	DataRegistro string `json:"DataRegistro"` //timestamp
	CodigoLoteValidado string `json:"CodigoLoteValidado"` //referencia ao CodigoLoteEmbalagens
	Resultado string `json:"Resultado"` //OK
 }

 //etapa 8. faz testes microbiológicos e se testado como OK, enviar para a distribuidora (testes -> distribuidora)
 type ItemTestado struct{
	CodigoTeste string `json:"CodigoTeste"`//codigo de validacão
	DataRegistro string `json:"DataRegistro"` //timestamp
	CodigoPesoValidado string `json:"CodigoPesoValidado"` //referencia ao CodigoLoteEmbalagens
	Resultado string `json:"Resultado"` //OK
	DistribuidoraDestino string `json:"DistribuidoraDestino"` //Ex: Distribuidora A
 }

//etapa 9. distribuidora envia para as farmácias e termina o rastreamento por aqui.
  type ItemDistribuido struct{
	Distribuidora string `json:"Distribuidora"`//nome da distribuidora para pegar o passo anterior (Testes)
	DataRegistro string `json:"DataRegistro"` //timestamp
	CodigoLoteDistribuidora string `json:"CodigoLoteDistribuidora"` 
 }

 
 func main() {
	 // Create a new Smart Contract
	 err := shim.Start(new(SmartContract))
	 if err != nil {
		 fmt.Printf("Error creating new Smart Contract: %s", err)
	 } else {
				 fmt.Printf("Success creating new Smart Contract")
		 }
 }
 
 /**
  *
  */
 func (s *SmartContract) Init(APIstub shim.ChaincodeStubInterface) sc.Response {
	 return shim.Success(nil);
 }
 
 /**
  *
  */
 func (s *SmartContract) Invoke(APIstub shim.ChaincodeStubInterface) sc.Response {
	 // Retrieve the requested Smart Contract function and arguments
	 function, args := APIstub.GetFunctionAndParameters()
 
	 // Route to the appropriate handler function to interact with the ledger appropriately
	 if function == "addLocalFarmaco" {
		 return s.addLocalFarmaco(APIstub)
	 } else if function == "addChaveFarmaco"{
		return s.addChaveFarmaco(APIstub)
	 } else if function == "addItemFarmaco"{
		return s.addItemFarmaco(APIstub)
	 } else if function == "addLoteLabs"{
		return s.addLoteLabs(APIstub)
	 } else if function == "addItemProcessado"{
		return s.addItemProcessado(APIstub)
	} else if function == "addItemEmbalado"{
		return s.addItemEmbalado(APIstub)
	} else if function == "addItemPesoValidado"{
		return s.addItemPesoValidado(APIstub)
	} else if function == "addItemTestado"{
		return s.addItemTestado(APIstub)
	} else if function == "addItemDistribuido"{
		return s.addItemDistribuido(APIstub)
	 } else if function == "queryEvent"{
		return s.queryEvent(APIstub,args)
	 }
	 
	 return shim.Error("Invalid Smart Contract function name.")
 }
 
 func (s *SmartContract) queryEvent(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {
 
	 //   0
	 // "queryString"
	 if len(args) < 1 {
		 return shim.Error("Incorrect number of arguments. Expecting 1")
	 }
 
	 queryString := args[0]

 
	 queryResults, err := getQueryResultForQueryString(APIstub, queryString)
	 if err != nil {
		 return shim.Error(err.Error())
	 }

	 return shim.Success(queryResults)
 }
 //ADICIONAR Local Farmaco - REGRAS
 func (s *SmartContract) addLocalFarmaco(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 2 {
		return shim.Error("Incorrect number of arguments for event. Expecting 2")
	};
	CodigoFarmaco := args[0]
	if CodigoFarmaco == "" {
		return shim.Error("Invalid value for parameter CodigoFarmaco.")
	}
	CNPJ := args[1]
	if CNPJ == "" {
		return shim.Error("Invalid value for parameter CNPJ.")
	}
	
	   strjson, err := getQueryResultForQueryString(APIstub,"{\"selector\":{\"CodigoFarmaco\":\"" + CodigoFarmaco + "\"}}");
	   if err != nil {
		   erromsg := "Erro no primeiro err: "+err.Error()+" STRJSON: "+string(strjson);
		   return shim.Error(erromsg)
	   }
	   if(string(strjson) != "[]"){
		   return shim.Error("Esse codigoFARMACO ja existe, tente utilizar outro codigo.")
	   }

	   errorMsg := registerLocalFarmaco(APIstub,CodigoFarmaco,CNPJ)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerLocalFarmaco(APIstub shim.ChaincodeStubInterface, codigoFarmaco string, cnpj string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := LocalFarmaco{CodigoFarmaco: codigoFarmaco, CNPJ: cnpj}
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}
//ADICIONAR ChaveFarmco - REGRAS
func (s *SmartContract) addChaveFarmaco(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 2 {
		return shim.Error("Incorrect number of arguments for event. Expecting 2")
	};
	CodigoChave := args[0]
	if CodigoChave == "" {
		return shim.Error("Invalid value for parameter CodigoChave.")
	}
	CodigoFarmaco := args[1]
	if CodigoFarmaco == "" {
		return shim.Error("Invalid value for parameter CodigoFarmaco.")
	}

       //verifica existencia do codigo
	   strjsonUsed, err1 := getQueryResultForQueryString(APIstub,"{\"selector\":{\"CodigoChave\":\"" + CodigoChave + "\"}}");
	   if err1 != nil {
		   erromsg := "Erro no primeiro err: "+err1.Error()+" STRJSON: "+string(strjsonUsed);
		   return shim.Error(erromsg)
	   }
	   if(string(strjsonUsed) != "[]"){
		   return shim.Error("Essa CodigoChave ja existe, tente utilizar outro codigo.")
	   }
	   /**verifica existencia da etiqueta
	   strjsonExist, err2 := getQueryResultForQueryString(APIstub,"{\"selector\":{\"CodigoEtiqueta\":\"" + EtiquetaFamilia + "\"}}");
	   if err2 != nil {
		erromsg := "Erro no primeiro err: "+err2.Error()+" STRJSON: "+string(strjsonExist);
		return shim.Error(erromsg)
	   }
	   if(string(strjsonExist) == "[]"){
		return shim.Error("Essa etiqueta de familia não existe, tente utilizar outra.")
	   }**/

	   errorMsg := registerChaveFarmaco(APIstub,CodigoChave,CodigoFarmaco)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerChaveFarmaco(APIstub shim.ChaincodeStubInterface, codigoChave string, codigoFarmaco string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := ChaveFarmaco{CodigoChave: codigoChave, CodigoFarmaco: codigoFarmaco}
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

//ADICIONAR ItemFarmaco - REGRAS
func (s *SmartContract) addItemFarmaco(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 4 {
		return shim.Error("Incorrect number of arguments for event. Expecting 4")
	};
	CodigoChaveFarmaco := args[0]
	if CodigoChaveFarmaco == "" {
		return shim.Error("Invalid value for parameter CodigoChaveFarmaco.")
	}
	DataRegistro := args[1]
	if DataRegistro == "" {
		return shim.Error("Invalid value for parameter DataRegistro.")
	}
	Tipo := args[2]
	if Tipo == "" {
		return shim.Error("Invalid value for parameter Tipo.")
	}
	Peso := args[3]
	if Peso == "" {
		return shim.Error("Invalid value for parameter Peso.")
	}
	
		strjson, err := getQueryResultForQueryString(APIstub,"{\"selector\":{\"CodigoChaveFarmaco\":\"" + CodigoChaveFarmaco + "\"}}");
		if err != nil {
		erromsg := "Erro no primeiro err: "+err.Error()+" STRJSON: "+string(strjson);
		return shim.Error(erromsg)
		}
		if(string(strjson) != "[]"){
			return shim.Error("Essa chave ja foi utilizada, utilize uma outra chave farmaco.")
		}

		errorMsg := registerItemFarmaco(APIstub,CodigoChaveFarmaco,DataRegistro,Tipo,Peso)
		if errorMsg != "" {
			erromsg := "Erro no segundo err: "+errorMsg;
			return shim.Error(erromsg)
		}


	return shim.Success(nil);
}

func registerItemFarmaco(APIstub shim.ChaincodeStubInterface, codigolotechave string, dataRegistro string, tipo string, peso string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := ItemFarmaco{CodigoChaveFarmaco: codigolotechave, DataRegistro: dataRegistro, Tipo: tipo, Peso: peso}
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

//ADICIONAR LoteLabs - REGRAS
func (s *SmartContract) addLoteLabs(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 5 {
		return shim.Error("Incorrect number of arguments for event. Expecting 5")
	};
	CodigoLote := args[0]
	if CodigoLote == "" {
		return shim.Error("Invalid value for parameter CodigoLote.")
	}
	DataRegistro := args[1]
	if DataRegistro == "" {
		return shim.Error("Invalid value for parameter DataRegistro.")
	}
	QuantidadeFarmacos := args[2]
	if QuantidadeFarmacos == "" {
		return shim.Error("Invalid value for parameter QuantidadeFarmacos.")
	}
	PesoTotal := args[3]
	if PesoTotal == "" {
		return shim.Error("Invalid value for parameter PesoTotal.")
	}
	ListaChaveFarmacos := args[4]
	if ListaChaveFarmacos == "" {
		return shim.Error("Invalid value for parameter ListaChaveFarmacos.")
	}
	
	   errorMsg := registerLoteLabs(APIstub,CodigoLote,DataRegistro,QuantidadeFarmacos,PesoTotal,ListaChaveFarmacos)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerLoteLabs(APIstub shim.ChaincodeStubInterface, codigoLote string, dataRegistro string, quantidadefarmacos string, pesototal string, listachavefarmacos string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := LoteLabs{CodigoLote: codigoLote, DataRegistro: dataRegistro, QuantidadeFarmacos: quantidadefarmacos, PesoTotal: pesototal, ListaChaveFarmacos: listachavefarmacos}
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

//ADICIONAR ItemProcessado - REGRAS
func (s *SmartContract) addItemProcessado(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 5 {
		return shim.Error("Incorrect number of arguments for event. Expecting 5")
	};
	CodigoLoteFab := args[0]
	if CodigoLoteFab == "" {
		return shim.Error("Invalid value for parameter CodigoLoteFab.")
	}
	DataRegistro := args[1]
	if DataRegistro == "" {
		return shim.Error("Invalid value for parameter DataRegistro.")
	}
	Tipo := args[2]
	if Tipo == "" {
		return shim.Error("Invalid value for parameter Tipo.")
	}
	QuantidadePacotes := args[3]
	if QuantidadePacotes == "" {
		return shim.Error("Invalid value for parameter QuantidadePacotes.")
	}
	Peso := args[4]
	if Peso == "" {
		return shim.Error("Invalid value for parameter Peso.")
	}

	   errorMsg := registerItemProcessado(APIstub,CodigoLoteFab,DataRegistro,Tipo,QuantidadePacotes,Peso)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerItemProcessado(APIstub shim.ChaincodeStubInterface, codigolotefab string, dataRegistro string, tipo string, quantidadepacotes string, peso string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := ItemProcessado{CodigoLoteFab: codigolotefab, DataRegistro: dataRegistro, Tipo: tipo, QuantidadePacotes: quantidadepacotes, Peso: peso }
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

//ADICIONAR ItemEmbalado - REGRAS
func (s *SmartContract) addItemEmbalado(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 5 {
		return shim.Error("Incorrect number of arguments for event. Expecting 5")
	};
	CodigoLoteEmbalagens := args[0]
	if CodigoLoteEmbalagens == "" {
		return shim.Error("Invalid value for parameter CodigoLoteEmbalagens.")
	}
	DataRegistro := args[1]
	if DataRegistro == "" {
		return shim.Error("Invalid value for parameter DataRegistro.")
	}
	Tipo := args[2]
	if Tipo == "" {
		return shim.Error("Invalid value for parameter Tipo.")
	}
	QuantidadeEmbalagens := args[3]
	if QuantidadeEmbalagens == "" {
		return shim.Error("Invalid value for parameter QuantidadeEmbalagens.")
	}
	Peso := args[4]
	if Peso == "" {
		return shim.Error("Invalid value for parameter Peso.")
	}

	   errorMsg := registerItemEmbalado(APIstub,CodigoLoteEmbalagens,DataRegistro,Tipo,QuantidadeEmbalagens,Peso)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerItemEmbalado(APIstub shim.ChaincodeStubInterface, codigoloteemb string, dataRegistro string, tipo string, quantidadeemb string, peso string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := ItemEmbalado{CodigoLoteEmbalagens: codigoloteemb, DataRegistro: dataRegistro, Tipo: tipo, QuantidadeEmbalagens: quantidadeemb, Peso: peso }
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

//ADICIONAR ItemPesoValidado - REGRAS
func (s *SmartContract) addItemPesoValidado(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 4 {
		return shim.Error("Incorrect number of arguments for event. Expecting 4")
	};
	CodigoPesoValidacao := args[0]
	if CodigoPesoValidacao == "" {
		return shim.Error("Invalid value for parameter CodigoPesoValidacao.")
	}
	DataRegistro := args[1]
	if DataRegistro == "" {
		return shim.Error("Invalid value for parameter DataRegistro.")
	}
	CodigoLoteValidado := args[2]
	if CodigoLoteValidado == "" {
		return shim.Error("Invalid value for parameter CodigoLoteValidado.")
	}
	Resultado := args[3]
	if Resultado == "" {
		return shim.Error("Invalid value for parameter Resultado.")
	}

	   errorMsg := registerItemPesoValidado(APIstub,CodigoPesoValidacao,DataRegistro,CodigoLoteValidado,Resultado)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerItemPesoValidado(APIstub shim.ChaincodeStubInterface, codigopesovalidacao string, dataRegistro string, codigolotevalidado string, resultado string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := ItemPesoValidado{CodigoPesoValidacao: codigopesovalidacao, DataRegistro: dataRegistro, CodigoLoteValidado: codigolotevalidado, Resultado: resultado}
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

//ADICIONAR ItemTestado - REGRAS
func (s *SmartContract) addItemTestado(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 5 {
		return shim.Error("Incorrect number of arguments for event. Expecting 5")
	};
	CodigoTeste := args[0]
	if CodigoTeste == "" {
		return shim.Error("Invalid value for parameter CodigoTeste.")
	}
	DataRegistro := args[1]
	if DataRegistro == "" {
		return shim.Error("Invalid value for parameter DataRegistro.")
	}
	CodigoPesoValidado := args[2]
	if CodigoPesoValidado == "" {
		return shim.Error("Invalid value for parameter CodigoPesoValidado.")
	}
	Resultado := args[3]
	if Resultado == "" {
		return shim.Error("Invalid value for parameter Resultado.")
	}
	DistribuidoraDestino := args[3]
	if DistribuidoraDestino == "" {
		return shim.Error("Invalid value for parameter DistribuidoraDestino.")
	}

	   errorMsg := registerItemTestado(APIstub,CodigoTeste,DataRegistro,CodigoPesoValidado,Resultado,DistribuidoraDestino)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerItemTestado(APIstub shim.ChaincodeStubInterface, codigoteste string, dataRegistro string, codigopesovalidado string, resultado string, distribuidoradestino string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := ItemTestado{CodigoTeste: codigoteste, DataRegistro: dataRegistro, CodigoPesoValidado: codigopesovalidado, Resultado: resultado, DistribuidoraDestino: distribuidoradestino}
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

//ADICIONAR ItemDistribuido - REGRAS
func (s *SmartContract) addItemDistribuido(APIstub shim.ChaincodeStubInterface) sc.Response {
	_, args := APIstub.GetFunctionAndParameters()

	if len(args) != 3 {
		return shim.Error("Incorrect number of arguments for event. Expecting 3")
	};
	Distribuidora := args[0]
	if Distribuidora == "" {
		return shim.Error("Invalid value for parameter Distribuidora.")
	}
	DataRegistro := args[1]
	if DataRegistro == "" {
		return shim.Error("Invalid value for parameter DataRegistro.")
	}
	CodigoLoteDistribuidora := args[2]
	if CodigoLoteDistribuidora == "" {
		return shim.Error("Invalid value for parameter CodigoLoteDistribuidora.")
	}


	   errorMsg := registerItemDistribuido(APIstub,Distribuidora,DataRegistro,CodigoLoteDistribuidora)
	   if errorMsg != "" {
		   erromsg := "Erro no segundo err: "+errorMsg;
		   return shim.Error(erromsg)
	   }


	return shim.Success(nil);
}

func registerItemDistribuido(APIstub shim.ChaincodeStubInterface, distribuidora string, dataRegistro string, codigolotedistribuidora string) (string) {
	//time1 := time.Now()
	//time1 := "tempo"
	newPosition := ItemDistribuido{Distribuidora: distribuidora, DataRegistro: dataRegistro, CodigoLoteDistribuidora: codigolotedistribuidora}
	positionEncoded, _ := json.Marshal(newPosition)
	err := APIstub.PutState(APIstub.GetTxID(), positionEncoded)
	if err != nil {
		return fmt.Sprintf("Failed to register" , "-")
	}	 
	return ""
}

 func getQueryResultForQueryString(stub shim.ChaincodeStubInterface, queryString string)([] byte, error) {
	 fmt.Printf("- getQueryResultForQueryString queryString:\n%s\n", queryString)
	 resultsIterator, err := stub.GetQueryResult(queryString)
	 defer resultsIterator.Close()
	 if err != nil {
		 return nil, err
	 }
	 // buffer is a JSON array containing QueryRecords
	 var buffer bytes.Buffer
	 buffer.WriteString("[")
	 bArrayMemberAlreadyWritten := false
	 for resultsIterator.HasNext() {
		 queryResponse,
		 err := resultsIterator.Next()
		 if err != nil {
			 return nil, err
		 }
		 // Add a comma before array members, suppress it for the first array member
		 if bArrayMemberAlreadyWritten == true {
			 buffer.WriteString(",")
		 }
		 buffer.WriteString("{\"Key\":")
		 buffer.WriteString("\"")
		 buffer.WriteString(queryResponse.Key)
		 buffer.WriteString("\"")
		 buffer.WriteString(", \"Record\":")
		 // Record is a JSON object, so we write as-is
		 buffer.WriteString(string(queryResponse.Value))
		 buffer.WriteString("}")
		 bArrayMemberAlreadyWritten = true
	 }
	 buffer.WriteString("]")
	 fmt.Printf("- getQueryResultForQueryString queryResult:\n%s\n", buffer.String())
	 return buffer.Bytes(), nil
 }
 
 func cryptoVerify(hash []byte, publicKeyBytes []byte, r *big.Int, s *big.Int) (result bool) {
	 fmt.Println("- Verifying ECDSA signature")
	 fmt.Println("Message")
	 fmt.Println(hash)
	 fmt.Println("Public Key")
	 fmt.Println(publicKeyBytes)
	 fmt.Println("r")
	 fmt.Println(r)
	 fmt.Println("s")
	 fmt.Println(s)
 
	 publicKey, err := x509.ParsePKIXPublicKey(publicKeyBytes)
	 if err != nil {
		 fmt.Println(err.Error())
		 return false
	 }
 
	 switch publicKey := publicKey.(type) {
	 case *ecdsa.PublicKey:
		 return ecdsa.Verify(publicKey, hash, r, s)
	 default:
		 return false
	 }
 }
 
 