import { getFiles } from "@/lib/readMdxFile";
import WritingCard from "./WritingCard";

const WritingList = async () => {
  const writes = await getFiles();

  return (
    <div className="flex flex-col gap-5">
      {writes.map((write) => (
        <WritingCard key={write.slug} {...write} />
      ))}
    </div>
  );
};

export default WritingList;
