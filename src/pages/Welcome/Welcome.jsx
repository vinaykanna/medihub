import Footer from "@components/Footer";
import Header from "@components/Header";
import HeroBanner from "@pages/Welcome/components/HeroBanner";
import GetInTouch from "@pages/Welcome/components/GetInTouch";
import Faqs from "@pages/Welcome/components/Faqs";
import OurServices from "@pages/Welcome/components/OurSevices";
import Testimonials from "@pages/Welcome/components/Testimonials";

function Welcome() {
  return (
    <>
      <Header className="absolute top-0 left-0 w-full" />
      <HeroBanner />
      <OurServices />
      <Testimonials />
      <Faqs />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Welcome;
