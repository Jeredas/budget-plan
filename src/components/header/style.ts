import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1340px;
  width: 100%;
  margin: 33px 50px 16px 50px;
`;

export const Title = styled.h1`
  width: 250px;
  height: 33px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 800;
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
  margin-bottom: 8px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 800;
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
  width: 127px;
  height: 44px;
  background-image: url(./icons/add_icon.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 3px;
  font-family: "Avenir Next";
  font-weight:800;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 133% */
  color: #707ea7;
`;