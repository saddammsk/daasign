type BadgeProps = {
     label: string;
};

export const Badge = ({ label }: BadgeProps) => (
     <li className="text-sm font-semibold font-Chakra text-gray-1500 leading-3 bg-gray-1400/[29%] py-1.5 px-3 inline-block">
          {label}
     </li>
);


export default Badge
