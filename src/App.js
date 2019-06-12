import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const apiKey = "97fc526fc8de40e99ade55b6a813780d";

  useEffect(() => {
    axios
      .get(
        "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/",
        {
          headers: {
            "X-API-Key": apiKey
          }
        }
      )
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Chalice of Opulence</h1>
      {data && <p>{data.data.Response.data.inventoryItem.itemName}</p>}
    </>
  );
}

export default App;
