
function PackageCard({name,isSponsor,numberOfTest, reportTime,availableAt, fastingTime, price, discount}) {
  return (
    <div
    className="shadow-custom flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[586px] gap-[11px] px-4 py-3.5 rounded-2xl bg-white"
  >
    <div
      className="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 gap-3.5"
    >
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4"
      >
        <div
          className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
        >
          <div
            className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative"
          >
            <p
              className="flex-grow-0 flex-shrink-0 w-[396px] text-2xl font-bold text-left text-[#7baed5]"
            >
             {name}
            </p>
          </div>
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 absolute left-[454px] top-0 gap-2.5 px-3 py-1 rounded-[20px] bg-gradient-to-b from-[#e77e3a] to-[#7baed5]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left uppercase text-white">
              {isSponsor && 'Sponsored'}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2"
        >
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[109px] relative gap-1.5"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M17.4386 3.49995H15.7486V2.96995C15.7435 2.84428 15.7135 2.72087 15.6603 2.60689C15.6071 2.49291 15.5318 2.39062 15.4388 2.30597C15.3457 2.22131 15.2368 2.15598 15.1184 2.11374C14.9999 2.07151 14.8742 2.05323 14.7486 2.05995H9.24859C9.12299 2.05323 8.99731 2.07151 8.87883 2.11374C8.76036 2.15598 8.65145 2.22131 8.55842 2.30597C8.46539 2.39062 8.3901 2.49291 8.33692 2.60689C8.28373 2.72087 8.25371 2.84428 8.24859 2.96995V3.49995H6.55859C5.89555 3.49995 5.25967 3.76334 4.79083 4.23219C4.32199 4.70103 4.05859 5.33691 4.05859 5.99995V19.44C4.05859 20.103 4.32199 20.7389 4.79083 21.2077C5.25967 21.6766 5.89555 21.94 6.55859 21.94H17.4386C18.1016 21.94 18.7375 21.6766 19.2064 21.2077C19.6752 20.7389 19.9386 20.103 19.9386 19.44V5.99995C19.9386 5.33691 19.6752 4.70103 19.2064 4.23219C18.7375 3.76334 18.1016 3.49995 17.4386 3.49995ZM9.24859 3.05995L14.7486 3.06995V4.18995C14.7486 4.79995 14.0586 5.30995 13.2486 5.30995H10.7486C9.92859 5.30995 9.24859 4.79995 9.24859 4.18995V3.05995ZM18.9386 19.44C18.936 19.837 18.7771 20.217 18.4964 20.4977C18.2156 20.7785 17.8356 20.9373 17.4386 20.94H6.55859C6.16077 20.94 5.77924 20.7819 5.49793 20.5006C5.21663 20.2193 5.05859 19.8378 5.05859 19.44V5.99995C5.05859 5.60213 5.21663 5.2206 5.49793 4.93929C5.77924 4.65799 6.16077 4.49995 6.55859 4.49995H8.27859C8.41504 5.0421 8.73648 5.51961 9.18742 5.85006C9.63836 6.18051 10.1905 6.34316 10.7486 6.30995H13.2486C13.8067 6.34316 14.3588 6.18051 14.8098 5.85006C15.2607 5.51961 15.5821 5.0421 15.7186 4.49995H17.4386C17.8364 4.49995 18.2179 4.65799 18.4993 4.93929C18.7806 5.2206 18.9386 5.60213 18.9386 5.99995V19.44Z"
                  fill="#E77E3A"
                ></path>
                <path
                  d="M14.5 12.71C14.5 12.8426 14.4473 12.9697 14.3536 13.0635C14.2598 13.1573 14.1326 13.21 14 13.21H12.5V14.71C12.5 14.8426 12.4473 14.9697 12.3536 15.0635C12.2598 15.1573 12.1326 15.21 12 15.21C11.8674 15.21 11.7402 15.1573 11.6464 15.0635C11.5527 14.9697 11.5 14.8426 11.5 14.71V13.21H10C9.86739 13.21 9.74021 13.1573 9.64645 13.0635C9.55268 12.9697 9.5 12.8426 9.5 12.71C9.5 12.5774 9.55268 12.4502 9.64645 12.3564C9.74021 12.2626 9.86739 12.21 10 12.21H11.5V10.71C11.5 10.5774 11.5527 10.4502 11.6464 10.3564C11.7402 10.2626 11.8674 10.21 12 10.21C12.1318 10.2125 12.2575 10.266 12.3507 10.3592C12.4439 10.4525 12.4974 10.5782 12.5 10.71V12.21H14C14.1318 12.2125 14.2575 12.266 14.3507 12.3592C14.4439 12.4525 14.4974 12.5782 14.5 12.71Z"
                  fill="#E77E3A"
                ></path>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#656565]">
                {numberOfTest} Tests
              </p>
            </div>
            <div className="flex justify-center items-baseline  flex-grow-0 flex-shrink-0 relative gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M8.4442 2.35742C8.28791 2.35742 8.13802 2.41951 8.02751 2.53002C7.917 2.64053 7.85491 2.79042 7.85491 2.94671C7.85491 3.103 7.917 3.25288 8.02751 3.3634C8.13802 3.47391 8.28791 3.53599 8.4442 3.53599H13.5513C13.7076 3.53599 13.8575 3.47391 13.968 3.3634C14.0785 3.25288 14.1406 3.103 14.1406 2.94671C14.1406 2.79042 14.0785 2.64053 13.968 2.53002C13.8575 2.41951 13.7076 2.35742 13.5513 2.35742H8.4442ZM10.9978 7.46456C11.1541 7.46456 11.3039 7.52665 11.4145 7.63716C11.525 7.74768 11.5871 7.89756 11.5871 8.05385V12.7681C11.5871 12.9244 11.525 13.0743 11.4145 13.1848C11.3039 13.2953 11.1541 13.3574 10.9978 13.3574C10.8415 13.3574 10.6916 13.2953 10.5811 13.1848C10.4706 13.0743 10.4085 12.9244 10.4085 12.7681V8.05385C10.4085 7.89756 10.4706 7.74768 10.5811 7.63716C10.6916 7.52665 10.8415 7.46456 10.9978 7.46456ZM10.9978 4.71456C6.65827 4.71456 3.14062 8.23221 3.14062 12.5717C3.14062 16.9112 6.65827 20.4289 10.9978 20.4289C15.3373 20.4289 18.8549 16.9112 18.8549 12.5717C18.8549 8.23221 15.3373 4.71456 10.9978 4.71456ZM4.3192 12.5717C4.3192 10.8004 5.02283 9.10172 6.2753 7.84924C7.52778 6.59677 9.2265 5.89314 10.9978 5.89314C12.769 5.89314 14.4678 6.59677 15.7202 7.84924C16.9727 9.10172 17.6763 10.8004 17.6763 12.5717C17.6763 14.343 16.9727 16.0417 15.7202 17.2942C14.4678 18.5466 12.769 19.2503 10.9978 19.2503C9.2265 19.2503 7.52778 18.5466 6.2753 17.2942C5.02283 16.0417 4.3192 14.343 4.3192 12.5717ZM17.5035 4.88742C17.4495 4.82952 17.3845 4.78309 17.3122 4.75088C17.2399 4.71867 17.1619 4.70135 17.0827 4.69996C17.0036 4.69856 16.925 4.71312 16.8517 4.74275C16.7783 4.77239 16.7116 4.81651 16.6557 4.87246C16.5997 4.92842 16.5556 4.99508 16.526 5.06845C16.4963 5.14183 16.4818 5.22042 16.4832 5.29955C16.4846 5.37867 16.5019 5.4567 16.5341 5.52899C16.5663 5.60127 16.6127 5.66633 16.6706 5.72028L17.8492 6.89885C17.9031 6.95675 17.9682 7.00318 18.0405 7.03539C18.1128 7.0676 18.1908 7.08492 18.2699 7.08632C18.3491 7.08771 18.4276 7.07316 18.501 7.04352C18.5744 7.01388 18.6411 6.96977 18.697 6.91381C18.753 6.85785 18.7971 6.7912 18.8267 6.71782C18.8564 6.64444 18.8709 6.56585 18.8695 6.48673C18.8681 6.4076 18.8508 6.32957 18.8186 6.25728C18.7864 6.185 18.74 6.11994 18.6821 6.06599L17.5035 4.88742Z"
                  fill="#E77E3A"
                ></path>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#656565]">
                Reports in {reportTime} Hrs
              </p>
            </div>
          </div>
          <div
            className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[30px] relative rounded-[20px]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#7baed4]">
              View Test Details
            </p>
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M7.43025 12H13.1445M7.43025 14.2857H15.4302M7.43025 16.5714H10.8588M18.8588 17.7143V9.71429L13.1445 4H7.43025C6.82404 4 6.24266 4.24082 5.814 4.66947C5.38535 5.09812 5.14453 5.67951 5.14453 6.28571V17.7143C5.14453 18.3205 5.38535 18.9019 5.814 19.3305C6.24266 19.7592 6.82404 20 7.43025 20H16.5731C17.1793 20 17.7607 19.7592 18.1893 19.3305C18.618 18.9019 18.8588 18.3205 18.8588 17.7143Z"
                  stroke="#E77E3A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.1445 4V7.42857C13.1445 8.03478 13.3853 8.61616 13.814 9.04482C14.2427 9.47347 14.824 9.71429 15.4302 9.71429H18.8588"
                  stroke="#E77E3A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#7baed5]">
                Sample Report
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 pl-[11px] pr-2.5 py-1.5 rounded-[10px] bg-[#e5eff7]"
        >
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-5">
            <div
              className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[184px] relative"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#656565]">
                Available at:
              </p>
              <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-7 relative gap-1.5 px-1 py-0.5 rounded bg-white"
              >
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M2.5 7.49984L10 1.6665L17.5 7.49984V16.6665C17.5 17.1085 17.3244 17.5325 17.0118 17.845C16.6993 18.1576 16.2754 18.3332 15.8333 18.3332H4.16667C3.72464 18.3332 3.30072 18.1576 2.98816 17.845C2.67559 17.5325 2.5 17.1085 2.5 16.6665V7.49984Z"
                      stroke="#E77E3A"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7.5 18.3333V10H12.5V18.3333"
                      stroke="#E77E3A"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-11 h-[18px] text-base font-medium text-left text-[#e77e3a]"
                >
                  {availableAt}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-5">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative ">
              <p
                className="flex-grow-0 flex-shrink-0 w-[60px] text-base font-bold text-left text-[#656565]"
              >
                Fasting:
              </p>
              <p
                className="flex-grow-0 flex-shrink-0 w-[76px] h-[21px] text-base font-medium text-right text-[#656565]"
              >
                {fastingTime}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0">
        <div
          className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[74px] gap-1.5"
        >
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p
              className="flex-grow-0 flex-shrink-0 w-16 text-base font-medium text-center text-[#656565]"
            >
              ₹{price}/-
            </p>
           
            
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[92px] relative px-1 py-1.5 rounded bg-[#fbe5d8]"
            >
              <p
                className="flex-grow-0 flex justify-center items-center flex-shrink-0 w-[78px] h-[18px] text-lg font-bold text-left text-[#e77e3a]"
              >
                {discount}% OFF
              </p>
            </div>

          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-[#656565]">
              {isNaN(price * discount/100) ? 'NA' : `₹${Math.round(price * discount/100)}/-`}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 h-[74px] gap-[15px] pt-1"
        >
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2.5 px-5 py-1.5 rounded-[25px] bg-[#7baed5]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">Select</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M19 12H12M12 12H5M12 12V5M12 12V19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PackageCard