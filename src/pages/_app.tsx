import type { AppProps } from "next/app";
import "./globals.css";
import { NextPageWithLayout } from "@/pages/page";
import AuthProvider from "@/hooks/AuthProvider";
import { Provider } from "react-redux";
import store from "../stores";
import SocketProvider from "@/hooks/SocketProvider";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <AuthProvider>
        <SocketProvider>
          {getLayout(<Component {...pageProps} />)}
        </SocketProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;