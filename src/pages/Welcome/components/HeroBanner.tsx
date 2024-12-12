import HeroImage from "@assets/welcome_hero.png";

function HeroBanner() {
  return (
    <section className="w-full h-[695px] px-24 flex items-center gap-5 justify-between">
      <article>
        <h1 className="text-4xl leading-[50px]">
          Providing Quality Healthcare <br />{" "}
          <span className="text-secondary-solid">
            For a Brighter and Healthy Future
          </span>
        </h1>
      </article>
      <article>
        <img src={HeroImage} className="max-w-[523px] h-auto" alt="" />
      </article>
    </section>
  );
}

export default HeroBanner;
