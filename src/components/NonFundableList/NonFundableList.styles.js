import styled from "styled-components";

export const TableRow = styled.tr`
  height: 70px;
  border-top: 1px solid #203a4324;
  text-align: center;
  color: #203a43;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13.4px;
  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    background: rgba(226, 237, 242, 255);
  }
  & td {
    color: #28546a;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    text-align: center;
  }

  td:nth-child(2) {
    text-align: left;
  }
  td:nth-child(3) {
    text-align: left;
  }
  td:nth-child(4) {
    text-align: left;
  }
  td:nth-child(5) {
    text-align: left;
  }
  td:nth-child(6) {
    text-align: left;
  }
`;

export const Price = styled.div`
  color: #2c53646d;
`;

export const PriceCon = styled.div`
  display: flex;
  gap: 10px;
`;

export const CheckAndPic = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  margin: auto;
`;
