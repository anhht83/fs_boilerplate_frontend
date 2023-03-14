export interface IButton {
  color?: 'default'|'primary'|'danger';
  children: any,
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  size?: string
}

const Button: React.FC<IButton> = ({ color='default' , size="", children, ...rest }) => {
  const bgColorVariants = {
    default: 'bg-whitetext-gray-900  hover:bg-gray-50 ',
    primary: 'bg-blue-600 hover:bg-blue-500 text-white ',
    danger: 'bg-red-600 hover:bg-red-500 text-white ',
    warning: 'bg-orange-600 hover:bg-orange-500 text-white ',
  }
  return (
    <button
      {...rest}
      className={`${bgColorVariants[color]} font-bold py-2 px-4 ${size} rounded shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0`}
    >
      {children}
    </button>
  );
};

export default Button;