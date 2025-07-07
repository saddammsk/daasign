'use client'
import { Disclosure } from '@headlessui/react'
import { motion } from "framer-motion";

export default function FaqsCourses() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full md:space-y-5 space-y-3">
      {/* defaultOpen={true} */}
        <Disclosure as="div" >
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-base text-start font-semibold text-neutral2">
              What is Designership?
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            Designership is an education platform dedicated to helping designers of all levels excel in UX/UI design through real-world applications since 2021. From beginners to career changers and those looking to advance, our online practical UX/UI design courses and resources are here to help students succeed. So far, we've helped 12,000+ students worldwide get ahead in their careers. Check out our success stories and testimonials and get inspired!
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            How can I learn Figma?
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
                 There are plenty of courses, videos, and resources available online to help you learn Figma. However, if you're looking to quickly master it and apply your skills in the real world, our Ultimate Figma Masterclass is the perfect choice. This top-rated course is designed to integrate seamlessly into a designer's actual workflow. It only takes 10+ hours to complete in your own time! It starts with the basics and progresses to more advanced components and prototyping. You'll learn through a structured approach that reflects a real project. This method allows you to learn theory and apply your new skills in practical settings.
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            How can I learn UX Research?
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            A quick Google or Youtube search can teach the theory behind UX research. But if you want to apply what you learn in the workplace, take our Practical UX Research & Strategy Course. Learn how to apply tactical UX research strategy to your designs and make better-informed decisions. This course takes you through the entire UX research process, from planning your research strategy to getting insights from participants and presenting data-backed design solutions. By the end of the course, you'll be able to deliver business-driven designs and gain the confidence of stakeholders and clients with actionable insights and clear strategies.
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            Where can I find reviews on Designership?
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            You can find them on our Success Stories page or at the bottom of each course and product page. We're proud to share that many of our students have landed new jobs and increased their rates after completing our courses. Don't just take our word for it — see for yourself how Designership can help you get ahead in your professional journey! Whether you’re looking to transition to design or want to sharpen your existing design skills, our courses and resources are here to help you.
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            What courses and products does Designership offer?
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            Our courses help you master the essential techniques and methods to succeed in the UX/UI design industry. They're structured so you can practice and apply what you have learned in real-life projects. Master Figma end-to-end with one of our bestselling courses, The Ultimate Figma Masterclass. Build a design system from scratch, learn advanced responsive UI design tactics, and document designs for hand-over. Learn how to solve real user problems with data-backed solutions in your product designs with Practical UX Research & Strategy course. Our products, on the other hand, help fast-track your design workflow. Speed up your wireframing process with Outline, our Figma Wireframe Kit. Build smart, responsive designs faster with Shipfaster UI: Figma UI Kit & Design System. With Designership, work smarter and accomplish tasks more efficiently. Our team is hard at work creating exciting new projects for you. Stay tuned for more updates coming soon!
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            How will Designership’s courses help improve my UX/UI design skills?
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            Designership courses teach you practical and useful skills you can immediately use in your design work. We know how frustrating it can be to go through theoretical content that doesn’t translate well to real-world scenarios, which is exactly why our courses are different. At Designership, we’re all about bringing learning to life through actual application. We've handpicked seasoned industry experts to create these courses based on their rich expertise, so you know you're learning straight from the top professionals. Our courses cover everything from the basics to the advanced intricacies of UX/UI design, plus the step-by-step process of a design workflow. Join thousands of other students and start making real changes to the way you design!
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            Do discount codes or coupons work for bundles?
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
              <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
                If you're unhappy with your purchase, we'll refund you in full.
              </div>
          </motion.div>
        </>
      )}
        </Disclosure>
     
      </div>

      <p className="md:text-lg text-sm text-neutral2 font-medium text-center mt-8">Still can't find the answer? <a href="#" className="text-primary1">Contact our support</a></p>

    </div>
  )
}
