import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import Button from "../button/Button";

export interface ILoginForm {
  onSubmit(values: object): void
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required")
});

const LoginForm: React.FC<ILoginForm> = ({ onSubmit }) => {

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid grid-cols-1 gap-4">
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <div className="my-4">
            <Button type="submit" size="w-full" color="primary">Login</Button>
          </div>
        </div>
        <div className="text-center"><Link href="register">Register</Link></div>
      </Form>
    </Formik>
  );
};

export default LoginForm;