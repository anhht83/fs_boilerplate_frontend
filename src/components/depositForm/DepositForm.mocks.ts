import { IDepositForm } from './DepositForm';

const base: IDepositForm = {
  onSubmit: () => { console.log('onSubmit') }
};

export const mockDepositFormProps = {
  base,
};