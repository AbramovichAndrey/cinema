import React from "react";
import styles from "./Typography.module.css";
import clsx from "clsx";

interface ITypographyProps {
  className?: string;
  children: React.ReactNode;
  variant?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "secondary";
}

const Typography: React.FC<ITypographyProps> = ({
  className,
  children,
  variant = "p",
  color = "primary",
}) => {
  const Tag = variant;
  return (
    <Tag className={clsx(styles[color], styles[variant], className)}>
      {children}
    </Tag>
  );
};

export default Typography;
