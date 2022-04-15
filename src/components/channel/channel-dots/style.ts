import styled from "styled-components";

export const ModalOption = styled.div`
  width: 146px;
  height: 40px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #222a41;
  box-sizing: border-box;
  padding: 10px;
  &:hover {
    color: #ee2032;
    background: #fde8ea;
    border-radius: 4px;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 16px;
  height: 100%;
  align-items: center;
  margin: auto 15px;
  right: 0;
  background-image: url(./icons/dots.png);
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  z-index: 100;
  &:hover {
    opacity: 50%;
  }
`;

export const ModalOptions = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 92px;
  right: 7px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-shadow: 0px 4px 16px rgba(24, 32, 51, 0.12);
  border-radius: 4px;
`;