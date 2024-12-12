import { twMerge } from "tailwind-merge";

type Props = {
  type?: string;
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
};
function TextField(props: Props) {
  const {
    type = "text",
    placeholder = "",
    startIcon,
    endIcon,
    fullWidth = true,
  } = props;
  const hasIcon = startIcon || endIcon;

  return (
    <div className={twMerge("relative", fullWidth && "w-full")}>
      <input
        className={twMerge(
          "px-4 py-2 border-[1px] border-primary-solid border-solid rounded-full bg-white outline-none placeholder:text-secondary-solid",
          startIcon && "pl-10",
          endIcon && "pr-10",
          fullWidth && "w-full"
        )}
        type={type}
        placeholder={placeholder}
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
