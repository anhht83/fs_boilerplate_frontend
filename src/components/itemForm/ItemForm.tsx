import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input/Input";
import Button from "../button/Button";
import Router from 'next/router'

export interface IItemForm {
  onSubmit(values: object): void;
}

const ItemSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  startPrice: Yup.string().required("Required"),
  windowTime: Yup.string().required("Required")
});

const ItemForm: React.FC<IItemForm> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        startPrice: "",
        windowTime: ""
      }}
      validationSchema={ItemSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="grid grid-cols-1 gap-4">
          <Input label="Name" name="name" />
          <Input label="Start Price" name="startPrice" />
          <Input label="Time Window" name="windowTime" type="datetime-local" />
          <div className="my-4 text-right">
            <Button type="button" onClick={() => {
              Router.push("/");
            }}>Cancel</Button> {" "}
            <Button type="submit" color="primary">Create</Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ItemForm;