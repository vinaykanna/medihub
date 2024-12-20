import BookingHeader from "@components/BookingHeader";
import Footer from "@components/Footer";
import Header from "@components/Header";
import bookingSuccessIcon from "@assets/images/booking_success.svg";
import { twJoin } from "tailwind-merge";

function BookingSuccess() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-primary-light from-10%">
        <Header />
        <article className="px-24">
          <div className="mt-6">
            <BookingHeader />
          </div>
          <div
            className={twJoin(
              "border-[1px] border-primary-solid rounded-2xl",
              "p-5 mt-10 mb-10 text-center bg-white"
            )}
          >
            <h2 className="text-primary-solid font-bold font-nunito-bold text-4xl">
              Success!
            </h2>
            <p className="text-lg text-secondary-solid font-nunito-bold mt-2">
              Your booking is confirmed!
            </p>
            <img
              src={bookingSuccessIcon}
              alt="booking success"
              className="mx-auto mt-1"
            />
            <a
              target="_blank"
              href="/receipt/1"
              className="text-secondary-solid text-sm mt-5 underline"
            >
              Click here to download the receipt
            </a>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default BookingSuccess;
