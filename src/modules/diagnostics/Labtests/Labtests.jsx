import React from "react";
import { labTestTags } from "@constants/diagnostics.constants";
import LabtestList from "@modules/diagnostics/Labtests/components/LabTestList";
import location from "@assets/images/location.svg";
import search from "@assets/images/search.svg";
import TextField from "@components/TextField";
import Tag from "@modules/diagnostics/Packages/components/Tag";

function Labtests() {
  return (
    <div className="px-24 mb-10 flex flex-col bg-gradient-to-b from-[#e5eff7] to-white  ">
      <p className="text-[40px] font-bold text-left text-[#e77e3a] py-4">
        Book Lab Tests
      </p>


      <div className="flex gap-4 flex-wrap ">
        {
          labTestTags?.map((item, index) => <Tag title={item?.title} isSelected={item?.isSelected} key={index} />)
        }
      </div>
      <div className="flex   gap-5 py-8">
        <TextField placeholder="Location" startIcon={<img src={location} />} />
        <TextField placeholder="Search" startIcon={<img src={search} />} />
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative gap-2.5 px-5 py-2.5 rounded-[30px] bg-[#e77e3a]">
          <p className="flex-grow-0 flex-shrink-0 h-[26px] text-xl font-medium text-left capitalize text-white">
            search
          </p>
        </div>
      </div>
      <LabtestList />
    </div>
  );
}

export default Labtests;
