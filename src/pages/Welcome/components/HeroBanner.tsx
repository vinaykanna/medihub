import HeroImage from "@assets/images/welcome_hero.png";
import TextField from "@components/TextField";
import location from "@assets/images/location.svg";
import search from "@assets/images/search.svg";
function HeroBanner() {
  return (
    <section
      className="w-full h-[695px] px-24 flex items-center gap-5 justify-between
      bg-gradient-to-b from-primary-light from-10%
    "
    >
      <article className="flex-1">
        <h1 className="text-4xl leading-[50px] font-nunito-bold text-primary-solid">
          Providing Quality Healthcare <br />{" "}
          <span className="text-secondary-solid">
            For a Brighter and Healthy Future
          </span>
        </h1>
        <div className="flex gap-5 mt-5">
          <TextField
            placeholder="Location"
            startIcon={<img src={location} />}
          />
          <TextField placeholder="Search" startIcon={<img src={search} />} />
        </div>
        <h3 className="text-xl mt-5 text-[#656565]">
          First Consultation is Free for Everyone.*
        </h3>
      </article>
      <article>
        <img src={HeroImage} className="max-w-[523px] h-auto" alt="" />
      </article>
    </section>
  );
}

export default HeroBanner;
