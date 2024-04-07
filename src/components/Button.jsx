const Button = (props) => {
  return (
    <button
      type="button"
      className={` rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${props.styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
