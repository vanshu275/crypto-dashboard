const Button = ({
  text,
  variant = "primary",
  size = "md",
  full = false,
  width
}) => {

  const base =
    "rounded-lg font-medium transition-all";

  const variants = {
    primary: "bg-[#5f02d9] text-white",
    outline: "bg-[#fff]  text-[#5f02d9]",
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-lg",
  };

const buttonEffect = (e) => {
  const button = e.target;
  button.style.scale = "0.95";
  setTimeout(() => {
    button.style.scale = "1";
  }, 100);}

  return (
    <button
    
      onClick={(e) => {
        buttonEffect(e);
      }}
      
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${width && `w-[${width}]`}
        cursor-pointer
      `}
    >
      {text}
    </button>
  );
};

export default Button;