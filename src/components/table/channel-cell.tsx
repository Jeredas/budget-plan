import { ReactElement, useState } from "react";
import NumberFormat from "react-number-format";
import { setChannelBreakdown } from "reducers/channel-list.slice";
import { IBreakdown } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import styled from "styled-components";

export default function ChannelCell(props: {
  id: string;
  breakdown: IBreakdown;
  amount: number;
  allocation: string;
  quarterName?: string;
}): ReactElement {
  const [showEditIcon, setShowEditIcon] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();
  const [breakdown, setBreakdown] = useState(props.breakdown);
  const [value, setValue] = useState(props.breakdown.value);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleClick = () => {
    if (props.allocation === "Equal") {
      setShowTooltip(true);
    } else {
      setShowEditIcon(false);
      setIsEdit(true);
    }
  };

  const handleEdit = () => {
    dispatch(setChannelBreakdown({ id: props.id, breakdown }));
    setIsEdit(false);
  };

  const handleChange = (e: any) => {
    const newValue = Number(e.target.value.slice(1).split(",").join(""));
    const newBreakdown: IBreakdown = {
      name: props.breakdown.name,
      value: newValue,
    };
    setBreakdown(newBreakdown);
    setValue(newValue);
  };

  return (
    <>
      <ChanneCelllWrapper
        onMouseEnter={() => !isEdit && setShowEditIcon(true)}
        onMouseLeave={() => {
          setShowTooltip(false);
          setShowEditIcon(false);
        }}
      >
        <CellTitle>
          {props.quarterName || props.breakdown.name}
          {new Date().getFullYear().toString().substr(-2)}
        </CellTitle>
        {props.allocation === "Manual" && (
          <Amount
            onChange={handleChange}
            style={{
              border: isEdit ? "1px solid rgba(178, 187, 213, 0.5)" : "none",
            }}
			prefix={'$'}
			isNumericString={true}
            disabled={!isEdit}
            value={value}
            thousandSeparator={true}
          />
        )}
        {props.allocation === "Equal" && (
          <Amount
            style={{
              border: isEdit ? "1px solid rgba(178, 187, 213, 0.5)" : "none",
            }}
			prefix={'$'}
			isNumericString={true}
            disabled={!isEdit}
            value={props.amount / 12}
            thousandSeparator={true}
          />
        )}
        {/* @ts-ignore */}
        <EditIcon isShown={showEditIcon} onClick={handleClick} />
        {/* @ts-ignore */}
        <Tooltip isShown={showTooltip}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {" "}
          {`Can't edit budget with "Equal" allocation, 
		you can change allocation in channel settings on Tab 1`}
        </Tooltip>
        {isEdit && (
          <>
            <SaveIcon onClick={handleEdit} />{" "}
            <CancelIcon onClick={() => setIsEdit(false)} />
          </>
        )}
      </ChanneCelllWrapper>
    </>
  );
}


const Currency = styled.div`
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

//@ts-ignore
const Tooltip = styled.div((props: any) => ({
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

//@ts-ignore
const EditIcon = styled.div((props: any) => ({
  position: "absolute",
  display: `${props.isShown ? "flex" : "none"}`,
  left: "65%",
  top: "70px",
  width: "13px",
  height: "13px",
  background: "url(./icons/edit_icon.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  cursor: "pointer",
  margin: "20px",
  zIndex: "1000",
}));

const SaveIcon = styled.div`
  position: absolute;
  width: 20px;
  top: 85px;
  left: 105%;
  height: 20px;
  background: url(./icons/save_icon.png);
  background-size: contain;
  border-radius: 50%;
  z-index: 100;
`;
const CancelIcon = styled.div`
  position: absolute;
  top: 85px;
  left: calc(100% + 25px);
  width: 20px;
  height: 20px;
  background: url(./icons/cancel_icon.png);
  background-size: contain;
  border-radius: 50%;
  z-index: 100;
`;

const Amount = styled(NumberFormat)`
  text-align: center;
  background: none;
  width: 80px;
  height: 20px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  margin: 22px auto;
  color: #222a41;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
`;
const CellTitle = styled.div`
  width: 80px;
  height: 16px;
  margin: 16px 0px 0 25px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  /* identical to box height, or 145% */

  text-transform: uppercase;

  color: #97a4c8;
`;

const ChanneCelllWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 80px;
  height: 128px;
  flex-direction: column;
  cursor: pointer;
  margin: 0 32px 0 0;
`;