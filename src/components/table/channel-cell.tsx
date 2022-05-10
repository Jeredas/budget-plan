import { ReactElement, useState } from "react";
import { setChannelBreakdown } from "reducers/channel-list.slice";
import { IBreakdown } from "shared/interfaces";
import { useAppDispatch } from "store/hooks";
import {
  ChanneCelllWrapper,
  CellTitle,
  Amount,
  EditIcon,
  Tooltip,
  SaveIcon,
  CancelIcon,
} from "./style";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          {` `}
          {new Date().getFullYear().toString().substring(2)}
        </CellTitle>
        {props.allocation === "Manual" && (
          <Amount
            onChange={handleChange}
            style={{
              padding: isEdit ? "14px 5px" : "0",
              border: isEdit ? "1px solid rgba(178, 187, 213, 0.5)" : "none",
              transform: `translate(${isEdit ? "-23px, -5px" : "0"})`,
            }}
            prefix={isEdit ? ' $': '$'}
            isNumericString={true}
            disabled={!isEdit}
            value={value}
            thousandSeparator={true}
          />
        )}
        {props.allocation === "Equal" && (
          <Amount
            style={{
              padding: isEdit ? "14px 5px" : "0",
              border: isEdit ? "1px solid rgba(178, 187, 213, 0.5)" : "none",
              transform: `translate(${isEdit ? "-23px, -5px" : "0"})`,
            }}
            prefix={"$"}
            isNumericString={true}
            disabled={!isEdit}
            value={props.amount / 12}
            thousandSeparator={true}
          />
        )}
        <EditIcon isShown={showEditIcon} onClick={handleClick} />
        <Tooltip
          isShown={showTooltip}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {`Can't edit budget with "Equal" allocation, 
		you can change allocation in channel settings on Tab 1`}
        </Tooltip>
        {isEdit && (
          <>
            <SaveIcon onClick={handleEdit} />
            <CancelIcon onClick={() => setIsEdit(false)} />
          </>
        )}
      </ChanneCelllWrapper>
    </>
  );
}
