import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import axios from "axios";
import { URL } from '../../global/const';

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1 align="center">
        <strong>LISTA DE ALIMENTOS</strong>
      </h1>
      <Table data={data} />
    </div>
  );
}
