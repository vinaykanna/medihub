import location from "@assets/images/location.svg";
import search from "@assets/images/search.svg";
import TextField from "@components/TextField";
import { packageTags } from "../../../constants/diagnostics.constants";
import PackageList from "./components/PackageList";
import PackageSlider from "./components/PackageSlider";
import Tag from "./components/Tag";
import { useState } from "react";


function Packages() {
    const [isSlider, setIsSlider] = useState(true)
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

            return !prev
        })

    }

    return (
        <>

            <div className="px-24 flex flex-col bg-gradient-to-b from-[#fbe5d8] to-white ">

                <p className="text-primary-solid text-4xl pt-4">Featured Health Check-up Packages</p>

                <div className="flex flex-col gap-4 ">
                    <div className="flex   gap-5 mt-10">

                        <TextField
                            placeholder="Location"
                            startIcon={<img src={location} />}
                        />
                        <TextField placeholder="Search" startIcon={<img src={search} />} />


                        <div
                            className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative gap-2.5 px-5 py-2.5 rounded-[30px] bg-[#e77e3a]"
                        >
                            <p
                                className="flex-grow-0 flex-shrink-0 h-[26px] text-xl font-medium text-left capitalize text-white"
                            >
                                search
                            </p>
                        </div>


                    </div>

                    <div>
                        <p className=" flex-grow-0 flex-shrink-0  text-xl font-semibold  text-[#656565]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            bore et dolore magna aliqua. Ut enim ad  minim veniam,quis nostrud{" "}
                        </p>

                    </div>

                    <div className="flex gap-2 flex-wrap mb-4">
                        {
                            packageTags?.map((item, index) => <Tag title={item?.title} isSelected={item?.isSelected} key={index} />)
                        }
                    </div>
                </div>

            </div>

            <div className="px-24">
                {!isSlider && <PackageList />}
            </div>
            {isSlider && <PackageSlider />}

            <div className="flex justify-center my-10">
                <button onClick={handleExpandButton} className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2.5 px-5 py-[7px] rounded-[30px] bg-white border border-[#e77e3a]">
                    <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#e77e3a]">
                        {
                            isSlider ? 'View All' : 'Collapse'
                        }
                    </p>
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
                </button>
            </div>
        </>
    )
}

export default Packages