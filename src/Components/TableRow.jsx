import React from "react";

const TableRow = ({ coinsData }) => {
  const {
    symbol,
    name,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
    total_volume,
  } = coinsData;

  return (
    <>
      <tr>
        <td>
          <img src={image} alt={name} width="50" height="50" />
          <span>{name}</span>
        </td>

        <td>{symbol.toUpperCase()}</td>

        <td>${current_price}</td>

        <td>${total_volume.toLocaleString()}</td>

        <td
          style={{
            color: price_change_percentage_24h > 0 ? "#1ab318" : "#a91212",
          }}
        >
          {price_change_percentage_24h.toFixed(2)}%
        </td>

        <td>Mkt Cap : ${market_cap.toLocaleString()}</td>
      </tr>
    </>
  );
};

export default TableRow;
