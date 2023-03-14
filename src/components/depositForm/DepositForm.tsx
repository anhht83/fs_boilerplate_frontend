import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import Button from "../button/Button";
import Router from "next/router";

export interface IDepositForm {
  onSubmit(values: object): void;
}

const DepositSchema = Yup.object().shape({
  amount: Yup.number().required("Required")
});

const DepositForm: React.FC<IDepositForm> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        amount: ""
      }}
      validationSchema={DepositSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid grid-cols-1 gap-4">
          <Input label="Amount" name="amount" />
          <div className="my-4 text-right">
            <Button type="button" onClick={() => {
              Router.push("/");
            }}>Cancel</Button> {" "}
            <Button type="submit" color="primary">Deposit</Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default DepositForm;