import NumberFormat from "react-number-format";
import styled from "styled-components";

export const Tooltip = styled.div<{isShown:boolean}>((props: { isShown: boolean }) => ({
	position: "absolute",
	display: `${props.isShown ? "flex" : "none"}`,
	left: "70%",
	top: "10px",
	width: "250px",
	height: "70px",
	background: "linear-gradient(360deg, #fafafc 0%, #ffffff 100%)",
	border: "1px solid rgba(178, 187, 213, 0.5)",
	cursor: "pointer",
	margin: "20px",
	zIndex: "2000",
	fontFamily: "Avenir Next",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "14px",
	lineHeight: "20px",
  }));
  
  export const EditIcon = styled.div<{isShown:boolean}>((props: { isShown: boolean }) => ({
	position: "absolute",
	display: `${props.isShown ? "flex" : "none"}`,
	left: "55%",
	top: "75px",
	width: "13px",
	height: "13px",
	background: "url(./icons/edit_icon.png)",
	backgroundRepeat: "no-repeat",
	backgroundSize: "contain",
	cursor: "pointer",
	margin: "20px",
	zIndex: "1000",
  }));
  
  export const SaveIcon = styled.div`
	position: absolute;
	width: 20px;
	top: 92px;
	left: 80%;
	height: 20px;
	background: url(./icons/save_icon.png);
	background-size: contain;
	border-radius: 50%;
	z-index: 100;
  `;
  export const CancelIcon = styled.div`
	position: absolute;
	top: 92px;
	left: calc(76% + 25px);
	width: 20px;
	height: 20px;
	background: url(./icons/cancel_icon.png);
	background-size: contain;
	border-radius: 50%;
	z-index: 100;
  `;
  
  export const Amount = styled(NumberFormat)`
	background: none;
	width: 80px;
	height: 20px;
	font-family: "Avenir Next";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	/* identical to box height, or 143% */
	margin: 23px auto;
	color: #222a41;
	box-sizing: border-box;
	border-radius: 4px;
	border: none;
	text-align: center;
  `;
  export const CellTitle = styled.div`
	width: 70px;
	height: 16px;
	margin: 20px 0 33px 0;
	font-family: "Avenir Next";
	font-style: normal;
	font-weight: 900;
	font-size: 11px;
	line-height: 16px;
	/* identical to box height, or 145% */
  
	text-transform: uppercase;
  
	color: #97a4c8;
  `;
  
  export const ChanneCelllWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: space-between;
	width: 75px;
	box-sizing: border-box;
	height: 128px;
	flex-direction: column;
	cursor: pointer;
	margin: 0 11px 0 25px;
  `;
  
  export const Arrow = styled.div<{isMoved:boolean}>((props: { isMoved: boolean }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: `10px`,
	height: `6.25px`,
	margin: "auto 15px",
	transition: "0.5s",
	backgroundImage: "url(./icons/scroll_arrow.png)",
	transform: `rotate(${props.isMoved ? "180deg" : "0deg"})`,
	backgroundPosition: "center",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	top: "24px",
	right: "78px",
	position: "absolute",
  }));
  
  export const Subtitle = styled.div`
	position: absolute;
	height: 16px;
	left: 41px;
	top: 15px;
	font-family: "Avenir Next";
	font-style: normal;
	font-weight: 700;
	font-size: 11px;
	line-height: 16px;
	/* identical to box height, or 145% */
	text-transform: uppercase;
	color: #99a4c2;
  `;
  export const CellsWrapper = styled.div`
	display: flex;
	transform: translateX(0%);
	transition: 0.5s;
  `;
  
  export const TableGrid = styled.div`
	display: flex;
	overflow: hidden;
	width: 1000px;
	height: 100%;
  `;
  
  export const ScrollIndicator = styled.div`
	positon: relative;
	width: 80px;
	height: 128px;
	display: flex;
	background: linear-gradient(
	  90deg,
	  rgba(169, 181, 210, 0.0001) 0%,
	  rgba(112, 126, 167, 0.134454) 100%
	);
	mix-blend-mode: normal;
	opacity: 0.5;
  `;
  export const ChannelTitle = styled.div`
	position: relative;
	width: 223px;
	height: 128px;
	display: flex;
	align-items: flex-end;
	margin-left: 35px;
	margin-top: 5px;
  `;
  
  export const ChanneRowlWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: flex-start;
	width: 100%px;
	height: 128px;
	margin: 0 auto;
	justify-content: flex-start;

	cursor: pointer;
	
  `;
  
  export const ChannelLogo = styled.div`
	background-image: url(./icons/channel-logo.png);
	width: 36px;
	height: 36px;
	background-color: #FF9602;
	margin: 0 16px 14px 35px;`
  
  export const ChannelName = styled.div`
	display: flex;
	align-items: center;
	max-width: 300px;
	height: 21px;
	left: 153px;
	top: 307px;
	font-family: "Avenir Next";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	/* identical to box height, or 150% */
	color: #222a41;
	margin: 0 0 21px 0;
  `;
  