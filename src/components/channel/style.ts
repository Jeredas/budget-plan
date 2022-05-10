import styled from "styled-components";

export const NameInput = styled.input`
  width: 160px;
  height: 40px;
  left: 106px;
  top: 622px;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  padding-left: 8px;
`;

export const ChannelExpanded = styled.div`
  width: 1340px;
  height: 581px;
  margin: 0 auto;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 0px 0px 4px 4px;
`;

export const ChannelWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 1340px;
  height: 52px;
  margin: 0 auto;
  background: #f6f7fb;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 4px 4px 0px 0px;
  cursor: pointer;
`;

export const ArrowIcon = styled.div((props: { isOpened: boolean }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `10px`,
  height: `6.25px`,
  margin: "auto 15px",
  transition: "0.5s",
  backgroundImage: "url(./icons/Arrow_down.png)",
  transform: `rotate(${props.isOpened ? "180deg" : "0"})`,
}));

export const ChannelLogo = styled.div((props: any) => ({
  backgroundImage: `url(./icons/channel-logo.png)`,
  backgroundSize: "cover",
  width: "36px",
  height: "36px",
  margin: "auto 12px auto 15px",
}));

export const ChannelName = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  height: 21px;
  left: 153px;
  top: 307px;
  margin: auto 0;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */
  color: #222a41;
`;
