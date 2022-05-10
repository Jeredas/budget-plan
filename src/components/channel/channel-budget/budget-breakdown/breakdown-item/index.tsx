import { ReactElement, useEffect, useState } from "react";
import { setChannelBreakdown } from "reducers/channel-list.slice";
import { setBreakdown } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { ItemWrapper, Month, ItemValue, Currency } from "./style";

export default function BreakdownItem(props: {
  allocation: string;
  month: string;
  amount?: number;
  onChange: any;
  quarterName?: string;
}): ReactElement {
  const [value, setValue] = useState(props.amount);
  const { allocation, id } = useAppSelector((state) => state.channel);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.split(",").join(""));
    const newBreakdown = { name: props.month, value: newValue };
    setValue(newValue);
    dispatch(setBreakdown(newBreakdown));
    dispatch(setChannelBreakdown({ id, breakdown: newBreakdown }));
    props.onChange(newBreakdown);
  };

  useEffect(() => {
    setValue(props.amount);
  }, [props.amount]);

  return (
    <ItemWrapper>
      <Month>
        {props.quarterName || props.month} {`${new Date().getFullYear().toString().substring(2)}`}
      </Month>
      {allocation === "Manual" && (
        <ItemValue
          allowLeadingZeros={false}
          isNumericString={true}
          allowNegative={false}
          thousandSeparator={true}
          disabled={props.allocation === "Equal"}
          onChange={handleChange}
          value={value}
        />
      )}
      {allocation === "Equal" && (
        <ItemValue
          allowLeadingZeros={false}
          disabled={props.allocation === "Equal"}
          onChange={handleChange}
          value={value}
          isNumericString={true}
          allowNegative={false}
          thousandSeparator={true}
        />
      )}
      <Currency>$</Currency>
    </ItemWrapper>
  );
}
