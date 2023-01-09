import styled from "styled-components";

export const Mid = styled.div`
  display: flex;
  ul {
    display: flex;
    gap: 50px;
  }
  ul li {
    display: flex;
    text-decoration: none;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    &:first-child {
      opacity: 0.9;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13vh;
  border-bottom: 1px solid rgba(75, 99, 112, 0.5);
  width: 100%;
  font-size: 14px;
  color: white;

  .wholething {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    z-index: 1;
  }

  img {
    border-radius: 100px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .logo-image {
    letter-spacing: 10px;
    font-weight: bold;
    font-size: 19px;
    font-family: fantasy, sans-serif;
  }
`;

export const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Status = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 3px solid white;
  bottom: 0;
  right: 0;
`;
