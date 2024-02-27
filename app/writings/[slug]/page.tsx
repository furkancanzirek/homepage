import getMdxDatas from "@/lib/readMdxFile";
import WritingMore from "../components/WritingMore";
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, frontmatter, nextLink, previousLink } = await getMdxDatas({
    params,
  });

  return (
    <div className="content-wrapper writings-wrapper">
      <div className="content">
        <>{content}</>
        <div className="mt-10 py-10 border-t ">
          <WritingMore />
        </div>
      </div>
    </div>
  );
}
