import React, { useState, useEffect } from "react";
import axios from "axios";

function PropertyTable() {
  const users = [
    {
      status: "New",
      area: "Palermo",
      price: "12000",
      temporary: "",
      url: "test",
      observation: "test",
      user: "Pato",
    },
    {
      status: "Closed",
      area: "Capital",
      price: "2000",
      temporary: "",
      url: "test",
      observation: "test",
      user: "Migli",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:32782/api/Property/GetProperties")
      .then((res) => console.log(res.data))
      .catch((er) => console.log(er));
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th>Status</th>
            <th>Area</th>
            <th>Price</th>
            <th>Temporary</th>
            <th>URL</th>
            <th>Observation</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default PropertyTable;
