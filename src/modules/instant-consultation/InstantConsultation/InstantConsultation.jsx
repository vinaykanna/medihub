import { twJoin } from "tailwind-merge";
import instantConsultationHero from "@assets/images/instant_consultation_hero.png";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Testimonials from "@modules/instant-consultation/InstantConsultation/components/Testimonials";
import onlineConsultation from "@assets/images/online-consultation.jpg";
import doctorConsultation from "@assets/images/doctor-consultation.jpg";
import { Link } from "react-router-dom";

function InstantConsultation() {
  return (
    <>
      <section
        className={twJoin(
          "w-full",
          "bg-gradient-to-b from-[#FBE5D8] from-50% to-[#FDF2EC] to-100%"
        )}
      >
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
              <BookingCard
                data={{
                  title: "Instant Doctor Booking",
                  img: onlineConsultation,
                  path: "/online-consultation",
                }}
              />
              <BookingCard
                data={{
                  title: "Book A Preferred Doctor ",
                  img: doctorConsultation,
                  path: "/online-consultation",
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

function BookingCard({ data }) {
  return (
    <article
      className={twJoin(
        "rounded-3xl shadow-[0px_4px_12px_2px_#7BAED566]",
        "overflow-hidden bg-secondary-light border-[1px] border-secondary-solid"
      )}
    >
      <img src={data?.img} alt="" className="w-full h-[209px]" />
      <footer className="p-5">
        <h3 className="text-primary-solid text-[22px] font-nunito-bold">
          {data?.title}
        </h3>
        <Link
          to={data?.path}
          className={twJoin(
            "inline-block mt-[14px] px-5 py-2 rounded-3xl",
            "bg-secondary-solid text-white text-lg font-nunito-medium"
          )}
        >
          Book Now
        </Link>
      </footer>
    </article>
  );
}

export default InstantConsultation;
