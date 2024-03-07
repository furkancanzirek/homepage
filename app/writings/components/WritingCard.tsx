import Link from "next/link";
import Image from "next/image";
import { dateToLocaleShort } from "@/lib/utils";

interface WritingCardProps {
  title: string;
  summary: string;
  date: string;
  image: string;
  slug: string;
}

const WritingCard = ({
  title,
  summary,
  date,
  image,
  slug,
}: WritingCardProps) => {
  date = dateToLocaleShort(new Date(date));
  return (
    <Link href={`/writings/${slug}`}>
      <div className="flex flex-col-reverse sm:flex-row gap-5">
        <div className="flex flex-col space-y-1 flex-1">
          <h2>{title}</h2>
          <p className="leading-5 text-gray-600 pt-1 line-clamp-2">{summary}</p>
          <div className="flex items-center space-x-2 text-gray-600 text-xs pt-2">
            <span>{date}</span>
          </div>
        </div>
        <div
          className="h-40 sm:w-60 relative
         max-w-52 sm:max-w-60
        aspect-[1/1] sm:aspect-auto
        
        "
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 640px) 238px, 206px"
            className={"animate-reveal object-cover"}
            
          />
        </div>
      </div>
    </Link>
  );
};

export default WritingCard;
