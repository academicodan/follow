import { ContainerApp } from "../../Components/ContainerApp";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { DetailsTableTransactions } from "../../Components/DetailsTableTransactions/index";

const data = [
  {
    id: "1",
    codigoLote: "12345",
    tipo: "Cloro",
    quantEmbalagem: "7",
    peso: 14,
  },
  {
    id: "2",
    codigoLote: "12346",
    tipo: "Cloro",
    quantEmbalagem: "7",
    peso: 14,
  },
  {
    id: "3",
    codigoLote: "12347",
    tipo: "Cloro",
    quantEmbalagem: "7",
    peso: 14,
  },
  {
    id: "4",
    codigoLote: "12348",
    tipo: "Cloro",
    quantEmbalagem: "7",
    peso: 14,
  },
  {
    id: "5",
    codigoLote: "12349",
    tipo: "Cloro",
    quantEmbalagem: "7",
    peso: 14,
  },
];

// Is possible convert id or data(number) in status
export const TableTransactions = () => {
  const [listTransactions, setListTransactions] = useState();

  useEffect(() => {
    setListTransactions(data);
  }, []);

  const columns = [
    { title: "Id", field: "id" },
    { title: "Codigo Lote", field: "codigoLote" },
    { title: "Tipo", field: "tipo" },
    { title: "Quant. Embalagem", field: "quantEmbalagem" },
    { title: "Peso", field: "peso" },
  ];
  return (
    <ContainerApp notStep>
      <MaterialTable
        title={"Table transections"}
        data={listTransactions}
        columns={columns}
        style={{ width: "100%" }}
        options={{
          paging: false,
        }}
        actions={[
          {
            icon: "info",
            tooltip: "Datails",
            onClick: (event, rowData) => {
              console.log(rowData.codigoLote);
              window.location.href = "/detailsTableTransactions?codigolote="+rowData.codigoLote
            },
          },
        ]}
      />
    </ContainerApp>
  );
};
