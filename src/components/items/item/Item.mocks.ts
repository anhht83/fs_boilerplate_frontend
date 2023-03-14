import { IItem } from './Item';

const base: any= {
  id: 1,
  name: 'name',
  startPrice: 100,
  currentPrice: 100,
  status: "Completed",
  windowTime: 'date',
  currentUserLastBidAt: '',
};

export const mockItemProps = {
  base,
};