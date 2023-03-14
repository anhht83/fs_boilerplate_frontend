import { IBidForm } from './BidForm';

const base: IBidForm = {
  onSubmit: () => { console.log('onSubmit') }
};

export const mockBidFormProps = {
  base,
};