import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "icon"; 
  children: ReactNode; 
}
