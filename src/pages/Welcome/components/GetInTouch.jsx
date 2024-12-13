import getInTouch from "@assets/images/get_in_touch.png";

function GetInTouch() {
  return (
    <section className="py-[46px] px-[180px] bg-secondary-light text-[28px] flex relative">
      <aside className=" w-1/2">
        <h2 className="text-primary-solid font-nunito-bold">Get In Touch</h2>
        <p className="mt-5 text-grey text-lg">
          Lorem ipsum dolor sit amet, onsectetur adipiscing elit Lorem ipsum
          dolor sit amet, onsectetur adipiscing.
        </p>
        <button className="mt-9 bg-primary-solid text-white px-5 py-2 rounded-[60px] text-xl">
          Book Consultation Now!
        </button>
      </aside>
      <img src={getInTouch} className="absolute bottom-0 right-0" />
    </section>
  );
}

export default GetInTouch;
