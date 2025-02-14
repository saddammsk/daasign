import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
function Accordion() {
  return (
    <div>
      <div className="w-full md:pb-20 py-8">
        <div className="group">
          <Disclosure
            as="div"
            className="lg:p-8 p-5 mb-4  bg-black-1000 border border-white/[10%] rounded-xl group-open:bg-black-1100"
            defaultOpen={true}>
            <DisclosureButton className="group text-start flex w-full items-center justify-between">
              <span className="lg:text-[28px] text-xl font-semibold text-gray-1000 leading-8">
              I already know what I want. Can you help me?
              </span>
              <img src="images/plus.svg" alt="" className="group-data-[open]:hidden"></img>
              <img src="images/minus.svg" alt="" className="hidden group-data-[open]:flex items-center justify-center"></img>
            </DisclosureButton>
            <DisclosurePanel className="pt-3">
              <p className="lg:text-lg text-sm font-normal leading-7 text-gray-1100 max-w-[767px]">
              Absolutely! Book a call, and we’ll discuss your needs to create a tailored offer just for you.
              </p>
            </DisclosurePanel>
          </Disclosure>
        </div>
        <Disclosure
          as="div"
          className="lg:p-8 p-5 mb-4 bg-black-1000 border border-white/[10%] rounded-xl group-data-[open]:bg-black-1100"
          defaultOpen={false}>
          <DisclosureButton className="group text-start flex w-full items-center justify-between">
            <span className="lg:text-[28px] text-xl font-semibold text-gray-1000 leading-8">
            Are you available on-site?
            </span>
            <img src="images/plus.svg" alt="" className="group-data-[open]:hidden"></img>
            <img src="images/minus.svg" alt="" className="hidden group-data-[open]:flex items-center justify-center"></img>
          </DisclosureButton>
          <DisclosurePanel className="pt-3">
            <p className="lg:text-lg text-sm font-normal leading-7 text-gray-1100 max-w-[767px]">
            Yes, we offer on-site collaboration and create a custom plan tailored to your needs. Please contact us for more details.
            </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure
          as="div"
          className="lg:p-8 p-5 mb-4 bg-black-1000 border border-white/[10%] rounded-xl group-data-[open]:bg-black-1100"
          defaultOpen={false}>
          <DisclosureButton className="group text-start flex w-full items-center justify-between">
            <span className="lg:text-[28px] text-xl font-semibold text-gray-1000 leading-8">
            Why are there so few slots available?
            </span>
            <img src="images/plus.svg" alt="" className="group-data-[open]:hidden"></img>
            <img src="images/minus.svg" alt="" className="hidden group-data-[open]:flex items-center justify-center"></img>
          </DisclosureButton>
          <DisclosurePanel className="pt-3">
            <p className="lg:text-lg text-sm font-normal leading-7 text-gray-1100 max-w-[767px]">
            We limit ourselves to just three projects per month to ensure we deliver top-quality design work with full focus and attention.
            </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure
          as="div"
          className="lg:p-8 p-5 mb-4 bg-black-1000 border border-white/[10%] rounded-xl group-data-[open]:bg-black-1100"
          defaultOpen={false}>
          <DisclosureButton className="group text-start flex w-full items-center justify-between">
            <span className="lg:text-[28px] text-xl font-semibold text-gray-1000 leading-8">
            I want to keep my idea secret. How do you handle that?
            </span>
            <img src="images/plus.svg" alt="" className="group-data-[open]:hidden"></img>
            <img src="images/minus.svg" alt="" className="hidden group-data-[open]:flex items-center justify-center"></img>
          </DisclosureButton>
          <DisclosurePanel className="pt-3">
            <p className="lg:text-lg text-sm font-normal leading-7 text-gray-1100 max-w-[767px]">
            We completely understand and respect confidentiality. We're happy to sign an NDA to ensure your product idea remains secure.
            </p>
          </DisclosurePanel>
        </Disclosure>

      </div>
    </div>
  );
}

export default Accordion;
