import getMdxDatas from "@/lib/readMdxFile";
import WritingMore from "../components/WritingMore";
import { PageTitle } from "@/components/commons/PageTitle";
import { dateToLocaleShort } from "@/lib/utils";
import MobileMenuDrawer from "@/components/commons/MobileMenuDrawer";
import Header from "@/components/commons/Header";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, frontmatter, nextLink, previousLink } = await getMdxDatas({
    params,
  });

  return (
    <>
      <Header goBackLink="/writings" />
      <div className="content-wrapper writings-wrapper">
        <div className="content">
          <PageTitle
            className="mb-6 flex flex-col gap-3"
            title={frontmatter.title}
            subtitle={
              <time
                dateTime={frontmatter.date.toString()}
                className="text-gray-400"
              >
                {dateToLocaleShort(frontmatter.date)}
              </time>
            }
          />

          <>{content}</>
          <div className="mt-10 py-10 border-t ">
            <WritingMore />
          </div>
        </div>
      </div>
    </>
  );
}
