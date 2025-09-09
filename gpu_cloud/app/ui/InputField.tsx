import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
     label?: string;
}

const InputField: React.FC<InputFieldProps> = ({
     label,
     type = "text",
     placeholder,
     value,
     onChange,
     name,
     defaultValue,
     ...rest
}) => {
     return (
          <div className="mb-4">
               {label && (
                    <label
                         htmlFor={name}
                         className="text-sm font-medium dark:text-gray-1400 leading-[14px] text-black-1000 block mb-2"
                    >
                         {label}
                    </label>
               )}

               <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`text-sm font-normal leading-5 dark:bg-white/[0.05] dark:border-white/[15%] dark:placeholder:text-gray-1500 dark:text-gray-1400 placeholder:text-gray-1200 h-9 rounded-lg border border-gray-1100 shadow-3xl w-full focus:ring-0 px-3 text-black-1000
    ${value ? "bg-white" : "bg-transparent"}`}
               />

          </div>
     );
};

export default InputField;
