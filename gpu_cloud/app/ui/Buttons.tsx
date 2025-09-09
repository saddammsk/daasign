// Button.tsx
import React from "react";


interface ButtonProps {
     children: React.ReactNode;
     type?: "button" | "submit" | "reset";
     className?: string;
}

const Buttons: React.FC<ButtonProps> = ({
     children,
     type = "button",
     className = "",
}) => {
     return (
          <button
               type={type}
               className={`text-sm cursor-pointer font-medium leading-5 text-white w-full rounded-lg shadow-3xl h-9 flex items-center justify-center bg-blue-1000 ${className}`}
          >
               {children}
          </button>
     );
};

export default Buttons;
