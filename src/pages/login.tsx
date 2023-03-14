import { NextPageWithLayout } from "@/pages/page";
import FullLayout from "@/components/layouts/full/FullLayout";
import LoginForm from "@/components/loginForm/LoginForm";
import Loading from "@/components/loading/Loading";
import Alert from "@/components/alert/Alert";
import { useAuth } from "@/hooks/AuthProvider";

const Login: NextPageWithLayout = () => {
  const { login, selector } = useAuth();

  return (
    <>
      {selector.loading && <Loading />}
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login</h2>
      </div>
      {selector.error && <Alert message={selector.error} />}
      <LoginForm onSubmit={login} />
    </>
  );
};

Login.getLayout = (page) => {
  return (
    <FullLayout>
      {page}
    </FullLayout>
  );
}
;

export default Login;
