import TextField from "@components/TextField"
import PackageCard from "./components/PackageCard"
import Tag from "./components/Tag";
import location from "@assets/images/location.svg";
import search from "@assets/images/search.svg";
import Header from "@components/Header";
import Footer from "@components/Footer";

const tagsList = [

    { title: "Popular", isActive: true },
    { title: "Full Body Checkup", isActive: false },
    { title: "Heart", isActive: false },
    { title: "Diabetes", isActive: false },
    { title: "Lifestyle Management", isActive: false },
    { title: "Arthritis", isActive: false },
    { title: "Thyroid", isActive: false },
    { title: "Cancer", isActive: false },
    { title: "Kids", isActive: false }
];


const packageData = [
    { availableAt: "Home", discount: '50', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Gold", numberOfTest: '49', price: '4999', reportTime: '8' },
    { availableAt: "Home", discount: '30', fastingTime: '10-12hr', isSponsor: false, name: "Medihub Silver", numberOfTest: '40', price: '2999', reportTime: '6' },
    { availableAt: "Center", discount: '20', fastingTime: '8-10hr', isSponsor: true, name: "Medihub Platinum", numberOfTest: '60', price: '6999', reportTime: '12' },
    { availableAt: "Home", discount: '25', fastingTime: '10-12hr', isSponsor: false, name: "Medihub Basic", numberOfTest: '25', price: '1999', reportTime: '4' },
    { availableAt: "Center", discount: '40', fastingTime: '12-14hr', isSponsor: false, name: "Medihub Complete", numberOfTest: '70', price: '5999', reportTime: '10' },
    { availableAt: "Home", discount: '35', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Essential", numberOfTest: '30', price: '2499', reportTime: '5' },
    { availableAt: "Center", discount: '15', fastingTime: '8-10hr', isSponsor: false, name: "Medihub Premium", numberOfTest: '55', price: '4999', reportTime: '7' },
    { availableAt: "Home", discount: '50', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Family", numberOfTest: '90', price: '9999', reportTime: '24' },
    { availableAt: "Center", discount: '45', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Diagnostic", numberOfTest: '65', price: '5499', reportTime: '8' },
    { availableAt: "Home", discount: '50', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Wellness", numberOfTest: '35', price: '3499', reportTime: '6' },
    { availableAt: "Home", discount: '20', fastingTime: '8-10hr', isSponsor: false, name: "Medihub Health Plus", numberOfTest: '50', price: '4499', reportTime: '12' },
    { availableAt: "Center", discount: '60', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Exclusive", numberOfTest: '80', price: '7999', reportTime: '10' },
    { availableAt: "Home", discount: '55', fastingTime: '12-14hr', isSponsor: false, name: "Medihub Supreme", numberOfTest: '100', price: '11999', reportTime: '24' },
    { availableAt: "Center", discount: '25', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Diagnostic Plus", numberOfTest: '75', price: '6499', reportTime: '10' },
    { availableAt: "Home", discount: '40', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Fitness", numberOfTest: '20', price: '1499', reportTime: '3' },
    { availableAt: "Center", discount: '35', fastingTime: '8-10hr', isSponsor: false, name: "Medihub Executive", numberOfTest: '45', price: '3999', reportTime: '8' }
];


function Packages() {
    return (
        <>
           <Header />

            <div className="bg-gradient-to-b from-[#fbe5d8] to-white">
          

                <div className="w-4/5 m-auto">

                    <p className="text-primary-solid text-4xl pt-4">Featured Health Check-up Packages</p>

                    <div className="flex flex-col gap-4 ">
                        <div className="flex w-4/5  gap-5 mt-8">

                            <TextField
                                placeholder="Location"
                                startIcon={<img src={location} />}
                            />



                            <TextField placeholder="Search" startIcon={<img src={search} />} />


                            <div
                                className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-11 relative gap-2.5 px-5 py-2.5 rounded-[30px] bg-[#e77e3a]"
                            >
                                <p
                                    className="flex-grow-0 flex-shrink-0 w-[62px] h-[26px] text-xl font-medium text-left capitalize text-white"
                                >
                                    search
                                </p>
                            </div>


                        </div>

                        <div>
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1204px] relative gap-2.5">
                                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1204px] text-xl font-semibold text-left text-[#656565]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 flex-wrap mb-4">
                            {
                                tagsList?.map(item => <Tag title={item?.title} isActive={item?.isActive} />)
                            }
                        </div>

                    </div>

                    <div className="flex gap-4  flex-wrap mt-8 ">
                        {packageData.map((pkg, index) => (
                            <PackageCard
                                key={index}
                                availableAt={pkg.availableAt}
                                discount={pkg.discount}
                                fastingTime={pkg.fastingTime}
                                isSponsor={pkg.isSponsor}
                                name={pkg.name}
                                numberOfTest={pkg.numberOfTest}
                                price={pkg.price}
                                reportTime={pkg.reportTime}
                            />
                        ))}

                    </div>
                </div>
            </div>


            <Footer /></>
    )
}

export default Packages