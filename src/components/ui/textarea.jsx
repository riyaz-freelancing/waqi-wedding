import * as React from "react";
import { cn } from "../../lib/utils";

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[90px] w-full rounded-xl border border-champagne/30 bg-navy-subtle/80 px-4 py-2.5 text-sm sm:text-base text-ivory placeholder:text-champagne-muted/60 font-serif transition-all duration-200 focus-visible:outline-none focus-visible:border-champagne focus-visible:ring-1 focus-visible:ring-champagne disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
