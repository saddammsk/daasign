import { IconText } from "../atoms/IconText";

type Props = {
     location: string;
};

export const EventMeta = ({ location }: Props) => (
     <IconText
          icon="/images/location-icon.svg"
          text={location}
          className="text-sm font-Exo font-semibold text-gray-1400"
     />
);
