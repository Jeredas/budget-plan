import styled from "styled-components";

export const IconTooltip = styled.div<{ isShown: boolean }>(
  (props: { isShown: boolean }) => ({
    position: "absolute",
    display: `${props.isShown ? "flex" : "none"}`,
    left: "55%",
    top: "-85px",
    width: "350px",
    background: "linear-gradient(360deg, #fafafc 0%, #ffffff 100%)",
    border: "1px solid rgba(178, 187, 213, 0.5)",
    cursor: "pointer",
    margin: "20px",
    zIndex: "1000",
  })
);

export const InfoIcon = styled.div`
  position: absolute;
  left: 65%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  background: url(./icons/info-icon.png);
  cursor: pointer;
`;

export const AllocationSwitch = styled.div`
  display: flex;
  width: 184px;
`;

export const AlloacationOption = styled.div`
  display: flex;
  width: 89px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  text-align: center;
  color: #2a3558;
  &:hover {
    background: #f6f7fb;
  }
`;

export const BudgetAllocationWrapper = styled.div`
  dispaly: flex;
  width: 184px;
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
  color: #2f3b66;
`;
