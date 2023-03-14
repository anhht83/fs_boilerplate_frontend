import { NextPageWithLayout } from "@/pages/page";
import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";
import H1 from "@/components/h1/H1";
import DepositForm from "@/components/depositForm/DepositForm";
import { useDispatch, useSelector } from "react-redux";
import { getAddDepositSelector } from "@/stores/deposit/selectors";
import Loading from "@/components/loading/Loading";
import Alert from "@/components/alert/Alert";
import { addDeposit } from "@/stores/deposit/actions";

const Deposit: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getAddDepositSelector);
  return (
    <section className="my-6">
      {selector.loading && <Loading />}
      <H1>
        Deposit
      </H1>
      {selector.error && <Alert message={selector.error} className="mb-3" />}
      {selector.data && <Alert message={"Deposit is added"} type="info" className="mb-3" />}
      <DepositForm onSubmit={(values) => {
        dispatch(addDeposit(values));
      }} />
    </section>
  );
};

Deposit.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};

export default Deposit;
