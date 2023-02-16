import React, { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RxCaretSort } from "react-icons/rx";
import NonFundableList from "../NonFundableList/NonFundableList";
import {
  TableContainer,
  TableNav,
  HeaderLeft,
  Button,
  Container,
  HeaderRight,
  HeaderMiddle,
  CheckAndAll,
} from "./TableChart.styles";

interface coinProps {
  list: any[];
}

const TableChart = ({ list }: coinProps): JSX.Element => {
  const [active, setActive] = useState("");
  const [toggled, setToggled] = useState(false);
  const buttonArray = [
    { id: "1", name: "Live" },
    { id: "2", name: "Finished" },
  ];
  function handleClick(id: string) {
    setActive(id);
  }

  function handleToggle() {
    setToggled(!toggled);
  }

  useEffect(() => {
    setActive("1");
  }, []);

  interface User {
    name: string;
    id: number;
    Ends: string;
    apr: number;
    peel: number;
    totalStaked: string;
    earned: string;
  }

  interface Button {
    id: string;
    name: string;
  }

  return (
    <TableContainer>
      <TableNav>
        <HeaderLeft>
          <div className="buttons-wrap">
            {buttonArray.map((button: Button) => {
              const isActive = button.id === active;
              return (
                <Button
                  key={button.id}
                  active={isActive}
                  onClick={() => handleClick(button.id)}
                >
                  {button.name}
                </Button>
              );
            })}
          </div>
          <HeaderMiddle>
            <div>Staked Only</div>
            <Container toggle={toggled && "flex-end"}>
              <div className="inner-icon" onClick={handleToggle}></div>
            </Container>
          </HeaderMiddle>
        </HeaderLeft>
        <HeaderRight>
          <div className="search-container">
            <RiSearchLine style={{ marginLeft: 10, opacity: 0.5 }} />
            <input type="search" placeholder="Search" />
          </div>
          <select>
            <option>Sort by</option>
          </select>
        </HeaderRight>
      </TableNav>
      <table className="table-con">
        <thead>
          <tr>
            <th>
              <CheckAndAll>
                <input type="checkbox" />
                <span>All</span>
              </CheckAndAll>
            </th>
            <th>
              <div className="cont-center">
                <span>name</span>
                <span>
                  <RxCaretSort style={{ verticalAlign: "bottom" }} />
                </span>
              </div>
            </th>
            <th>
              <div className="cont-center">
                Peel Earned
                <RxCaretSort style={{ verticalAlign: "bottom" }} />
              </div>
            </th>
            <th>
              <div className="cont-center">
                Total Staked <RxCaretSort style={{ verticalAlign: "bottom" }} />
              </div>
            </th>
            <th>
              <div className="cont-center">
                APR <RxCaretSort style={{ verticalAlign: "bottom" }} />
              </div>
            </th>
            <th>
              <div className="cont-center">
                Ends in <RxCaretSort style={{ verticalAlign: "bottom" }} />
              </div>
            </th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((coin: User) => {
            return (
              <NonFundableList
                key={coin.id}
                name={coin.name}
                ends={coin.Ends}
                staked={coin.totalStaked}
                apr={coin.apr}
                peel={coin.peel}
                earned={coin.earned}
              />
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default TableChart;
