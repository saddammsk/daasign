import Badge from "../atoms/Badge";

type Props = {
     tags: string[];
};

export const EventTags = ({ tags }: Props) => (
     <ul className="mt-4 border-b gap-0.5 flex border-gray-1600 pb-5 mb-5">
          {tags.map((tag) => (
               <Badge key={tag} label={tag} />
          ))}
     </ul>
);
