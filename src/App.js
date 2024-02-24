import { useEffect, useState } from "react";
import "./App.css";
import TableRow from "./Components/TableRow";
import axios from "axios";


function App() {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        // console.log(response.data);
        setCoinsData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {coinsData.length > 0 && (
        <table>
          <thead>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Total Volume</th>
            <th>% Change</th>
            <th>Mkt Cap</th>
          </thead>
          <tbody>
            {coinsData.map((item) => (
              <TableRow key={item.id} coinsData={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
