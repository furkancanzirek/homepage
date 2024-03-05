import { getRandFiles } from "@/lib/readMdxFile";
import WritingCard from "./WritingCard";

const WritingMore = async ({
  slug
}: {
  slug: string;
}) => {
  
  
  const writes = await getRandFiles(2,slug);

  return (
    <div className="flex flex-col gap-5">
      {writes.map((write) => (
        <WritingCard key={write.slug} {...write} />
      ))}
    </div>
  );
};

export default WritingMore;
