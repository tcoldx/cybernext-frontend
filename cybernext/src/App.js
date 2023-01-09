import React from "react";
import NavBar from "./components/Navbar/Navbar";
import { HiSpeakerphone } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbAdjustments } from "react-icons/tb";
import Cards from "./components/Cards/Cards";
import "./App.css";
function App() {
  const cards = [
    { name: "NFT staked", id: 1 },
    { name: "Cybernext Staked", id: 2 },
    { name: "Total Reward", id: 3 },
    { name: "Max APR", id: 4 },
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
      </div>
    </div>
  );
}

export default App;
