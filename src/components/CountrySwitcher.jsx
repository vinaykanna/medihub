import Chevron from "@assets/icons/Chevron";
import { countryCodes } from "../constants/countryCodes.constants";
import { twJoin, twMerge } from "tailwind-merge";
import { useState } from "react";

function CountrySwitcher({ selected, onChange }) {
  const [open, setOpen] = useState(false);

  const activeItem = countryCodes.find(
    (item) => item.phone === (selected || "91")
  );

  return (
    <div className="relative select-none">
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          className="shadow-[0px_4px_10px_0px_#E77E3A33]"
          srcSet={`https://flagcdn.com/w40/${activeItem.code.toLowerCase()}.png 2x`}
          src={`https://flagcdn.com/w20/${activeItem.code.toLowerCase()}.png`}
          alt=""
        />
        <Chevron fill="#E77E3A" className="rotate-90 w-[12px] h-[12px]" />
      </div>
      <div
        className={twMerge(
          "absolute top-8 left-0 bg-white min-w-60 w-full hidden",
          "rounded-xl max-h-60 overflow-y-auto shadow-[0px_4px_10px_0px_#E77E3A33]",
          open && "block"
        )}
      >
        {countryCodes.map((item) => {
          const isActive = item.phone === activeItem.phone;

          return (
            <div
              key={item.code}
              className={twJoin(
                "flex items-center gap-2 cursor-pointer group",
                "py-1 px-2 hover:bg-secondary-light",
                isActive && "bg-secondary-light"
              )}
              onClick={() => {
                setOpen(false);
                onChange(item.phone);
              }}
            >
              <img
                srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                className="w-5"
                alt=""
              />
              <p
                className={twMerge(
                  "whitespace-nowrap overflow-hidden text-ellipsis",
                  "text-[#656565] flex-1 text-base",
                  "group-hover:text-primary-solid",
                  isActive && "text-primary-solid"
                )}
              >
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountrySwitcher;
