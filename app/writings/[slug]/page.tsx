import WritingMore from "../components/WritingMore";
import { PageTitle } from "@/components/commons/PageTitle";
import { dateToLocaleShort } from "@/lib/utils";
import Header from "@/components/commons/Header";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";

export default async function PostPage({ params }: { params: any }) {
  const theme = {
    colors: {
      text: "#ccc",
      background: "#ccc",
      primary: "#ccc",
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: "Georgia, serif",
    },
    fontWeights: {
      heading: 700,
    },
    styles: {
      h1: {
        fontSize: 99,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
    },
  };
  const content = fs.readFileSync(
    path.join("app", "writings", "_posts", params.slug + ".mdx")
  );
  const { content: markdown, data: frontmatter } = matter(content);
  return (
    <>
      <Header goBackLink="/writings" />
      <div className="content-wrapper writings-wrapper">
        <div className="content">
          <Link className="hidden md:block py-2" href="/writings">
            <BsArrowLeft size={22} />
          </Link>
          <PageTitle
            className="mb-6 flex flex-col gap-1.5"
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

          <>
            <MDXRemote
              source={markdown}
              options={{
                // @ts-ignore
                mdxOptions: { rehypePlugins: [[rehypePrettyCode]] },
                scope: frontmatter,
                theme,
              }}
            />
          </>
          <div className="mt-10 py-10 border-t">
            <WritingMore slug={params.slug} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("app", "writings", "_posts"));
  const slugs = files.map((file) => file.replace(/\.mdx$/, ""));
  return slugs.map((slug) => ({ params: { slug } }));
}
