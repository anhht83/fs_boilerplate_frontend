import { useEffect } from "react";
import Router from "next/router";
import { useAuth } from "@/hooks/AuthProvider";

export interface IFullLayout {
  children: any;
}

const FullLayout: React.FC<IFullLayout> = ({ children }) => {
  const { authenticated } = useAuth();
  useEffect(() => {
    if (authenticated) Router.push("/");
  }, [authenticated]);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {children}
      </div>
    </div>
  );
};

export default FullLayout;