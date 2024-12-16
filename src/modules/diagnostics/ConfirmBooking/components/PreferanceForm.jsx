import React from 'react'

function PreferanceForm() {
  return <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10">
  <div
    className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-5 pt-[30px] pb-10 rounded-[20px] bg-white border border-[#e77e3a]"
    style={{ boxShadow: "0px 4px 20px 0 rgba(231,126,58,0.2)" }}
  >
    <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-10">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[404px] gap-0.5">
        <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-0.5">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#7baed5]">
              Preferred Visit:
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-[30px]">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 pr-5">
            <p className="flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-left capitalize text-[#e77e3a]">
              Select Preferences:
            </p>
          </div>
         

         


        </div>
      </div>


      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-[30px]">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 gap-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[360px] h-11 relative overflow-hidden gap-2.5 py-2.5 rounded-[40px] bg-white border border-[#e77e3a]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[5px] py-px">
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.669473 1.13041C0.615753 1.18399 0.573131 1.24765 0.54405 1.31773C0.514969 1.38782 0.5 1.46295 0.5 1.53882C0.5 1.6147 0.514969 1.68983 0.54405 1.75991C0.573131 1.83 0.615753 1.89365 0.669473 1.94724L7.59174 8.8695C7.64532 8.92322 7.70898 8.96584 7.77906 8.99492C7.84914 9.024 7.92427 9.03897 8.00015 9.03897C8.07603 9.03897 8.15116 9.024 8.22124 8.99492C8.29132 8.96584 8.35498 8.92322 8.40857 8.8695L15.3308 1.94724C15.4391 1.83892 15.5 1.69201 15.5 1.53882C15.5 1.38564 15.4391 1.23873 15.3308 1.13041C15.2225 1.02209 15.0756 0.96124 14.9224 0.96124C14.7692 0.96124 14.6223 1.02209 14.514 1.13041L8.00015 7.64541L1.4863 1.13041C1.43272 1.07669 1.36906 1.03407 1.29898 1.00499C1.22889 0.975906 1.15376 0.960938 1.07789 0.960938C1.00201 0.960938 0.926879 0.975906 0.856797 1.00499C0.786715 1.03407 0.723058 1.07669 0.669473 1.13041Z"
                    fill="#E77E3A"
                  />
                </svg>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[292px] text-lg text-left text-[#bdbdbd]">
                Select Preferred Location
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[360px] h-11 relative overflow-hidden gap-2.5 py-2.5 rounded-[40px] bg-white border border-[#e77e3a]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[5px] py-px">
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.669473 1.13041C0.615753 1.18399 0.573131 1.24765 0.54405 1.31773C0.514969 1.38782 0.5 1.46295 0.5 1.53882C0.5 1.6147 0.514969 1.68983 0.54405 1.75991C0.573131 1.83 0.615753 1.89365 0.669473 1.94724L7.59174 8.8695C7.64532 8.92322 7.70898 8.96584 7.77906 8.99492C7.84914 9.024 7.92427 9.03897 8.00015 9.03897C8.07603 9.03897 8.15116 9.024 8.22124 8.99492C8.29132 8.96584 8.35498 8.92322 8.40857 8.8695L15.3308 1.94724C15.4391 1.83892 15.5 1.69201 15.5 1.53882C15.5 1.38564 15.4391 1.23873 15.3308 1.13041C15.2225 1.02209 15.0756 0.96124 14.9224 0.96124C14.7692 0.96124 14.6223 1.02209 14.514 1.13041L8.00015 7.64541L1.4863 1.13041C1.43272 1.07669 1.36906 1.03407 1.29898 1.00499C1.22889 0.975906 1.15376 0.960938 1.07789 0.960938C1.00201 0.960938 0.926879 0.975906 0.856797 1.00499C0.786715 1.03407 0.723058 1.07669 0.669473 1.13041Z"
                    fill="#E77E3A"
                  />
                </svg>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[292px] text-lg text-left text-[#bdbdbd]">
                Select Preferred Clinic{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[360px] h-11 relative overflow-hidden gap-2.5 py-2.5 rounded-[40px] bg-white border border-[#e77e3a]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[5px] py-px">
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.669473 1.13041C0.615753 1.18399 0.573131 1.24765 0.54405 1.31773C0.514969 1.38782 0.5 1.46295 0.5 1.53882C0.5 1.6147 0.514969 1.68983 0.54405 1.75991C0.573131 1.83 0.615753 1.89365 0.669473 1.94724L7.59174 8.8695C7.64532 8.92322 7.70898 8.96584 7.77906 8.99492C7.84914 9.024 7.92427 9.03897 8.00015 9.03897C8.07603 9.03897 8.15116 9.024 8.22124 8.99492C8.29132 8.96584 8.35498 8.92322 8.40857 8.8695L15.3308 1.94724C15.4391 1.83892 15.5 1.69201 15.5 1.53882C15.5 1.38564 15.4391 1.23873 15.3308 1.13041C15.2225 1.02209 15.0756 0.96124 14.9224 0.96124C14.7692 0.96124 14.6223 1.02209 14.514 1.13041L8.00015 7.64541L1.4863 1.13041C1.43272 1.07669 1.36906 1.03407 1.29898 1.00499C1.22889 0.975906 1.15376 0.960938 1.07789 0.960938C1.00201 0.960938 0.926879 0.975906 0.856797 1.00499C0.786715 1.03407 0.723058 1.07669 0.669473 1.13041Z"
                    fill="#E77E3A"
                  />
                </svg>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[292px] text-lg text-left text-[#bdbdbd]">
                Select Preferred Time Slot
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[360px] h-11 relative overflow-hidden gap-2.5 py-2.5 rounded-[40px] bg-white border border-[#e77e3a]">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[5px] py-px">
              <svg
                width={16}
                height={10}
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.669473 1.13041C0.615753 1.18399 0.573131 1.24765 0.54405 1.31773C0.514969 1.38782 0.5 1.46295 0.5 1.53882C0.5 1.6147 0.514969 1.68983 0.54405 1.75991C0.573131 1.83 0.615753 1.89365 0.669473 1.94724L7.59174 8.8695C7.64532 8.92322 7.70898 8.96584 7.77906 8.99492C7.84914 9.024 7.92427 9.03897 8.00015 9.03897C8.07603 9.03897 8.15116 9.024 8.22124 8.99492C8.29132 8.96584 8.35498 8.92322 8.40857 8.8695L15.3308 1.94724C15.4391 1.83892 15.5 1.69201 15.5 1.53882C15.5 1.38564 15.4391 1.23873 15.3308 1.13041C15.2225 1.02209 15.0756 0.96124 14.9224 0.96124C14.7692 0.96124 14.6223 1.02209 14.514 1.13041L8.00015 7.64541L1.4863 1.13041C1.43272 1.07669 1.36906 1.03407 1.29898 1.00499C1.22889 0.975906 1.15376 0.960938 1.07789 0.960938C1.00201 0.960938 0.926879 0.975906 0.856797 1.00499C0.786715 1.03407 0.723058 1.07669 0.669473 1.13041Z"
                  fill="#E77E3A"
                />
              </svg>
            </div>
            <p className="flex-grow-0 flex-shrink-0 w-[292px] text-lg text-left text-[#bdbdbd]">
              Select PIN
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[360px] h-11 relative px-4 py-3 rounded-[40px] bg-[#bdbdbd]">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-center text-white">
              Continue
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default PreferanceForm