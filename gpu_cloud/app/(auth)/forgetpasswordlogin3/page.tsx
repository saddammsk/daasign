'use client'
import Link from "next/link";
import Buttons from "@/app/ui/Buttons";
import InputField from "@/app/ui/InputField";

export default function Page() {

     return (
          <div className="bg-gray-1000 dark:bg-black-1200 min-h-screen py-10 font-geist flex flex-col items-center justify-center px-6">
               <div className="max-w-[420px] w-full mx-auto">
                    <div className="text-center mb-6">
                         <img src="images/logo.svg" className="inline-block dark:hidden" alt="" />
                         <img src="images/dark-logo.svg" className="hidden dark:inline-block" alt="" />
                    </div>
                    <div className="bg-white dark:bg-black-1100 dark:border-white/[10%] border p-6 w-full border-gray-1100 rounded-[10px] shadow-3xl">
                         <div className="text-center mb-6">
                              <h2 className="text-2xl font-semibold dark:text-gray-1400 leading-8 mb-2 tracking-[-0.4px] text-black-1000">
                                   Welcome back
                              </h2>
                              <p className="text-sm font-normal dark:text-gray-1500 leading-5 text-gray-1200">
                                   Login to your Acme Inc account
                              </p>
                         </div>

                         <form action="">
                              <div className="mb-6">
                                   <InputField
                                        label="Email"
                                        name="email"
                                        placeholder="Enter your email"

                                   />

                                   <div className="text-end -mb-5">
                                        <Link
                                             href="#"
                                             className="underline text-sm font-normal text-black-1000"
                                        >
                                             Forgot your password?
                                        </Link>
                                   </div>

                                   <InputField
                                        label="Password"
                                        name="password"
                                        placeholder="Enter your password"
                                        type="password"

                                   />
                              </div>

                              <Buttons
                                   type="submit"
                              >
                                   Login
                              </Buttons>

                              <div className="text-center my-7">
                                   <h6 className="text-xs dark:bg-black-1000 dark:text-gray-1500 font-normal relative leading-[100%] text-gray-1200 px-2 w-fit bg-white mx-auto">
                                        Or continue with
                                   </h6>
                                   <div className="bg-gray-1100 dark:bg-white/[10%] h-[1px] w-full -mt-2 -z-10"></div>
                              </div>

                              <Link
                                   href="/"
                                   className="text-sm mb-4 dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 font-medium leading-5 text-black-1000 flex items-center justify-center gap-2 border border-gray-1100 bg-white rounded-lg h-9 shadow-3xl"
                              >
                                   <img src="images/goggle-icon.svg" alt="" /> Login with Google
                              </Link>

                              <Link
                                   href="/"
                                   className="text-sm mb-6 dark:bg-white/[0.05] dark:border-white/[15%] dark:text-gray-1400 font-medium leading-5 text-black-1000 flex items-center justify-center gap-2 border border-gray-1100 bg-white rounded-lg h-9 shadow-3xl"
                              >
                                   <img src="images/github-icon.svg" alt="" /> Login with Github
                              </Link>

                              <p className="text-sm text-center font-normal dark:text-gray-1400 leading-[100%] text-black-1000">
                                   Don’t have an account?{" "}
                                   <Link href="/" className="underline">
                                        Sign up
                                   </Link>
                              </p>
                         </form>
                    </div>

                    <div className="text-center mt-6">
                         <p className="text-xs max-w-[208px] dark:text-gray-1500 mx-auto font-normal leading-4 text-gray-1200">
                              By clicking continue, you agree to our{" "}
                              <Link href="#" className="underline">
                                   Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link href="/" className="underline">
                                   Privacy Policy
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
}
