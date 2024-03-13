const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <button className="bg-blue-400 mx-2 p-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
