import { NextPageWithLayout } from "@/pages/page";
import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";
import ItemForm from "@/components/itemForm/ItemForm";
import H1 from "@/components/h1/H1";
import { useDispatch, useSelector } from "react-redux";
import { getItemSelector } from "@/stores/item/selectors";
import { createItem } from "@/stores/item/actions";
import Loading from "@/components/loading/Loading";
import Alert from "@/components/alert/Alert";

const CreateItem: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getItemSelector);
  return (
    <section className="my-6">
      {selector.loading && <Loading />}
      <H1>
        Create Item
      </H1>
      {selector.error && <Alert message={selector.error} className="mb-3" />}
      {selector.data && <Alert message={"New item is created successful"} type="info" className="mb-3" />}
      <ItemForm onSubmit={(values: any) => {
        dispatch(createItem(values));
      }} />
    </section>
  );
};

CreateItem.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};

export default CreateItem;
