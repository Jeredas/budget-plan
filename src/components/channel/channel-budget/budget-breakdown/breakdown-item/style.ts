import NumberFormat from "react-number-format";
import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: 12px;
  position: relative;
`;

export const Month = styled.div`
  width: 160px;
  height: 21px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #2f3b66;
`;

export const ItemValue = styled(NumberFormat)`
  width: 160px;
  height: 40px;
  left: 106px;
  top: 622px;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  padding-left: 33px;
`;

export const Currency = styled.div`
  position: absolute;
  width: 9px;
  height: 21px;
  left: 16px;
  top: 30px;

  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #2a3558;
`;
