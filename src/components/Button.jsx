import { twMerge } from "tailwind-merge";

function Button({ children, className = "", ...rest }) {
  return (
    <button
      type="submit"
      className={twMerge(
        "py-2 px-8",
        "font-medium text-white border-none rounded-full",
        "bg-gradient-to-tr from-primary-solid to-secondary-solid",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
