import Footer from "@components/Footer";
import Header from "@components/Header";
import HeroBanner from "@pages/Welcome/components/HeroBanner";
import GetInTouch from "@pages/Welcome/components/GetInTouch";
import Faqs from "@pages/Welcome/components/Faqs";

function Welcome() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Faqs />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Welcome;
