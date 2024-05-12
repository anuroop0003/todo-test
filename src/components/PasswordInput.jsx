import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function PasswordInput({
  placeholder,
  className,
  isInvalid,
  ...rest
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className={className}>
      <input
        {...rest}
        isInvalid={isInvalid}
        placeholder={placeholder}
        type={show ? "text" : "password"}
        class="py-3 h-10 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />

      <div className="absolute z-10 top-0 h-10 w-10 right-0 flex justify-center items-center">
        <button
          onClick={handleClick}
          type="button"
          class="text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          {show ? <ViewIcon /> : <ViewOffIcon />}
        </button>
      </div>
    </div>
  );
}
