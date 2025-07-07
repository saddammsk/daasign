'use client'
import { Disclosure } from '@headlessui/react'
import { motion } from "framer-motion";
import Translate from './common/Translate'

export default function Faqs() {
  return (
    <div className="w-full md:px-4 py-10">
      <div className="mx-auto w-full max-w-[768px] md:space-y-5 space-y-3">
      {/* defaultOpen={true} */}
        <Disclosure as="div" >
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <Translate tKey="faq-q1" Tag="span" />
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>

          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <Translate tKey="faq-a1" Tag="span" />
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <Translate tKey="faq-q2" Tag="span" />
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <Translate tKey="faq-a2" Tag="span" />
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <Translate tKey="faq-q3" Tag="span" />
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <Translate tKey="faq-a3" Tag="span" />
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <Translate tKey="faq-q4" Tag="span" />
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <Translate tKey="faq-a4" Tag="span" />
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <Translate tKey="faq-q5" Tag="span" />
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <Translate tKey="faq-a5" Tag="span" />
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <Translate tKey="faq-q6" Tag="span" />
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <Translate tKey="faq-a6" Tag="span" />
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

     
      </div>
    </div>
  )
}
