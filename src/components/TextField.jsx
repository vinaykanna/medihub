import { twMerge } from "tailwind-merge";

function TextField(props) {
  const {
    type = "text",
    placeholder = "",
    startIcon,
    endIcon,
    fullWidth = true,
    className = "",
    inputClassName = "",
    label,
    ...rest
  } = props;
  const hasIcon = startIcon || endIcon;

  return (
    <div className={twMerge("relative", className, fullWidth && "w-full")}>
      {label && (
        <label
          htmlFor={rest.id || rest.name}
          className="text-primary-solid text-base mb-2 block ml-2"
        >
          {label}
        </label>
      )}
      <input
        className={twMerge(
          "px-4 py-2 border-[1px] border-primary-solid border-solid rounded-full bg-white outline-none placeholder:text-secondary-solid",
          startIcon && "pl-10",
          endIcon && "pr-10",
          fullWidth && "w-full",
          inputClassName
        )}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {hasIcon && (
        <span
          className={twMerge(
            "absolute top-1/2 -translate-y-1/2",
            startIcon ? "left-3" : "right-3"
          )}
        >
          {startIcon && startIcon}
          {endIcon && endIcon}
        </span>
      )}
    </div>
  );
}

export default TextField;
