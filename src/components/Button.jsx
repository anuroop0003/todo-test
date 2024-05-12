export default function Button({ label, className, type, ...rest }) {
  return (
    <button
      {...rest}
      type={type}
      className={`${className} mt-5 w-full bg-select_blue text-white focus:ring-[1px] focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5`}
    >
      {label}
    </button>
  );
}
