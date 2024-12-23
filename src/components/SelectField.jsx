import { twJoin, twMerge } from "tailwind-merge";
import Chevron from "@assets/icons/Chevron";

function SelectField({
  children,
  className,
  selectClassName,
  label,
  defaultOptionLabel = "Select",
  onChange,
  name,
  ...rest
}) {
  return (
    <div className={twMerge("relative", className)}>
      {label && (
        <label
          htmlFor={rest.id || rest.name}
          className="text-primary-solid text-base mb-2 block ml-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          name={name}
          onChange={onChange}
          className={twMerge(
            "px-4 py-2 border-[1px] border-primary-solid border-solid",
            "rounded-full bg-white outline-none text-[#BDBDBD]",
            "placeholder:text-secondary-solid cursor-pointer appearance-none",
            selectClassName
          )}
        >
          <option value="">{defaultOptionLabel}</option>
          {children}
        </select>
        <Chevron
          fill="#E77E3A"
          className={twJoin(
            "rotate-90 absolute w-3 h-3 right-5",
            "top-1/2 -translate-y-1/2 pointer-events-none"
          )}
        />
      </div>
    </div>
  );
}

export default SelectField;
