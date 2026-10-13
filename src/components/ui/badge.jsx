import * as React from "react";
import { cn } from "../../lib/utils";

export const Badge = ({ className, variant = "champagne", children, ...props }) => {
  const variantStyles = {
    champagne: "border-champagne/30 bg-champagne/10 text-champagne-light",
    gold: "border-champagne/30 bg-champagne/10 text-champagne-light",
    sapphire: "border-champagne/30 bg-navy-card/90 text-champagne-light",
    navy: "border-champagne/30 bg-navy-card text-champagne-light",
    outline: "border-champagne/30 text-champagne-light",
    ivory: "border-champagne/30 bg-ivory-soft text-navy font-semibold",
  }[variant] || "border-champagne/30 bg-champagne/10 text-champagne-light";

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1 text-[11px] font-cinzel font-medium tracking-widest2 uppercase transition-colors",
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
