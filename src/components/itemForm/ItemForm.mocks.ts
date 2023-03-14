import { IItemForm } from './ItemForm';

const base: IItemForm = {
  onSubmit: () => { console.log('onSubmit') }
};

export const mockItemFormProps = {
  base,
};