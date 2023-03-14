import { ILoginForm } from './LoginForm';

const base: ILoginForm = {
  onSubmit: () => { console.log('onSubmit') }
};

export const mockLoginFormProps = {
  base,
};