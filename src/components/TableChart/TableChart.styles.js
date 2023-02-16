import styled from "styled-components";
export const TableContainer = styled.div`
  background: rgba(240, 246, 249, 255);
  width: 82vw;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 23px;
  z-index: 3;
  text-align: center !important;

  ::-webkit-scrollbar {
    display: none;
  }
  & .table-con {
    position: relative;
    margin-top: 20px;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    th {
      color: #28546a;
      opacity: 0.4;
      width: 100px;
    }

    tbody:before {
      line-height: 1em;
      content: "-";
      color: white; /* bacground color */
      display: block;
    }
  }

  & th:nth-child(2) {
    text-align: left;
    width: 200px;
  }
  & th:nth-child(3) {
    text-align: left;
  }
  & th:nth-child(4) {
    text-align: left;
  }
  & th:nth-child(5) {
    text-align: left;
  }
  & th:nth-child(6) {
    text-align: left;
  }
`;

export const CheckAndAll = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  margin: auto;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  gap: 15px;
  align-items: center;
  width: 30vw;

  & .search-container input {
    background: rgba(226, 236, 244, 255);
    border: none;
    outline: none;
    margin-left: 10px;
  }

  & .search-container {
    display: flex;
    align-items: center;
    width: 15vw;
    border-radius: 8px;
    background: rgba(226, 236, 244, 255);
    height: 34px;
  }

  & select {
    border: none;
    outline: none;
    background: rgba(226, 236, 244, 255);
    border-radius: 8px;
    height: 34px;
    font-weight: bold;
    opacity: 0.7;
    font-size: 11.5px;
    padding: 10px;
    color: #2c5364;
  }
`;

export const TableNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13vh;
  border-bottom: 1px solid #203a4324;
  & .header-right {
    display: flex;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  & .buttons-wrap {
    background-color: rgba(226, 236, 244, 255);
    width: 10vw;
    padding: 5px;
    height: fit-content;
    border-radius: 8px;
    margin-left: 20px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 8px;
  height: 34px;
  font-weight: bold;
  width: 75px;
  background: ${(props) =>
    props.active ? "rgba(76, 121, 147, 255)" : "transparent"};
  color: ${(props) => (props.active ? "white" : "rgba(76, 121, 147, 255)")};
  box-shadow: ${(props) => props.active && "1px 1px 10px rgba(0, 0, 0, 0.1)"};
  cursor: pointer;
`;

export const HeaderMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10vw;
  font-weight: bold;
  font-size: 14px;
  color: #2c5364;
  & .inner-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    background: white;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.toggle};
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background: rgba(226, 236, 244, 255);
`;
