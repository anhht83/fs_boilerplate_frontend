import { IRegisterForm } from './RegisterForm';

const base: IRegisterForm = {
  onSubmit: () => { console.log('onSubmit') }
};

export const mockRegisterFormProps = {
  base,
};