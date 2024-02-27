import { StarIcon } from "lucide-react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";

interface WritingCardProps {
  title: string;
  summary: string;
  date: string;
  image: string;
}

const WritingCard = ({ title, summary, date, image }: WritingCardProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5">
      <div className="flex flex-col space-y-1 flex-1">
        <h2>{title}</h2>
        <p className="leading-5 text-gray-600 pt-1 line-clamp-2">{summary}</p>
        <div className="flex items-center space-x-2 text-gray-600 text-xs pt-2">
          <span>{date}</span>
        </div>
      </div>
      <div
        className="h-40 md:w-60 relative
         max-w-52 md:max-w-60
        aspect-[1/1] md:aspect-auto"
      >
        <Image src={image} alt="Picture of the author" layout="fill" />
      </div>
      {/* <div className={"image-container h-40"}>
        <Image
          src={image}
          alt="Picture of the author"
          layout="fill"
          className={"image animate-reveal "}
        />
      </div> */}
    </div>
  );
};

export default WritingCard;
