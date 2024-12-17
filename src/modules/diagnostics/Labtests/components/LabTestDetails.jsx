import React from 'react'

function LabTestDetails({ handleClose }) {

    return <div className="items-start relative gap-2.5  ">
        <div className=" flex flex-col  flex-grow-0 flex-shrink-0  gap-4  pt-[30px] bg-white">
            <div className="flex justify-between  flex-grow-0 flex-shrink-0  relative">
               
               
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[7px]">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                    <p className="self-stretch flex-grow-0 flex-shrink-0  text-2xl font-bold text-left text-[#e77e3a]">
                        CA 125 Ovarian Cancer Marker, Body Fluid (CA-125 )
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0  text-base font-bold text-left text-[#7aacd4]">
                        Cancer
                    </p>
                </div>
            </div>

            <div className=" h-[600px] overflow-y-auto flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[526px] overflow-hidden gap-5">
                <div className="flex flex-col  self-stretch flex-grow-0 flex-shrink-0 h-[730px] gap-5">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  relative gap-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#e77e3a]/20">
                        <p className="self-stretch flex-grow-0 flex-shrink-0  text-xl font-bold text-left text-[#e77e3a]">
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
                                <p className="flex-grow-0 flex-shrink-0  text-base text-left text-[#656565]">
                                    8 - 10 Hour Fasting is mandatory.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start  self-stretch flex-grow-0 flex-shrink-0 gap-5">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0  text-base text-left text-[#656565]">
                                <span className="flex-grow-0 flex-shrink-0  text-base text-left text-[#656565]">
                                    Specimen:
                                </span>
                                <span className="flex-grow-0 flex-shrink-0  text-base font-medium text-left text-[#656565]">
                                    {" "}
                                </span>
                                <span className="flex-grow-0 flex-shrink-0  text-base font-bold text-left text-[#656565]">
                                    Aliquot of First Void Specimen of Urine
                                </span>
                            </p>
                            <p className="flex-grow-0 flex-shrink-0  text-base text-left text-[#656565]">
                                <span className="flex-grow-0 flex-shrink-0  text-base text-left text-[#656565]">
                                    Department:
                                </span>
                                <span className="flex-grow-0 flex-shrink-0  text-base font-bold text-left text-[#656565]">
                                    {" "}
                                    Biochemistry
                                </span>
                            </p>
                            <p className="flex-grow-0 flex-shrink-0  text-base text-left text-[#656565]">
                                <span className="flex-grow-0 flex-shrink-0  text-base text-left text-[#656565]">
                                    Method:
                                </span>
                                <span className="flex-grow-0 flex-shrink-0  text-base font-medium text-left text-[#656565]">
                                    {" "}
                                </span>
                                <span className="flex-grow-0 flex-shrink-0  text-base font-bold text-left text-[#656565]">
                                    CLIA
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="self-stretch flex-grow-0 flex-shrink-0  text-base font-bold text-left text-[#656565]">
                                Aliquot of First Void Specimen of Urine
                            </p>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="self-stretch flex-grow-0 flex-shrink-0  text-base font-bold text-left text-[#656565]">
                                Complete Urine Analysis
                            </p>
                            <div className="flex justify-between items-start flex-grow-0 flex-shrink-0  relative">
                               
                                <p className="flex-grow  text-base text-left text-[#656565]">
                                <span className="flex-grow  text-base  text-[#656565]">
                                       ✓ Urine Protien
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Pus Cell
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Crystals(Crystalluria)
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Urobilinogen
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine PH
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Epithelial Cells
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Colour
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Casts
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Blood
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine RBC
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Bilirubin
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Appearance
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Specific Gravity
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Glucose
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Nitrates
                                    </span>
                                    <br />
                                    <span className="flex-grow  text-base text-left text-[#656565]">
                                       ✓ Urine Ketones
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0  gap-6 pt-5 border-t border-r-0 border-b-0 border-l-0 border-[#e38540]/40">
                <div className="flex flex-col justify-start  self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
                    
                    <div className="flex justify-between items-center flex-grow-0 flex-shrink-0  relative">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#656565]">
                            Total Price:
                        </p>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#656565]">
                                ₹9000.00/-
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center flex-grow-0 flex-shrink-0  relative bg-[#fdf2ec]">
                    <p className="  text-xl font-bold text-[#7baed5]">
                                Medihub Price:
                            </p>
                            <p className="  text-xl font-bold text-[#e77e3a]">
                                ₹3000.00/-
                            </p>
                       
                    </div>

                </div>
            </div>
        </div>
    </div>



}

export default LabTestDetails