import Button from "@/components/button/Button";
import { useBid } from "@/hooks/BidProvider";
import Countdown from "@/components/countdown/Countdown";
import React, { useState } from "react";
import moment from "moment-timezone";

export interface IItem {
  id: any;
  name: string;
  startPrice?: number;
  currentPrice: number;
  windowTime?: string;
  status: string;
  currentUserLastBidAt: any;
}

interface IItemProps {
  item: IItem;
}

const Item: React.FC<IItemProps> = ({ item }) => {
  const { onOpen } = useBid();
  const [completed, setCompleted] = useState(item.status === "Completed");
  const ActComponent = () => (
    <Countdown
      date={item.currentUserLastBidAt ? moment(item.currentUserLastBidAt).add(5, "seconds") : Date.now()}
      renderer={(propRender) => {
        if (propRender.completed || !item.currentUserLastBidAt)
          return <Button color="primary" onClick={() => onOpen(item)}>Bid</Button>;
        return <Button color="default">{propRender.seconds} s</Button>;
      }} />
  );
  return (
    <tr>
      <td className="border-b dark:border-slate-600 p-4 text-left">{item.name}</td>
      <td className="border-b dark:border-slate-600 p-4 text-center">{item.currentPrice}</td>
      <td className="border-b dark:border-slate-600 p-4 text-center">
        {completed && "Completed"}
        {!completed && (
          <Countdown
            date={item.windowTime}
            onComplete={() => setCompleted(true)}
          />
        )}
      </td>
      <td className="border-b dark:border-slate-600 p-4 text-center">
        {!completed && <ActComponent />}
      </td>
    </tr>
  );
};

export default Item;