import * as React from "react";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <div
      className="flex items-center h-10 rounded-full overflow-hidden border
      border-input bg-background text-sm ring-offset-background
      has-[input:focus-visible]:outline-none has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-ring
      has-[input:focus-visible]:ring-offset-2 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50
      ">
      <span className="bg-primary w-8 h-8 rounded-full flex justify-center items-center ms-1">
        <SearchIcon className="text-white w-5" />
      </span>
      <input
        type="search"
        className={cn(
          "px-3 py-2 outline-none w-64 focus:w-96 transition-all duration-500 ease-out bg-background placeholder:text-muted-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Search.displayName = "Search";

export { Search };
