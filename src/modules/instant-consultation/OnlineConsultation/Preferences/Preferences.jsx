import Footer from "@components/Footer";
import Header from "@components/Header";
import ConsultationPreference from "./components/ConsultationPreference";
import Specializations from "./components/Specializations";
function Preferences() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-10%">
        <Header />
        <Specializations />
      </section>
      <ConsultationPreference />
      <Footer />
    </>
  );
}

export default Preferences;
