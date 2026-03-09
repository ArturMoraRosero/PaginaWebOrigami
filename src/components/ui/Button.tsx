import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-agrandir font-bold tracking-wider uppercase transition-all duration-300",
          "hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-accent-green text-white shadow-lg shadow-accent-green/20 hover:bg-secondary-green hover:shadow-accent-green/40": variant === "primary",
            "bg-primary-blue text-white shadow-lg shadow-primary-blue/20 hover:bg-secondary-blue hover:shadow-primary-blue/40": variant === "secondary",
            "border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white": variant === "outline",
            "bg-transparent text-primary-blue hover:bg-soft-bg": variant === "ghost",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
