import React, { useEffect } from "react";
import {
  TableRow,
  CheckAndPic,
  Price,
  PriceCon,
} from "./NonFundableList.styles";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GiClockwork } from "react-icons/gi";
import Me from "../../assets/Images/me.png";
import axios from "axios";
const defaultParams = {
  vs_currency: "usd",
  order: "market_cap_desc",
  per_page: 50,
  page: 1,
  sparkline: true,
  price_change_percentage: "1h%2C24h%2C7d",
};
async function getCoin() {
  try {
    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${defaultParams.vs_currency}&order=${defaultParams.order}&per_page=${defaultParams.per_page}&page=${defaultParams.page}&sparkline=true&price_change_percentage=${defaultParams.price_change_percentage}`;
    await axios.get(BASE_URL).then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
}

function NonFundableList({ name, ends, staked, apr, peel, earned }) {
  useEffect(() => {
    getCoin();
  }, []);

  return (
    <TableRow>
      <td>
        <CheckAndPic>
          <input type="checkbox" />
          <img
            src={Me}
            alt="img"
            width={50}
            height={50}
            style={{ borderRadius: "100%" }}
          />
        </CheckAndPic>
      </td>
      <td>{name}</td>
      <td>
        <PriceCon>
          {peel} <Price>{earned} USD</Price>
        </PriceCon>
      </td>
      <td>{staked} CYBER</td>
      <td>{apr}%</td>
      <td>
        <GiClockwork style={{ verticalAlign: "top", paddingRight: "10px" }} />
        {ends}
      </td>
      <td>
        <BiDotsHorizontalRounded />
      </td>
    </TableRow>
  );
}

export default NonFundableList;
