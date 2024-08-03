import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = () => {
  return ( 
      <div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
        <div className="p-10 md:p-4 md:px-20">
          <div className="text-3xl md:text-7xl font-bold text-black">
            Have questions?
          </div>
          <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
            Get answers.
          </div>
          <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                  <AccordionTrigger>What services does Bluehydra offer?</AccordionTrigger>
                  <AccordionContent>
                      Bluehydra specializes in website and mobile app development, providing end-to-end solutions tailored to your business needs.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                  <AccordionTrigger>How do I start a project with Bluehydra?</AccordionTrigger>
                  <AccordionContent>
                      To start a project, simply contact us through our website or email. We will schedule a consultation to discuss your requirements and provide a detailed proposal.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                  <AccordionTrigger>What is the typical project timeline?</AccordionTrigger>
                  <AccordionContent>
                      Project timelines vary depending on the scope and complexity. Typically, a website can take 4-6 weeks, while a mobile app can take 8-12 weeks. We ensure to keep you updated throughout the process.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                  <AccordionTrigger>What are your pricing options?</AccordionTrigger>
                  <AccordionContent>
                      We offer custom-tailored solutions for each project. Contact us with your project details, and we will provide a competitive quote based on your specific needs.
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                  <AccordionTrigger>Do you provide after sales support?</AccordionTrigger>
                  <AccordionContent>
                      Yes, we offer comprehensive post-launch support and maintenance services to ensure your website or app runs smoothly. Our support team is available Monday to Friday to assist you with any issues or updates.
                  </AccordionContent>
              </AccordionItem>
          </Accordion>
        </div>
      </div> 
  );
}

export default FAQS;
