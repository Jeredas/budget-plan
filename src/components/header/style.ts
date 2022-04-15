import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1340px;
  width: 100%;
  margin: 50px 50px 16px 50px;
`;

export const Title = styled.h1`
  width: 250px;
  height: 33px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  letter-spacing: -0.2px;
  color: #182033;
`;

export const SetupWrapper = styled.div`
  width: 100%;
  marign: 0 auto;
  display: grid;
  grid-template:
    "st st"
    "ss ac";
  justify-content: space-between;
`;

export const SetupTitle = styled.div`
  grid-area: st;
  width: 127px;
  height: 25px;
  left: 50px;
  top: 99px;

  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  color: #182033;
`;

export const SetupSubtitle = styled.div`
  grid-area: ss;
  width: 678px;
  height: 42px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */
  color: #99a4c2;
`;

export const AddChannel = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ac;
  width: 123px;
  height: 40px;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  color: #707ea7;
`;
