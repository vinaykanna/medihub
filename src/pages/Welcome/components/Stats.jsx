import play from "@assets/images/play.svg";
import { twJoin, twMerge } from "tailwind-merge";
function Stats() {
  return (
    <section className="grid grid-cols-5 px-28 mx-auto gap-10 -mt-28">
      <article
        className={twJoin(
          "border-[20px] border-black min-h-[500px] col-span-3",
          "rounded-2xl  bg-[#C1C1C1]",
          "flex justify-center items-center"
        )}
      >
        <div
          className={twJoin(
            "w-[51px] h-[51px] bg-white rounded-full",
            "flex justify-center items-center cursor-pointer"
          )}
        >
          <img src={play} alt="" />
        </div>
      </article>
      <article className="col-span-2">
        <h3 className="text-4xl font-nunito-bold text-primary-solid">
          One Stop Wellness
        </h3>
        <h5 className="text-xl font-nunito-bold text-secondary-solid">
          For you Well- being
        </h5>
        <div className="mt-10">
          <Stat title="90+ Lakhs" desc="Users Chose Visit" />
          <Stat title="6+ Lakhs" desc="Health Check-Ups done" />
          <Stat title="90%" desc="User Satisfaction rate" />
        </div>
      </article>
    </section>
  );
}

function Stat({ className = "", title, desc }) {
  return (
    <div className={twMerge("mt-4", className)}>
      <h3 className="text-3xl font-nunito-bold text-primary-solid">{title}</h3>
      <p className="text-base font-nunito-medium text-secondary-solid">
        {desc}
      </p>
    </div>
  );
}

export default Stats;
