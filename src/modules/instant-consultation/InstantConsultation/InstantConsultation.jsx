import { twJoin } from "tailwind-merge";
import instantConsultationHero from "@assets/images/instant_consultation_hero.png";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Testimonials from "@modules/instant-consultation/InstantConsultation/components/Testimonials";
import onlineConsultation from "@assets/images/online-consultation.jpg";
import doctorConsultation from "@assets/images/doctor-consultation.jpg";
import ConsultationCard from "@modules/instant-consultation/InstantConsultation/components/ConsultationCard";

function InstantConsultation() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FBE5D8] from-50% to-[#FDF2EC] to-100%">
        <Header />
        <div className="px-20 mt-16">
          <h1 className="text-primary-solid text-4xl">
            Consult with a verified doctor
          </h1>
          <p className="text-xl mt-2 text-[#656565]">
            Book a doctor consultation instantly and effortlessly. Whether you
            prefer a teleconsultation, video call. Get connected with verified
            doctors within minutes.
          </p>
        </div>
        <div
          className={twJoin(
            "w-full px-20 mt-10",
            "grid grid-cols-5 justify-between gap-10"
          )}
        >
          <article className="col-span-2 self-end">
            <img src={instantConsultationHero} alt="" />
          </article>
          <article className={twJoin("col-span-3")}>
            <div className="flex gap-5 -mb-10">
              <ConsultationCard
                data={{
                  title: "Instant Doctor Booking",
                  img: onlineConsultation,
                  path: "/online-consultation/preferences",
                }}
              />
              <ConsultationCard
                data={{
                  title: "Book A Preferred Doctor ",
                  img: doctorConsultation,
                  path: "/online-consultation/select-patient",
                }}
              />
            </div>
          </article>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}

export default InstantConsultation;
