import React, { createContext, useContext, useEffect, useState } from "react";
import { IItem } from "@/components/items/item/Item";
import BidForm from "@/components/bidForm/BidForm";
import { useDispatch, useSelector } from "react-redux";
import { getBidSelector } from "@/stores/bid/selectors";
import { bid, reset } from "@/stores/bid/actions";

interface IBidContext {
  selector?: any,
  item?: IItem,
  open: boolean;
  onOpen: (item: IItem) => void;
  onClose: () => void;
  onBid: (item: IItem | undefined, bidPrice: number) => void;
}

const defaultValue: IBidContext = {
  open: false,
  onOpen: () => undefined,
  onClose: () => undefined,
  onBid: () => undefined
};

const BidContext = createContext<IBidContext>(defaultValue);

const BidProvider: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector(getBidSelector);

  const [open, setOpen] = useState(
    defaultValue.open
  );
  const [item, setItem] = useState<IItem>();

  const onOpen = (item: IItem) => {
    setOpen(true);
    setItem(item);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onBid = (item: any, bidPrice: number) => {
    dispatch(bid({
      itemId: item.id,
      amount: bidPrice
    }));
  };

  useEffect(() => {
    if (!open) {
      dispatch(reset());
    }
  }, [open]);

  return (
    <BidContext.Provider value={{ selector, item, open, onOpen, onClose, onBid }}>
      {children}
      <BidForm />
    </BidContext.Provider>
  );
};

export const useBid = () => useContext(BidContext);

export default BidProvider;