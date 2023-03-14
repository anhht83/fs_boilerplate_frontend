import React from "react";
import { InformationCircleIcon, ExclamationTriangleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export interface IAlert {
  type?: "error" | "warning" | "info";
  message: any;
  className?: string
}

const Alert: React.FC<IAlert> = ({ type = "error", message = "", className = "" }) => {
  const alert = {
    error: "bg-red-200 border-red-300",
    warning: "bg-orange-200 border-orange-300",
    info: "bg-sky-200 border-sky-300"
  };
  const alertIcon = {
    error: "text-red-600 ",
    warning: "text-orange-600",
    info: "text-sky-600"
  };
  const alertDescription = {
    error: "text-red-600",
    warning: "text-orange-600",
    info: "text-sky-600"
  };
  const icon = {
    error: XCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon
  };
  const Icon = icon[type];
  return (
    <div className={`alert flex flex-row items-center p-3 rounded border-b-2 ${alert[type]} ${className}`}>
      <Icon className={`alert-icon h-8 w-8 ${alertIcon[type]}`}
            aria-hidden="true" />
      <div className="alert-content ml-4">
        <div className={`alert-description text-sm ${alertDescription[type]}`}>
          {!Array.isArray(message) ? message : (
            message.map((meg, idx) => {
              return Object.keys(meg).map(key => {
                console.log(`${idx}_${key}`);
                return <div key={`${idx}_${key}`}>{meg[key]}</div>;
              });
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;