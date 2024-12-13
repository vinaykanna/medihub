import testimonial from "@assets/images/testimonial.png";

const TESTIMONIALS = [
  {
    desc: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
    img: testimonial,
    rating: 4,
  },
  {
    desc: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
    img: testimonial,
    rating: 3,
  },
  {
    desc: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
    img: testimonial,
    rating: 2,
  },
  {
    desc: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
    img: testimonial,
    rating: 1,
  },
];

const TESTIMONIALS_SWIPER_BREAKPOINTS = {
  425: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 1,
  },
  1440: {
    slidesPerView: 3,
    slidesPerGroup: 1,
  },
};

export { TESTIMONIALS, TESTIMONIALS_SWIPER_BREAKPOINTS };
