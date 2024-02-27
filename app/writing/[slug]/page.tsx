import getMdxDatas from "@/lib/readMdxFile";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await getMdxDatas({ params });

  return (
    <div className="content-wrapper">
      <div className="content">
        <>{content}</>
      </div>
    </div>
  );
}
