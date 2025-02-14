import React from "react";
import Link from "next/link";
import { BookCall } from "./common/BookCall";
import Localization from "./common/Localization";
function Footer() {
  return (
    <footer className="bg-black-1000 overflow-hidden rounded-t-2xl lg:pt-20 pt-8">
      <div className="lg:pb-20 pb-5 border-b border-black-1100">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex lg:flex-row flex-col gap-6">
            <div className="lg:w-5/12 w-full lg:text-start text-center">
              <h2 className="lg:text-[42px] text-[26px] font-semibold lg:leading-[50px] text-gray-1000 mb-1 lg:mb-2">Still have questions?</h2>
              <p className="lg:text-lg text-sm lg:leading-7 font-grotesque-arabic-pro2 font-normal text-gray-1100">
                Can’t find what you’re looking for? Please get in touch.
              </p>
              <div className="flex lg:justify-start flex-wrap justify-center items-center gap-6 mt-5 lg:mt-10">
                <BookCall/>
                <span className="text-lg font-normal leading-7 text-gray-1600 block">or</span>
                <a href="mailto:info@daasign.com" className="lg:text-[28px] hover:underline  text-xl text-white font-grotesque-arabic-pro font-medium">info@daasign.com</a>
              </div>
            </div>
            <hr className="lg:border-none border-b border-t-0 border-black-1100 w-[calc(100%_+_48px)] -ml-6 my-6 block lg:hidden" />
            <div className="md:w-1/3 w-full">
              <div className="w-fit lg:mx-auto">
                <span className="block lg:text-base text-xs font-semibold text-gray-1600 mb-4">Navigation</span>
                <ul>
                  <li>
                    <Link
                      href="/#agenda-sec"
                      className="inline-block lg:text-2xl hover:underline text-lg font-medium font-grotesque-arabic-pro text-gray-1000 mb-3 lg:mb-6">
                      Agenda
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      href="/#work-sec"
                      className="inline-block lg:text-2xl hover:underline text-lg font-medium font-grotesque-arabic-pro text-gray-1000 mb-3 lg:mb-6">
                      How does it work?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#case-study-sec"
                      className="inline-block lg:text-2xl hover:underline text-lg font-medium font-grotesque-arabic-pro text-gray-1000 mb-3 lg:mb-6">
                      Case studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#pricing-sec"
                      className="inline-block lg:text-2xl hover:underline text-lg font-medium font-grotesque-arabic-pro text-gray-1000 mb-3 lg:mb-6">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faqs-sec"
                      className="inline-block lg:text-2xl hover:underline text-lg font-medium font-grotesque-arabic-pro text-gray-1000 mb-3 lg:mb-6">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/4 w-full">
              <div className="w-fit lg:mx-auto">
                <span className="block lg:text-base text-xs font-semibold text-gray-1600 mb-4">Elsewhere</span>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="inline-block lg:text-2xl hover:underline text-lg font-medium font-grotesque-arabic-pro text-gray-1000 mb-3 lg:mb-6">
                      LinkedIn
                    </Link>
                  </li>{" "}
                  <li>
                    <Link target="_blank"
                      href="https://meetings.hubspot.com/julien-kreuk"
                      className="inline-block lg:text-2xl hover:underline text-lg font-medium font-grotesque-arabic-pro text-gray-1000 mb-3 lg:mb-6">
                      Calendly
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] py-[22px] mx-auto px-5">
        <div className="flex md:flex-row flex-col md:items-center gap-4 justify-between">
          <Localization/>
          <div className="flex sm:items-center flex-wrap sm:gap-6 gap-2">
            <p className="md:text-base text-xs font-semibold text-gray-1700">©2025 Daasign. All rights reserved.</p>
            <Link href="/" className="md:text-base text-xs font-semibold underline text-gray-1700">
              Privacy
            </Link>
            <Link href="/" className="md:text-base text-xs font-semibold underline text-gray-1700">
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
