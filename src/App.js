import React from "react";
import NavBar from "./components/Navbar/Navbar";
import { HiSpeakerphone } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbAdjustments } from "react-icons/tb";
import Cards from "./components/Cards/Cards";
import "./App.css";
import TableChart from "./components/TableChart/TableChart";
function App() {
  const cards = [
    { name: "NFT staked", id: 1, price: "1.500" },
    { name: "Cybernext Staked", id: 2, price: "234K" },
    { name: "Total Reward", id: 3, price: "2M" },
    { name: "Max APR", id: 4, price: "145.3K" },
  ];

  const NonFundableCoins = [
    {
      id: 1,
      name: "CryptoPunks",
      peel: 5.5,
      earned: "1,222",
      totalStaked: "345,173",
      apr: 22.2,
      Ends: "February 8",
    },
    {
      id: 2,
      name: "Cryptech",
      peel: 5.5,
      earned: "1,112",
      price: 6.9,
      totalStaked: "12,000",
      apr: 16.2,
      Ends: "March 4",
    },
    {
      id: 3,
      name: "Fallen Coin",
      peel: 5.5,
      earned: "2,221",
      totalStaked: "12,133",
      apr: 12.2,
      Ends: "February 12",
    },
    {
      id: 4,
      name: "Blood Olaf",
      peel: 5.5,
      earned: "3,412",
      totalStaked: "45,173",
      apr: 32.2,
      Ends: "October 8",
    },
  ];
  return (
    <div className="App">
      <div className="top-overflow"></div>
      <NavBar />
      <div className="content">
        <div className="header-content">
          <div className="welcome-container">
            Welcome to <h3>Cybernext</h3>
          </div>
          <div className="bar-container">
            <div className="font-cont">
              <HiSpeakerphone />
            </div>
            <span className="news">this is the news bar</span>
          </div>
        </div>
        <div className="card-container">
          <Cards cards={cards} />
        </div>
        <div>
          <div className="table-header">
            <div className="left-header">
              <div className="header-option-1">Token pools</div>
              <div className="header-option-1">/</div>
              <div className="header-option">NFT Pools</div>
            </div>
            <div className="right-header">
              <RxHamburgerMenu style={{ cursor: "pointer" }} />
              <TbAdjustments style={{ cursor: "pointer", opacity: 0.4 }} />
            </div>
          </div>
        </div>
        <TableChart list={NonFundableCoins} />
      </div>
    </div>
  );
}

export default App;
