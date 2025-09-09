'use client'
import Link from "next/link";
import Buttons from "@/app/ui/Buttons";
import InputField from "@/app/ui/InputField";
import { useState } from "react";

export default function page() {
     const [code, setCode] = useState("");
     return (
          <div className="bg-gray-1000 dark:bg-black-1200 min-h-screen py-10 font-geist flex flex-col items-center justify-center px-6">
               <div className="max-w-[420px] w-full mx-auto">
                    <div className="text-center mb-6">
                         <img src="images/logo.svg" className="inline-block dark:hidden" alt="" />
                         <img src="images/dark-logo.svg" className="hidden dark:inline-block" alt="" />
                    </div>
                    <div className="bg-white dark:bg-black-1100 dark:border-white/[10%] border p-6 w-full border-gray-1100 rounded-[10px] shadow-3xl">
                         <div className="text-center mb-6">
                              <h2 className="text-2xl font-semibold dark:text-gray-1400 leading-8 mb-2 tracking-[-0.4px] text-black-1000">Welcome back</h2>
                              <p className="text-sm font-normal dark:text-gray-1500 leading-5 text-gray-1200">Login to your Acme Inc account</p>
                         </div>
                         <h6 className="text-sm font-medium leading-5 dark:text-gray-1400 mb-6 text-black-1000">Enter the 6-digit code sent to john@example.com</h6>
                         <form action="">
                              <div className="mb-6">
                                   <InputField
                                        label="Verification Code"
                                        name="verificationCode"
                                        placeholder="Input verification code.."
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                   />
                              </div>

                              <Buttons
                                   type="submit"
                                   className={`${code.trim()
                                        ? "opacity-100 pointer-events-auto"
                                        : "opacity-50 pointer-events-none"
                                        }`}
                              >
                                   Login
                              </Buttons>

                              <p className="text-sm text-center dark:text-gray-1400 mt-4 font-medium leading-[100%] text-black-1000">
                                   <Link href="/" className="">
                                        Resend verification code
                                   </Link>
                              </p>
                         </form>
                    </div>
                    <div className="text-center mt-6">
                         <p className="text-xs max-w-[208px] dark:text-gray-1500 mx-auto font-normal leading-4 text-gray-1200">By clicking continue, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="/" className="underline">Privacy Policy</Link> </p>
                    </div>
               </div>
          </div>
     )
}
