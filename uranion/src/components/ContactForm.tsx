import { useState } from 'react';
// import axios from 'axios';
import type { ChangeEvent, FormEvent } from 'react';

function ContactForm() {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          company: '',
          message: '',
     });

     // const [isSending, setIsSending] = useState(false);
     // const [isSuccess, setIsSuccess] = useState(false);

     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setFormData(prev => ({
               ...prev,
               [e.target.name]: e.target.value
          }));
     };

     // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     //      e.preventDefault();
     //      setIsSending(true);
     //      setIsSuccess(false);

     //      try {
     //           await axios.post('http://localhost:5000/send-email', formData);
     //           setIsSuccess(true);
     //           setFormData({ name: '', email: '', company: '', message: '' }); // optional: reset form
     //      } catch (error) {
     //           console.error('Failed to send email:', error);
     //           alert('Failed to send message.');
     //      } finally {
     //           setIsSending(false);
     //      }
     // };

     return (
          <form action="https://api.web3forms.com/submit"
                method="POST"
               className="mt-6">
                  <input type="hidden" name="access_key" value="9587d42b-b1bb-439a-8985-62e1e01ea75d" />

               <div className="grid md:grid-cols-2 gap-3 mb-5">
                    <div>
                         <label className="text-sm font-semibold font-geist text-white block mb-2">Name</label>
                         <input
                              type="text"
                              name="name"
                              id="name"
                              required
                              placeholder="Enter your name"
                              className="text-sm font-geist leading-[144%] placeholder:text-white/[65%] text-white bg-white/[6%] h-[42px] w-full px-5"
                              onChange={handleChange}
                              value={formData.name}
                         />
                    </div>
                    <div>
                         <label className="text-sm font-semibold font-geist text-white block mb-2">Email</label>
                         <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              placeholder="Enter your email"
                              className="text-sm font-geist leading-[144%] placeholder:text-white/[65%] text-white bg-white/[6%] h-[42px] w-full px-5"
                              onChange={handleChange}
                              value={formData.email}
                         />
                    </div>
               </div>

               <div className="mb-5">
                    <label className="text-sm font-semibold font-geist text-white block mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                         placeholder="Enter company name"
                         className="text-sm font-geist leading-[144%] placeholder:text-white/[65%] text-white bg-white/[6%] h-[42px] w-full px-5"
                         onChange={handleChange}
                         value={formData.company}
                    />
               </div>

               <div className="mb-5">
                    <label className="text-sm font-semibold font-geist text-white block mb-2">Message</label>
                    <textarea
                         name="message"
                         id="message"
                         required
                         rows={4}
                         placeholder="Start Writing Here..."
                         className="text-sm font-geist leading-[144%] placeholder:text-white/[65%] text-white py-3 bg-white/[6%] h-[83px] w-full px-5"
                         onChange={handleChange}
                         value={formData.message}
                    />
               </div>

               <button
                    type="submit"
                    className="flex transition-all ease-in-out duration-500 hover:bg-blue-1000 disabled:opacity-60 cursor-pointer items-center justify-center gap-1.5 text-base font-semibold text-white bg-red-1000 shadow-3xl h-12 w-full"
                    // disabled={isSending}
               >
                    {false ? (
                         <div className="flex items-center justify-center gap-1.5">
                              Loading <span className="animate-pulse">...</span>
                         </div>
                    ) : (
                         <div className="flex items-center justify-center gap-1.5">
                              Send Message <img src="images/arrow-right-up.svg" alt="" />
                         </div>
                    )}
               </button>

               {/* {isSuccess && (
                    <p className="text-center flex gap-2 items-center justify-center text-white text-base font-normal mt-4">
                         <img alt="" src="images/checkmark.svg"></img>  Message sent successfully
                    </p>
               )} */}
          </form>
     );
}

export default ContactForm;
