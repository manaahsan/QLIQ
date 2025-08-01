import { Accordian } from "@/components/shared/Accordian";


export const Faq = () => {
  return (
    <section className="px-0 md:px-16 lg:px-6 xl:16 mt-14 mx-auto">
      <h1 className="text-[24px] font-semibold md:text-[40px]">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-8 gap-6 mt-6">
        <div className="col-span-8 mt-2 md:col-span-5 ">
          <Accordian />
        </div>
        <div className="col-span-8 md:col-span-3">
          <img src="/assets/images/faq.svg" alt="faq" />
        </div>
      </div>
    </section>
  );
};
