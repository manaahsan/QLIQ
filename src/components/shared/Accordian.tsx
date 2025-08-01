import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Accordian = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-5"
      defaultValue="item-1"
    >
      <AccordionItem
        value="item-1"
        className=" border p-2 rounded-2xl data-[state=open]:bg-[#F7F7F7]"
      >
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border p-2 rounded-2xl data-[state=open]:bg-[#F7F7F7]"
      >
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border p-2 rounded-2xl data-[state=open]:bg-[#F7F7F7]"
      >
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="border p-2 rounded-2xl last:border-b data-[state=open]:bg-[#F7F7F7]"
      >
        <AccordionTrigger>Terms and Conditions</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
