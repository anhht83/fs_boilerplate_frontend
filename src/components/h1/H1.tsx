export interface IH1 {
  children: any;
}

const H1: React.FC<IH1> = ({ children }) => {
  return <h1 className="my-6 text-2xl font-semibold leading-6 text-gray-900">{children}</h1>
};

export default H1;