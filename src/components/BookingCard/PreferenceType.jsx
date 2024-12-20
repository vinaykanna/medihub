import { twMerge } from "tailwind-merge";
function PreferenceType({ icon: Icon, label, id, checked, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="w-[16px] h-[16px]"
        type="radio"
        name="consultation_preference"
        id={id}
        checked={checked}
        onChange={() => onChange(label)}
      />
      <label
        htmlFor={id}
        className={twMerge(
          "flex text-[#BDBDBD] items-center gap-2 cursor-pointer font-nunito-bold",
          checked && "text-secondary-solid font-bold"
        )}
      >
        <div
          className={twMerge(
            "border-[1px] border-[#BDBDBD] border-solid p-[8px] rounded-lg",
            checked && "border-transparent bg-primary-solid"
          )}
        >
          <Icon fill={checked ? "#fff" : "#BDBDBD"} />
        </div>
        {label}
      </label>
    </div>
  );
}

export default PreferenceType;
