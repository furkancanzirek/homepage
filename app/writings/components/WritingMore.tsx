import { getFilesWithCount } from "@/lib/readMdxFile";
import WritingCard from "./WritingCard";

const WritingMore = async () => {
  const writes = await getFilesWithCount(2);

  return (
    <div className="flex flex-col gap-5">
      {writes.map((write) => (
        <WritingCard key={write.slug} {...write} />
      ))}
    </div>
  );
};

export default WritingMore;
