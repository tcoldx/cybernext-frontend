import styled from "styled-components";

export const CardCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(223, 246, 229, 255);
  width: 300px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5 ease;
  transition-duration: 450ms;

  &:hover {
    background: #0f2027;
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
    color: whitesmoke;
    cursor: pointer;
  }
`;

export const Con = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px 320px;
  justify-items: center;
  justify-content: center;
  z-index: 1;
  width: 81.5vw;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 20px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme};
  border-radius: 100%;
  padding: 10px;
  color: black;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme};
  width: 60px;
  height: 20px;
  border-radius: 20px;
  color: ${(props) => (props.hovered ? "#2c5364" : "white")};
  opacity: ${(props) => (props.hovered ? "1" : "0.5")};
  font-size: 10px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: start;
  margin-left: 42px;
  margin-bottom: 42px;
  font-weight: nonbold;
  font-family: fantasy;

  & .name {
    font-size: 12px;
    opacity: 0.6;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-family: Verdana, sans-serif;
  color: ${(props) => (props.active ? "white" : "#2c5364")};
`;
