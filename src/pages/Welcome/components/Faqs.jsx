import { faqs } from "@constants/faqs.constants";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Chevron from "@assets/icons/Chevron";

function Faqs() {
  return (
    <section className="py-[102px] px-[20px] max-w-[1024px] mx-auto">
      <h1 className="text-center text-primary-solid text-4xl">FAQs</h1>
      <article className="flex flex-wrap justify-between">
        {faqs.map((faq, index) => (
          <Faq faq={faq} key={index} />
        ))}
      </article>
    </section>
  );
}

const Faq = ({ faq }) => {
  const answerRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-1/2 mt-12">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Chevron
          fill="#7AAED3"
          className={twMerge(
            `transition-all duration-300 ${open && "rotate-90"}`
          )}
        />
        <h2 className="text-primary-solid text-lg">{faq.question}</h2>
      </div>
      <div
        ref={answerRef}
        className={twMerge(
          `overflow-hidden transition-all duration-300 mt-2 pl-6`
        )}
        style={{
          maxHeight: open ? `${answerRef.current?.scrollHeight}px` : "0",
        }}
      >
        <p className="text-secondary-solid text-base">{faq.answer}</p>
      </div>
    </div>
  );
};

export default Faqs;
