import { useField } from "formik";

export interface IInput {
  label?: string,
  type?: string,
  placeholder?: string,
  name: string,
}

const Input: React.FC<IInput> = ({ label, type = "text", placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  return (
    <label className="block">
      {label && <span className="block text-sm font-medium text-slate-700">{label}</span>}
      <input {...field} type={type}
             className={`mt-1 block w-full rounded ${isError ? "border-red-500 text-red-500" : ""}`}
             placeholder={placeholder} />
      {isError ? (
        <span className="text-red-500 text-sm">{meta.error}</span>
      ) : null}
    </label>
  );
};

export default Input;