import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

function Tabs({ tabItems, active, onClick }) {
  const activeIndex = tabItems?.findIndex((item) => item?.id === active);

  return (
    <div className="grid grid-cols-3 justify-between relative items-start">
      {tabItems?.map((tabItem, index) => {
        const isActive = index <= activeIndex;
        return (
          <React.Fragment key={index}>
            <div
              className="col-span-1 relative"
              onClick={() => onClick(tabItem)}
            >
              <div
                className={twJoin(
                  "w-[42px] h-[42px] rounded-full p-[3px] mx-auto z-10 relative",
                  "bg-[#BDBDBD] flex items-center justify-center cursor-pointer",
                  isActive &&
                    "bg-gradient-to-tr from-primary-solid to-secondary-solid"
                )}
              >
                <div className="bg-white w-full h-full rounded-full p-[10px]">
                  <div
                    className={twMerge(
                      "w-full h-full rounded-full bg-[#BDBDBD]",
                      isActive &&
                        "bg-gradient-to-tr from-primary-solid to-secondary-solid"
                    )}
                  />
                </div>
              </div>
              <h4
                className={twMerge(
                  "text-center text-[#BDBDBD] text-xl font-bold font-nunito-bold mt-2",
                  isActive && "text-secondary-solid"
                )}
              >
                {tabItem?.title}
              </h4>
              {index !== 0 && (
                <hr
                  className={twJoin(
                    "border-primary-solid border-dashed border-[1px] border-spacing-28",
                    "top-[21px] absolute -left-1/2 right-1/2"
                  )}
                />
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Tabs;
