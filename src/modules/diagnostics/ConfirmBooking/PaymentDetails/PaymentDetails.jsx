import Footer from "@components/Footer";
import Header from "@components/Header";
import Tabs from "@components/Tabs";
import { useLocation, useNavigate } from "react-router-dom";
import BookingHeader from "@components/BookingHeader";
import { usePackageBookingContext } from "../../../../contexts/PackageBookingContext";
import { getTabItems } from "../Preferences/Preferences";
import PaymentCard from "./components/PaymentCard";


function PaymentDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split("/").reverse()[0];
  const { state, dispatch } = usePackageBookingContext();



  const handleTabClick = (tabItem) => {
    navigate(`/diagnostics/${tabItem?.id}`);
  };

  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-50% mb-5">
        <Header />
        <div className="px-24 mt-6">
          <BookingHeader />
        </div>
        <div className="mt-10 mb-10">
          <Tabs
            tabCount={getTabItems(state?.visitType).length}
            tabItems={getTabItems(state?.visitType)}
            onClick={handleTabClick}
            active={active}
          />
        </div>
      </section>
      
      <section className="px-24 mt-6 m-auto w-[100%]">
        <div
          className="flex flex-col self-stretch gap-2.5 p-8 rounded-[20px] bg-white border border-[#e77e3a] "
          style={{ boxShadow: "0px 4px 20px 0 rgba(231,126,58,0.2)" }}
        >

          <div className="flex justify-between relative gap-2.5">
            <p className="flex-grow  text-2xl font-bold text-left text-[#7baed5]">Booking Cart</p>

            <button className="flex justify-center items-center  h-10 relative gap-2.5 px-[18px] py-0.5 rounded-[20px] bg-[#7baed5] border border-[#7baed5]">
              <p className=" text-base font-bold text-left text-white">Add More</p>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M19 12H12M12 12H5M12 12V5M12 12V19"
                  stroke="white"
                  stroke-width={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>


          <div className="flex  items-start   gap-[29px]">
            <div className="flex flex-col  items-start  relative gap-1.5">
              <p className="  h-[33px] text-xl font-semibold text-left text-[#656565]">
                Selected Patient:
              </p>
              <div className="flex flex-col  items-start ">
                <div className="flex justify-between items-baseline w-[400px] relative gap-2.5 px-2.5 rounded-md bg-neutral-50">

                  <p className="font-bold text-left">
                    <span className="  text-2xl font-bold text-left text-[#e77e3a]">
                      Jenny Wilson
                    </span>
                    <span className="  text-lg font-bold text-left text-[#656565]">

                      (Female - 66)
                    </span>
                  </p>

                  <button className="flex justify-center items-center  w-[22px] h-[22px] relative gap-2.5 rounded bg-[#fbe5d8]">
                    <svg
                      width={14}
                      height={15}
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.6002 7.5L0 1.8998L1.3998 0.5L7 6.1002L12.6002 0.5L14 1.8998L8.3998 7.5L14 13.1002L12.6002 14.5L7 8.8998L1.3998 14.5L0 13.1002L5.6002 7.5Z"
                        fill="#656565"
                      />
                    </svg>
                  </button>

                </div>
              </div>

            </div>
          </div>


          <div className="flex flex-col  items-start  mt-4 relative gap-1">
            <p className=" text-xl font-semibold text-left text-[#656565]">
              Selected Clinic:
            </p>
            <div className="flex justify-between items-center self-stretch ">
              <div className="flex  items-end  relative gap-2">
                <p className=" text-xl font-bold text-left text-[#e77e3a]">
                  WellCare Clinic -
                </p>
                <p className=" text-lg text-left text-[#656565]">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </p>
              </div>
              <div className="flex justify-center items-end  gap-2.5 rounded-[30px]">
                <div className="flex  items-center  relative gap-3">
                  <p className=" w-[136px] h-5 text-xl font-semibold text-center text-[#656565]">
                    Selected Time:
                  </p>
                  <p className=" w-[219px] h-5 text-xl font-bold text-left capitalize text-[#e77e3a]">
                    03 : 00 PM - 03 : 30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex justify-between items-baseline border-t pt-5  border-[#e77e3a]">
            <div className="w-[40%]  border-b pb-4  border-[#e77e3a]">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex w-[140px] justify-start items-center  h-[38px] gap-5 px-4 rounded-[10px] bg-[#f2f7fb]">
                    <div className="flex justify-start items-center  h-11 gap-2.5 py-2.5 rounded-[30px]">
                      <div className="flex justify-start items-center  relative gap-3">
                        <p className=" text-xl font-bold text-left capitalize text-[#7baed5]">
                          Home Visit
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center  relative gap-2.5 px-3 py-0.5 rounded-[20px] bg-gradient-to-b from-[#e77e3a] to-[#7baed5]">
                    <p className=" text-xs font-bold text-left uppercase text-white">
                      Sponsored
                    </p>
                  </div>
                </div>


                <div>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M9.98182 4.45455H14.1273C14.1273 3.90482 13.9089 3.37762 13.5202 2.98891C13.1315 2.60019 12.6043 2.38182 12.0545 2.38182C11.5048 2.38182 10.9776 2.60019 10.5889 2.98891C10.2002 3.37762 9.98182 3.90482 9.98182 4.45455ZM8.6 4.45455C8.6 3.53834 8.96396 2.65967 9.61182 2.01181C10.2597 1.36396 11.1383 1 12.0545 1C12.9708 1 13.8494 1.36396 14.4973 2.01181C15.1451 2.65967 15.5091 3.53834 15.5091 4.45455H22.4182C22.6014 4.45455 22.7772 4.52734 22.9067 4.65691C23.0363 4.78648 23.1091 4.96221 23.1091 5.14545C23.1091 5.32869 23.0363 5.50443 22.9067 5.634C22.7772 5.76357 22.6014 5.83636 22.4182 5.83636H20.9618L19.3119 20.1299C19.1952 21.1403 18.7112 22.0725 17.952 22.7492C17.1927 23.426 16.2111 23.7999 15.194 23.8H8.91506C7.89797 23.7999 6.91641 23.426 6.15714 22.7492C5.39786 22.0725 4.91386 21.1403 4.79724 20.1299L3.14735 5.83636H1.69091C1.50767 5.83636 1.33193 5.76357 1.20236 5.634C1.07279 5.50443 1 5.32869 1 5.14545C1 4.96221 1.07279 4.78648 1.20236 4.65691C1.33193 4.52734 1.50767 4.45455 1.69091 4.45455H8.6ZM6.16938 19.9724C6.24735 20.6459 6.57017 21.2672 7.07643 21.7182C7.58269 22.1691 8.23706 22.4183 8.91506 22.4182H15.194C15.872 22.4183 16.5264 22.1691 17.0327 21.7182C17.5389 21.2672 17.8617 20.6459 17.9397 19.9724L19.5703 5.83636H4.53884L6.16938 19.9724ZM9.98182 9.29091C10.1651 9.29091 10.3408 9.3637 10.4704 9.49327C10.5999 9.62284 10.6727 9.79858 10.6727 9.98182V18.2727C10.6727 18.456 10.5999 18.6317 10.4704 18.7613C10.3408 18.8908 10.1651 18.9636 9.98182 18.9636C9.79858 18.9636 9.62284 18.8908 9.49327 18.7613C9.3637 18.6317 9.29091 18.456 9.29091 18.2727V9.98182C9.29091 9.79858 9.3637 9.62284 9.49327 9.49327C9.62284 9.3637 9.79858 9.29091 9.98182 9.29091ZM14.8182 9.98182C14.8182 9.79858 14.7454 9.62284 14.6158 9.49327C14.4863 9.3637 14.3105 9.29091 14.1273 9.29091C13.944 9.29091 13.7683 9.3637 13.6387 9.49327C13.5092 9.62284 13.4364 9.79858 13.4364 9.98182V18.2727C13.4364 18.456 13.5092 18.6317 13.6387 18.7613C13.7683 18.8908 13.944 18.9636 14.1273 18.9636C14.3105 18.9636 14.4863 18.8908 14.6158 18.7613C14.7454 18.6317 14.8182 18.456 14.8182 18.2727V9.98182Z"
                          fill="#E77E3A"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex justify-between items-center  relative gap-10 mt-2">
                <p className=" text-[22px] font-bold text-left text-[#7baed4]">
                  Full body Health Checkup
                </p>

                <p className=" text-lg font-bold text-left text-[#656565]">59 Tests</p>


              </div>


              <div className="flex justify-between  mt-2">

                <button className="flex justify-center items-center  h-10 relative gap-2.5 px-[18px] py-0.5 rounded-[20px] border border-[#7baed5]">
                  <p className=" text-base font-bold text-left text-[#7baed4]">
                    View Details
                  </p>
                </button>

                <div className="flex justify-end items-center gap-4">

                  <div className="flex justify-center items-center  w-[92px] relative gap-2.5 px-1 py-1.5 rounded bg-[#fbe5d8]">
                    <span className="  text-lg font-bold text-left text-[#e77e3a]">
                      50% OFF
                    </span>




                  </div>

                  <p className=" w-[74px] h-[22px] text-xl font-bold text-center text-[#e77e3a]">
                    ₹2499/-
                  </p>

                </div>


              </div>

            </div>

            <div className="w-[50%]">
              <PaymentCard />
            </div>
          </div>

        
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PaymentDetails;