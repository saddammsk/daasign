import React from "react";

type SpotlightCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  borderColorStart?: string;  
  spotlightColor?: string;    
  spotlightColorbg?: string;    
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  imageSrc,
  title,
  subtitle,
  borderColorStart = "#ff0000",
  spotlightColor = "rgba(255,0,0,0.3)",
  spotlightColorbg = "",
}) => {
  const gradientId = `gradient-stroke-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div
      className="relative w-32 p-3 rounded-xl shadow-lg text-white text-center"
      style={{
        background: `radial-gradient(ellipse at top, ${spotlightColor}, transparent 70%)`,
      }}
    >
     <div className='absolute inset-0 bg-gradient-to-b to-blue-1300 pointer-events-none rounded-[16px] z-0' 
       style={{
        backgroundImage: `linear-gradient(to bottom, ${spotlightColorbg}, #0B0A1A)`,
      }}
     />

    <div className="absolute bg-[url(/images/geometric-triangle-pattern.jpg)] bg-[length:130%] bg-no-repeat bg-center w-full h-full left-0 top-0 opacity-5 rounded-[20px] bg-blend-saturation bg-gradient-to-b from-black to-black "></div>

      <svg
        className="absolute inset-0 w-[102%] h-[102%] -top-0.5 -left-[1px] z-0 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={borderColorStart} stopOpacity="1" />
            <stop offset="100%" stopColor='transparent' stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          x="1.5"
          y="1.5"
          width={97}
          height={90}
          rx={12}
          ry={12}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={2}
          strokeDasharray="13.7"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 text-center">
        <img
          src={imageSrc}
          alt={title}
          className="mx-auto inline-block mb-3 object-contain"
        />
        <h2 className="text-white font-gotham font-bold text-xl">{title}</h2>
        <p className="text-white/[20%] text-xs font-gotham font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default SpotlightCard;
