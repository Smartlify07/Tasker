const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-5 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
