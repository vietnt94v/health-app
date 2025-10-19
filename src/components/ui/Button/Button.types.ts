export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "radient";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}
