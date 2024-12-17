import star from "@assets/images/star.svg";
import starOutlined from "@assets/images/star_outlined.svg";
import { twMerge } from "tailwind-merge";
function Rating({ rating = 0, className = "" }) {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      {[...Array(rating)].map((_, index) => {
        return <img src={star} alt="" key={index} />;
      })}
      {[...Array(5 - rating)].map((_, index) => {
        return <img src={starOutlined} alt="" key={index} />;
      })}
    </div>
  );
}

export default Rating;
