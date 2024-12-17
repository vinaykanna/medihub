import testimonial1 from "@assets/images/testimonial_1.png";
import testimonial2 from "@assets/images/testimonial_2.png";
import testimonial3 from "@assets/images/testimonial_3.png";
import Rating from "@components/Rating";
import { twJoin } from "tailwind-merge";
function Testimonials() {
  return (
    <section className="px-28 mb-20 mt-28">
      <header className="text-center">
        <h1 className="text-primary-solid text-4xl">
          Our Customers' Experiences
        </h1>
        <p className="text-secondary-solid text-base mt-2">
          From our satisfied customers about how our services have positively
          impacted.
        </p>
      </header>
      <div className="grid grid-cols-3 gap-20 mt-7">
        {testimonials.map((testimonial, index) => {
          return <TestimonialCard testimonial={testimonial} key={index} />;
        })}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <article
      className={twJoin(
        "border-[1px] border-secondary-solid",
        "rounded-3xl p-8 col-span-1 flex flex-col"
      )}
    >
      <Rating rating={testimonial.rating} />
      <p className="mt-5 text-secondary-solid leading-6 text-lg flex-1">
        {testimonial.desc}
      </p>
      <div>
        <img src={testimonial.img} alt="" className="mt-5" />
      </div>
    </article>
  );
}

const testimonials = [
  {
    name: "John Doe",
    desc: "I no longer need to spend hours waiting at the clinic with online consultation. I get the same quality of care from the comfort of my home. It saves me time and effort.",
    img: testimonial1,
    rating: 4,
  },
  {
    desc: "This service makes consultations easy for busy professionals like me. I had a video consultation right from my office, and fit perfectly into my schedule.",
    img: testimonial2,
    rating: 4,
  },
  {
    desc: "I used to worry about delayed reports, but now everything is accessible online within 24-48 hours after the test.",
    img: testimonial3,
    rating: 4,
  },
];

export default Testimonials;
