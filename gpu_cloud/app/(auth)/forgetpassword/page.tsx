import Link from "next/link";
import Buttons from "@/app/ui/Buttons";
import InputField from "@/app/ui/InputField";


export default function page() {
     return (
          <div className="bg-gray-1000 dark:bg-black-1200 min-h-screen py-10 font-geist flex flex-col items-center justify-center px-6">
               <div className="max-w-[420px] w-full mx-auto">
                    <div className="text-center mb-6">
                         <img src="images/logo.svg" className="inline-block dark:hidden" alt="" />
                         <img src="images/dark-logo.svg" className="hidden dark:inline-block" alt="" />
                    </div>
                    <div className="bg-white dark:bg-black-1100 dark:border-white/[10%] border p-6 w-full border-gray-1100 rounded-[10px] shadow-3xl">
                         <div className="text-center mb-6">
                              <h2 className="text-2xl dark:text-gray-1400  font-semibold leading-8 mb-2 tracking-[-0.4px] text-black-1000">Forgot Password</h2>
                              <p className="text-sm font-normal leading-5 dark:text-gray-1500 text-gray-1200">Enter your email address below, and we’ll send you a secure link to reset your password.</p>
                         </div>
                         <form action="">
                              <div className="mb-6">
                                   <InputField
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                   />
                              </div>
                              <Buttons type="submit" className="mb-6">Send Reset Link</Buttons>
                              <p className="text-sm text-center font-normal leading-[100%] dark:text-gray-1400 text-black-1000">Already have an account? <Link href="/" className="underline"> Sign in</Link></p>
                         </form>
                    </div>
                    <div className="text-center mt-6">
                         <p className="text-xs max-w-[208px] mx-auto dark:text-gray-1500 font-normal leading-4 text-gray-1200">By clicking continue, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="/" className="underline">Privacy Policy</Link> </p>
                    </div>
               </div>
          </div>
     )
}
