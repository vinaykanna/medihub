import React from 'react'

function PackagesDetails({ handleClose }) {

    return <div className="items-start relative gap-2.5  ">
        <div className=" border-2 flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[830px] w-[500px] gap-4 px-5 pt-[30px] bg-white">
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[459px] relative">
                <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[421px] relative">
                    <p className="flex-grow-0 flex-shrink-0 w-[150px] text-2xl font-bold text-left text-[#656565]">
                        Test Details
                    </p>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-7 relative gap-1.5 px-2.5 py-0.5 rounded-md bg-[#fbe5d8]">
                            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                                <svg
                                    width={21}
                                    height={21}
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M3 8.00033L10.5 2.16699L18 8.00033V17.167C18 17.609 17.8244 18.0329 17.5118 18.3455C17.1993 18.6581 16.7754 18.8337 16.3333 18.8337H4.66667C4.22464 18.8337 3.80072 18.6581 3.48816 18.3455C3.17559 18.0329 3 17.609 3 17.167V8.00033Z"
                                        stroke="#E77E3A"
                                        stroke-width="1.2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 18.8333V10.5H13V18.8333"
                                        stroke="#E77E3A"
                                        stroke-width="1.2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#e77e3a]">
                                Home
                            </p>
                        </div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-7 relative gap-1.5 px-1.5 py-0.5 rounded bg-[#fbe5d8]">
                            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-5 h-5 relative gap-2.5">
                                <svg
                                    width={21}
                                    height={17}
                                    viewBox="0 0 21 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M19.6905 15.4787H18.8394V8.5C18.8394 8.184 18.7139 7.88094 18.4904 7.65749C18.267 7.43404 17.9639 7.30851 17.6479 7.30851H12.7118V1.69149C12.7118 1.37549 12.5862 1.07243 12.3628 0.848979C12.1393 0.625532 11.8363 0.5 11.5203 0.5H3.35007C3.03406 0.5 2.731 0.625532 2.50756 0.848979C2.28411 1.07243 2.15858 1.37549 2.15858 1.69149V15.4787H1.30751C1.17208 15.4787 1.0422 15.5325 0.946437 15.6283C0.850674 15.724 0.796875 15.8539 0.796875 15.9894C0.796875 16.1248 0.850674 16.2547 0.946437 16.3504C1.0422 16.4462 1.17208 16.5 1.30751 16.5H19.6905C19.8259 16.5 19.9558 16.4462 20.0516 16.3504C20.1473 16.2547 20.2011 16.1248 20.2011 15.9894C20.2011 15.8539 20.1473 15.724 20.0516 15.6283C19.9558 15.5325 19.8259 15.4787 19.6905 15.4787ZM17.6479 8.32979C17.6931 8.32979 17.7364 8.34772 17.7683 8.37964C17.8002 8.41156 17.8182 8.45486 17.8182 8.5V15.4787H12.7118V8.32979H17.6479ZM3.17985 1.69149C3.17985 1.64635 3.19779 1.60305 3.22971 1.57113C3.26163 1.53921 3.30492 1.52128 3.35007 1.52128H11.5203C11.5654 1.52128 11.6087 1.53921 11.6406 1.57113C11.6726 1.60305 11.6905 1.64635 11.6905 1.69149V15.4787H9.98836V11.2234C9.98836 11.088 9.93457 10.9581 9.8388 10.8623C9.74304 10.7666 9.61316 10.7128 9.47773 10.7128H5.39262C5.25719 10.7128 5.12731 10.7666 5.03154 10.8623C4.93578 10.9581 4.88198 11.088 4.88198 11.2234V15.4787H3.17985V1.69149ZM8.96709 15.4787H5.90326V11.734H8.96709V15.4787ZM4.88198 5.7766C4.88198 5.64117 4.93578 5.51128 5.03154 5.41552C5.12731 5.31976 5.25719 5.26596 5.39262 5.26596H6.92453V3.73404C6.92453 3.59861 6.97833 3.46873 7.0741 3.37297C7.16986 3.2772 7.29974 3.2234 7.43517 3.2234C7.5706 3.2234 7.70048 3.2772 7.79625 3.37297C7.89201 3.46873 7.94581 3.59861 7.94581 3.73404V5.26596H9.47773C9.61316 5.26596 9.74304 5.31976 9.8388 5.41552C9.93457 5.51128 9.98836 5.64117 9.98836 5.7766C9.98836 5.91203 9.93457 6.04191 9.8388 6.13767C9.74304 6.23343 9.61316 6.28723 9.47773 6.28723H7.94581V7.81915C7.94581 7.95458 7.89201 8.08446 7.79625 8.18022C7.70048 8.27599 7.5706 8.32979 7.43517 8.32979C7.29974 8.32979 7.16986 8.27599 7.0741 8.18022C6.97833 8.08446 6.92453 7.95458 6.92453 7.81915V6.28723H5.39262C5.25719 6.28723 5.12731 6.23343 5.03154 6.13767C4.93578 6.04191 4.88198 5.91203 4.88198 5.7766Z"
                                        fill="#E77E3A"
                                    />
                                </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#e77e3a]">
                                Centre
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={handleClose}>
                    <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.86517 4.86321C5.21664 4.51174 5.78649 4.51174 6.13796 4.86321L12.5016 11.2268L18.8652 4.86321C19.2166 4.51174 19.7865 4.51174 20.138 4.86321C20.4894 5.21469 20.4894 5.78453 20.138 6.13601L13.7744 12.4996L20.138 18.8632C20.4894 19.2147 20.4894 19.7845 20.138 20.136C19.7865 20.4875 19.2166 20.4875 18.8652 20.136L12.5016 13.7724L6.13796 20.136C5.78649 20.4875 5.21664 20.4875 4.86517 20.136C4.51369 19.7845 4.51369 19.2147 4.86517 18.8632L11.2288 12.4996L4.86517 6.13601C4.51369 5.78453 4.51369 5.21469 4.86517 4.86321Z"
                            fill="#656565"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[7px]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[460px] text-2xl font-bold text-left text-[#e77e3a]">
                        CA 125 Ovarian Cancer Marker, Body Fluid (CA-125 )
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[460px] text-base font-bold text-left text-[#7aacd4]">
                        Cancer
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[526px] overflow-hidden gap-5">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[730px] gap-5">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[458px] relative gap-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#e77e3a]/20">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[458px] text-xl font-bold text-left text-[#e77e3a]">
                            Pre-test Information
                        </p>
                        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-2.5">
                            <p className="flex-grow-0 flex-shrink-0 w-5 text-base text-left text-[#656565]">
                                <span className="flex-grow-0 flex-shrink-0 w-5 text-base text-left text-[#656565]">
                                    ✓
                                </span>
                                <br />
                            </p>
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                                <p className="flex-grow-0 flex-shrink-0 w-[434px] text-base text-left text-[#656565]">
                                    8 - 10 Hour Fasting is mandatory.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 w-[458px] text-base text-left text-[#656565]">
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base text-left text-[#656565]">
                                    Specimen:
                                </span>
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base font-medium text-left text-[#656565]">
                                    {" "}
                                </span>
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base font-bold text-left text-[#656565]">
                                    Aliquot of First Void Specimen of Urine
                                </span>
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[458px] text-base text-left text-[#656565]">
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base text-left text-[#656565]">
                                    Department:
                                </span>
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base font-bold text-left text-[#656565]">
                                    {" "}
                                    Biochemistry
                                </span>
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[458px] text-base text-left text-[#656565]">
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base text-left text-[#656565]">
                                    Method:
                                </span>
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base font-medium text-left text-[#656565]">
                                    {" "}
                                </span>
                                <span className="flex-grow-0 flex-shrink-0 w-[458px] text-base font-bold text-left text-[#656565]">
                                    CLIA
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[460px] text-base font-bold text-left text-[#656565]">
                                Aliquot of First Void Specimen of Urine
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[460px] text-base font-bold text-left text-[#656565]">
                                Complete Urine Analysis
                            </p>
                            <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[460px] relative">
                               
                                <p className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                <span className="flex-grow w-[440px] text-base  text-[#656565]">
                                       ✓ Urine Protien
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Pus Cell
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Crystals(Crystalluria)
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Urobilinogen
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine PH
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Epithelial Cells
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Colour
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Casts
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Blood
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine RBC
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Bilirubin
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Appearance
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Specific Gravity
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Glucose
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Nitrates
                                    </span>
                                    <br />
                                    <span className="flex-grow w-[440px] text-base text-left text-[#656565]">
                                       ✓ Urine Ketones
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[458px] gap-6 pt-5 border-t border-r-0 border-b-0 border-l-0 border-[#e38540]/40">
                <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
                    <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[442px] relative">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#656565]">
                            Total Price:
                        </p>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#656565]">
                                ₹9000.00/-
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[33px] gap-2.5 rounded-md bg-[#fdf2ec]">
                        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[442px] relative">
                            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#7baed5]">
                                Medihub Price:
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#e77e3a]">
                                ₹3000.00/-
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    return <>
    <SectionHeader title="Pre-test Information" />
<InformationPoint label="Specimen" value="Aliquot of First Void Specimen of Urine" />
<InformationPoint label="Department" value="Biochemistry" />

    </>



}

export default PackagesDetails