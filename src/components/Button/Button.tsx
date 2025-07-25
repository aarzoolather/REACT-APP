import styles from ".Button.module.css";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
export const Button = ({ children, onClick, color }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
