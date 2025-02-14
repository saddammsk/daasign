import React from "react";
const logos = [
  "logo1.svg",
  "logo2.svg",
  "logo3.svg",
  "logo4.svg",
  "logo5.svg",
  "logo6.svg",
  "logo7.svg",
  "logo8.svg",
  "logo-9.svg",
  "logo-10.svg",
  "logo-11.svg",
  "logo-12.svg",
  "logo-13.svg",
  "logo-14.svg",
  "logo-15.svg",
  "logo-16.svg",
  "logo-17.svg",
  "logo-18.svg",
];
function Partner() {
  return (
    <div>
      <div className="slider-sec py-8">
        <div className="overflow-hidden relative">
          <div className="slide-track flex w-[calc(100px_*_14)]">
            {logos.map((logo, index) => (
              <div key={index} className="slide md:w-[232px] w-[160px] px-10 py-3 flex items-center justify-center">
                <img src={`images/${logo}`} className="max-w-[232px] w-full max-h-[100px] object-contain" alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
