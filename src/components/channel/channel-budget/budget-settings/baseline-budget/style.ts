import NumberFormat from "react-number-format";
import styled from "styled-components";

export const IconTooltip = styled.div<{ isShown: boolean }>(
  (props: { isShown: boolean }) => ({
    position: "absolute",
    display: `${props.isShown ? "flex" : "none"}`,
    left: "75%",
    top: "-40px",
    width: "300px",
    background: "linear-gradient(360deg, #fafafc 0%, #ffffff 100%)",
    border: "1px solid rgba(178, 187, 213, 0.5)",
    cursor: "pointer",
    margin: "20px",
    zIndex: "1000",
  })
);

export const InfoIcon = styled.div`
  position: absolute;
  left: 75%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  background: url(./icons/info-icon.png);
  cursor: pointer;
`;

export const BaselineBudgetWrapper = styled.div`
  dispaly: flex;
  width: 237px;
  margin: 0 55px 0 0;
  flex-direction: column;
`;

export const BaselineBudgetTitle = styled.div`
  position: relative;
  display: flex;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #2a3558;
`;

export const BudgetInput = styled(NumberFormat)`
  display: flex;
  width: 237px;
  align-items: left;
  height: 40px;
  cursor: pointer;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  padding: 0 10px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */
`;
