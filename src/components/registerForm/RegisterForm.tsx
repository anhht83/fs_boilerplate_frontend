import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import Button from "../button/Button";

export interface IRegisterForm {
  onSubmit(values: object): void;
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6)
    .required("Required")
});

const RegisterForm: React.FC<IRegisterForm> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid grid-cols-1 gap-4">
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <div className="my-4">
            <Button type="submit" size="w-full" color="primary">Register</Button>
          </div>
        </div>
        <div className="text-center"><Link href="login">Login</Link></div>
      </Form>
    </Formik>
  );
};

export default RegisterForm;