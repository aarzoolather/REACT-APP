interface Props {
  children: string;
  onClick: () => void;
  color: string;
}
export const Button = ({ children, onClick, color }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
