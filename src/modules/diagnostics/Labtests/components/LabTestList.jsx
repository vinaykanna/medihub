import { labTests } from "../../../../constants/diagnostics.constants";
import LabtestCard from "./LabtestCard";


const LabtestList = ({setIsDrawerOpen}) =>
    <div className="grid grid-cols-2 gap-4 ">
        {labTests.map((labTest, index) => (
            <LabtestCard setIsDrawerOpen={setIsDrawerOpen} labTest={labTest} key={index} />
        ))}
    </div>;


export default LabtestList