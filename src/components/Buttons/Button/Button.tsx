import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import Typography from "../../Typography/Typography";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  color = "primary",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles[color], className)}
    >
      {
        <Typography className={styles.text} variant="span">
          {children}
        </Typography>
      }
    </button>
  );
};

export default Button;
