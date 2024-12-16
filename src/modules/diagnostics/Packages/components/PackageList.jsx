import { packageData } from "../../../../constants/diagnostics.constants";
import PackageCard from "./PackageCard";


const PackageList = ({setIsDrawerOpen}) =>
    <div className="grid grid-cols-2 gap-4 mt-8 ">
        {packageData.map((pkg, index) => (
            <PackageCard pkg={pkg} key={index} setIsDrawerOpen={setIsDrawerOpen}/>
        ))}

    </div>;


export default PackageList