import { labTests } from "../../../../constants/diagnostics.constants";
import LabtestCard from "./LabtestCard";


const LabtestList = () =>
    <div className="grid grid-cols-2 gap-4 ">
        {labTests.map((labTest, index) => (
            <LabtestCard labTest={labTest} key={index} />
        ))}
    </div>;


export default LabtestList