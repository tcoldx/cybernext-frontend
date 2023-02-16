import React, { useState } from "react";
import { ImStatsBars } from "react-icons/im";
import {
  HiLink,
  HiCurrencyDollar,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import { Con, CardCon, Top, Bottom, Left, Right, H1 } from "./Cards.styles";
interface Cards {
  cards: any[];
}
const Cards = ({ cards }: Cards) => {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleHover = (id: string) => {
    setActive(id);
    setHovered(true);
  };

  const handleLeave = () => {
    setActive("");
    setHovered(false);
  };

  return (
    <Con>
      {cards.map((el) => {
        return (
          <div>
            <CardCon
              key={el.id}
              onMouseOver={() => handleHover(el.id)}
              onMouseLeave={handleLeave}
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
                <H1 active={el.id === active && hovered}>{el.price}</H1>
              </Bottom>
            </CardCon>
          </div>
        );
      })}
    </Con>
  );
};

export default Cards;
