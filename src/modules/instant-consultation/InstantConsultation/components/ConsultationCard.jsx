import { Link } from "react-router-dom";
import { twJoin } from "tailwind-merge";
function ConsultationCard({ data }) {
  return (
    <article
      className={twJoin(
        "rounded-3xl shadow-[0px_4px_12px_2px_#7BAED566]",
        "overflow-hidden bg-[#F2F7FB] border-[1px] border-secondary-solid"
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

export default ConsultationCard;
