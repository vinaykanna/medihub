import location from "@assets/images/location.svg";
import search from "@assets/images/search.svg";
import TextField from "@components/TextField";
import { packageTags } from "../../../constants/diagnostics.constants";
import PackageList from "./components/PackageList";
import PackageSlider from "./components/PackageSlider";
import Tag from "./components/Tag";
import { useState } from "react";
import Drawer from "../../../components/Drawer";
import PackagesDetails from "./components/PackagesDetails";
import { useNavigate } from "react-router-dom";


function Packages() {
    const [isSlider, setIsSlider] = useState(true)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
    };
    const handleExpandButton = () => {
        setIsSlider(prev => {

            if (prev === false) {
                scrollToTop()

            }

      return !prev;
    });
  };

  const handleAppointment = () => {
    navigate('/diagnostics/preferences')
  }

    return (
        <>
            <div className="px-24 flex flex-col bg-gradient-to-b from-[#fbe5d8] to-white ">

                <div className="flex justify-between items-baseline">
                    <p className="text-primary-solid text-4xl pt-4">Featured Health Check-up Packages</p>

                    <button onClick={handleAppointment} className="flex justify-center items-center  h-11 relative gap-2.5 px-5 py-2.5 rounded-[30px] bg-[#e77e3a]">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left capitalize text-white">
                            Confirm Appointment
                        </p>
                        <svg
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M4.5 11.4668C3.94772 11.4668 3.5 11.9145 3.5 12.4668C3.5 13.0191 3.94772 13.4668 4.5 13.4668V11.4668ZM21.2071 13.1739C21.5976 12.7834 21.5976 12.1502 21.2071 11.7597L14.8431 5.39573C14.4526 5.0052 13.8195 5.0052 13.4289 5.39573C13.0384 5.78625 13.0384 6.41942 13.4289 6.80994L19.0858 12.4668L13.4289 18.1237C13.0384 18.5142 13.0384 19.1473 13.4289 19.5379C13.8195 19.9284 14.4526 19.9284 14.8431 19.5379L21.2071 13.1739ZM4.5 13.4668H20.5V11.4668H4.5V13.4668Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col gap-4 ">
                    <div className="flex   gap-5 mt-10">

                        <TextField
                            placeholder="Location"
                            startIcon={<img src={location} />}
                        />
                        <TextField placeholder="Search" startIcon={<img src={search} />} />


                        <button
                            className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative gap-2.5 px-5 py-2.5 rounded-[30px] bg-[#e77e3a]"
                        >
                            <p
                                className="flex-grow-0 flex-shrink-0 h-[26px] text-xl font-medium text-left capitalize text-white"
                            >
                                search
                            </p>
                        </button>


                    </div>

                    <div>
                        <p className=" flex-grow-0 flex-shrink-0  text-xl font-semibold  text-[#656565]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            bore et dolore magna aliqua. Ut enim ad  minim veniam,quis nostrud{" "}
                        </p>

                    </div>

                    <div className="flex gap-4 flex-wrap mb-4">
                        {
                            packageTags?.map((item, index) => <Tag title={item?.title} isSelected={item?.isSelected} key={index} />)
                        }
                    </div>
                </div>
            </div>

            <div className="px-24">
                {!isSlider && <PackageList setIsDrawerOpen={setIsDrawerOpen} />}
            </div>

            <div className="px-24">
                {isSlider && <PackageSlider setIsDrawerOpen={setIsDrawerOpen} />}

            </div>

            <div className="flex justify-center my-10">
                <button onClick={handleExpandButton} className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2.5 px-5 py-[7px] rounded-[30px] bg-white border border-[#e77e3a]">
                    <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#e77e3a]">
                        {
                            isSlider ? 'View All' : 'View Less'
                        }
                    </p>
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[5px] py-px">
                        {
                            isSlider ? <svg
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
                            </svg> :
                                <svg
                                    width={15}
                                    height={10}
                                    viewBox="0 0 15 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0.169473 8.86959C0.115753 8.81601 0.0731311 8.75235 0.0440502 8.68227C0.0149692 8.61218 0 8.53705 0 8.46118C0 8.3853 0.0149692 8.31017 0.0440502 8.24009C0.0731311 8.17 0.115753 8.10635 0.169473 8.05276L7.09174 1.1305C7.14532 1.07678 7.20898 1.03416 7.27906 1.00508C7.34914 0.975995 7.42427 0.961025 7.50015 0.961025C7.57603 0.961025 7.65116 0.975995 7.72124 1.00508C7.79132 1.03416 7.85498 1.07678 7.90857 1.1305L14.8308 8.05276C14.9391 8.16108 15 8.30799 15 8.46118C15 8.61436 14.9391 8.76127 14.8308 8.86959C14.7225 8.97791 14.5756 9.03876 14.4224 9.03876C14.2692 9.03876 14.1223 8.97791 14.014 8.86959L7.50015 2.35459L0.9863 8.86959C0.932715 8.92331 0.869059 8.96593 0.798977 8.99501C0.728894 9.02409 0.653763 9.03906 0.577887 9.03906C0.50201 9.03906 0.426879 9.02409 0.356797 8.99501C0.286715 8.96593 0.223058 8.92331 0.169473 8.86959Z"
                                        fill="#E77E3A"
                                    />
                                </svg>
                        }

                       
                    </div>
                </button>
            </div>

            <Drawer
                title={'Package Details'}
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                showIcons={true}
            >
                <PackagesDetails />
            </Drawer>
        </>
    )
}

export default Packages;
