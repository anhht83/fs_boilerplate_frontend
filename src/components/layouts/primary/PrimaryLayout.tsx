import Head from "next/head";
import styles from "./PrimaryLayout.module.css";
import Topbar from "@/components/layouts/topbar/Topbar";
import { useAuth } from "@/hooks/AuthProvider";
import Router from "next/router";
import { useEffect } from "react";

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const { authenticated } = useAuth();
  useEffect(() => {
    if (!authenticated) Router.push("/login");
  }, [authenticated]);
  return (
    <>
      <Head>
        <title>FS</title>
      </Head>
      <div className={styles.main}>
        <Topbar />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          {children}
        </div>
      </div>
    </>
  );
};

export default PrimaryLayout;