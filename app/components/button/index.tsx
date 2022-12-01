type CustomButtonProps = {
  type?: string;
  btnName?: string;
  classStyles?: any;
  handleClick?: any;
};

const Button: React.FC<CustomButtonProps> = ({
  btnName,
  classStyles,
  handleClick,
}: CustomButtonProps) => (
  <button
    type="button"
    className={`gradient-btn-bg text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white transform transition duration-500 hover:scale-105 ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
