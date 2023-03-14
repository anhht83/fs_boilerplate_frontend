import { NextPageWithLayout } from "@/pages/page";
import FullLayout from "@/components/layouts/full/FullLayout";
import RegisterForm from "@/components/registerForm/RegisterForm";
import { useAuth } from "@/hooks/AuthProvider";
import Loading from "@/components/loading/Loading";
import Alert from "@/components/alert/Alert";
import Router from "next/router";
import { useEffect } from "react";
import { reset } from "@/stores/auth/actions";
import { useDispatch } from "react-redux";

const Register: NextPageWithLayout = () => {
  const dispatch = useDispatch();

  const { register, selector } = useAuth();
  if (selector.data && selector.data.id) {
    Router.push("/login");
  }
  // reset auth redux when unmount
  useEffect(() => () => dispatch(reset()), []);

  return (
    <>
      {selector.loading && <Loading />}
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</h2>
      </div>
      {selector.error && <Alert message={selector.error} />}
      <RegisterForm onSubmit={register} />
    </>
  );
};

Register.getLayout = (page) => {
  return (
    <FullLayout>
      {page}
    </FullLayout>
  );
};

export default Register;
