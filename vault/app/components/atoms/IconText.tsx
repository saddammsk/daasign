type IconTextProps = {
     icon: string;
     text: string;
     className?: string;
};

export const IconText = ({ icon, text, className = "" }: IconTextProps) => (
     <div className={`flex items-center gap-1 ${className}`}>
          <img src={icon} alt="" />
          {text}
     </div>
);
