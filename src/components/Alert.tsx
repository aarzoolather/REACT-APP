import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
export const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
