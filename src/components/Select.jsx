export default function Select({ onChange, className, options }) {
  return (
    <select
      onChange={onChange}
      className={` ${className} cursor-pointer bg-select_blue w-24 rounded-sm text-white focus:outline-none h-7 text-xs px-1.5`}
    >
      {options?.map((option) => (
        <option
          key={option.label}
          className="text-content_color bg-white"
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
