import React, { useState } from "react";
import { ImStatsBars } from "react-icons/im";
import {
  HiLink,
  HiCurrencyDollar,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import {
  Con,
  CardCon,
  Top,
  Bottom,
  CardDetail,
  Left,
  Right,
} from "./Cards.styles";
const Cards = (props) => {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleHover = (id) => {
    setActive(id);
    setHovered(true);
  };

  const handleLeave = (id) => {
    setActive(!id);
    setHovered(false);
  };

  return (
    <Con>
      {props.cards.map((el) => {
        return (
          <div>
            <CardCon
              key={el.id}
              onMouseOver={() => handleHover(el.id)}
              onMouseLeave={() => handleLeave(el.id)}
            >
              <Top>
                <Left
                  theme={
                    el.id === active && hovered
                      ? "whitesmoke"
                      : "rgba(177, 214, 194, 255)"
                  }
                >
                  {el.id === 1 ? (
                    <ImStatsBars />
                  ) : null || el.id === 2 ? (
                    <HiLink />
                  ) : null || el.id === 3 ? (
                    <HiCurrencyDollar />
                  ) : null || el.id === 4 ? (
                    <HiOutlinePresentationChartLine />
                  ) : null}
                </Left>
                <Right
                  theme={
                    el.id === active && hovered
                      ? "whitesmoke"
                      : "rgba(94,152,153,255)"
                  }
                  hovered={el.id === active && hovered}
                >
                  <div>-250%</div>
                  <HiOutlineArrowTrendingDown />
                </Right>
              </Top>
              <Bottom>
                <span className="name">{el.name}</span>
                <h1>1.500</h1>
              </Bottom>
            </CardCon>
            <CardDetail display={el.id === active ? "flex" : "none"}>
              Detail Stats
            </CardDetail>
          </div>
        );
      })}
    </Con>
  );
};

export default Cards;
