import { SmallCloseIcon } from "@chakra-ui/icons";

export default function NormalInput({
  handleClick,
  placeholder,
  className,
  isInvalid,
  ...rest
}) {
  return (
    <div className={className}>
      <input
        {...rest}
        isInvalid={isInvalid}
        placeholder={placeholder}
        type="text"
        class="py-3 h-10 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />

      <div className="absolute top-0 h-10 w-10 z-10 right-0 flex justify-center items-center">
        <button
          onClick={handleClick}
          type="button"
          class="text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          <SmallCloseIcon />
        </button>
      </div>
    </div>
  );
}
