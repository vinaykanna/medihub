import Footer from "@components/Footer";
import Header from "@components/Header";
import HeroBanner from "@pages/Welcome/components/HeroBanner";
import GetInTouch from "@pages/Welcome/components/GetInTouch";

function Welcome() {
  return (
    <>
      <Header />
      <HeroBanner />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default Welcome;
