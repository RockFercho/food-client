import React from "react";
import MaterialTable from "material-table";

export const Table = (props) => {
  const columns = [
    {
      title: "Categoria",
      field: "categoria",
    },
    {
      title: "Nombre",
      field: "nombre",
    },
    {
      title: "Procedencia",
      field: "procedencia",
    },
    {
      title: "Calorias(kcal)",
      field: "calorias",
    },
  ];

  return (
    <div className="tablaMT">
      <MaterialTable
        data={props.data}
        columns={columns}
        options={{
          toolbar: false,
          padding: 0,
          search: false,
          paging: true,
          filtering: false,
          sorting: false,
          pageSize: 5,
          pageSizeOptions: 5,
          width: 300,
          minWidth: 300,
          rowStyle: {
            fontFamily: "Comic Neue",
            color: "#450E0D",
          },
          headerStyle: {
            backgroundColor: "#B35C647F",
            color: "white",
            fontWeight: "bold",
            fontFamily: "Comic Neue",
            fontSize: "inherit",
            textAlign: "left",
          },
        }}
        style={{
            backgroundColor: "transparent"
        }}
      />
    </div>
  );
};
