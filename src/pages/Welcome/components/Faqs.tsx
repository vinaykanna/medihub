import { faqs } from "@constants/faqs.constants";
import chevron from "@assets/images/chevron.svg";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

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

const Faq = ({ faq }: any) => {
  const answerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-1/2 mt-12">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          src={chevron}
          className={twMerge(
            `transition-all duration-300 ${open && "rotate-90"}`
          )}
          alt=""
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
