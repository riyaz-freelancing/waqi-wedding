import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default: "bg-champagne hover:bg-champagne-light text-navy-deep font-semibold shadow-sm hover:shadow-champagne-subtle",
  primary: "bg-champagne hover:bg-champagne-light text-navy-deep font-semibold shadow-sm hover:shadow-champagne-subtle",
  secondary: "bg-navy-subtle hover:bg-navy-card text-ivory border border-champagne/30 hover:border-champagne/60",
  outline: "border border-champagne/40 bg-navy-card/60 hover:bg-navy-subtle text-champagne-light hover:text-ivory hover:border-champagne backdrop-blur-md",
  ghost: "hover:bg-navy-subtle/80 text-champagne-muted hover:text-ivory",
  danger: "bg-rose-900/80 hover:bg-rose-800 text-white border border-rose-700/50",
};

export const Button = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
  const sizeClasses = {
    default: "h-11 px-6 py-2 text-xs",
    sm: "h-9 px-4 py-1.5 text-xs",
    lg: "h-12 px-7 py-2.5 text-sm",
    icon: "h-10 w-10 p-2",
  }[size];

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full tracking-widest1 uppercase font-serif font-semibold text-xs sm:text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
        buttonVariants[variant],
        sizeClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
