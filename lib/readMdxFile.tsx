import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access, readdir } from "fs/promises";
import { notFound } from "next/navigation";

const POSTS_FOLDER = path.join(process.cwd(), "app/writings/_posts");

async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

export default async function getMdxDatas({
  params,
}: {
  params: { slug: string };
}) {
  const markdown = await readPostFile(params.slug);

  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{ title: string,date:Date }>({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  // do something with frontmatter, like set metadata or whatever
  return {
    content,
    frontmatter,
    nextLink: "nextLink",
    previousLink: "previousLink",
  };
}

// get all slugs title and summary

export const getFiles = async () => {
  const files = path.resolve(POSTS_FOLDER);
  const fileNames = await readdir(files);

  const data = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.resolve(POSTS_FOLDER, fileName);
      const fileContent = await readFile(filePath, { encoding: "utf8" });
      const { frontmatter } = await compileMDX<{
        title: string;
        summary: string;
        date: string;
        image: string;
        slug: string;
      }>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });
      return {
        title: frontmatter.title,
        summary: frontmatter.summary,
        date: frontmatter.date,
        image: frontmatter.image,
        slug: fileName.replace(".mdx", ""),
      };
    })
  );
  return data;
};

export const getFilesWithCount = async (count: number) => {
  const files = path.resolve(POSTS_FOLDER);
  const fileNames = await readdir(files);

  const data = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.resolve(POSTS_FOLDER, fileName);
      const fileContent = await readFile(filePath, { encoding: "utf8" });
      const { frontmatter } = await compileMDX<{
        title: string;
        summary: string;
        date: string;
        image: string;
        slug: string;
      }>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });
      return {
        title: frontmatter.title,
        summary: frontmatter.summary,
        date: frontmatter.date,
        image: frontmatter.image,
        slug: fileName.replace(".mdx", ""),
      };
    })
  );
  return data.slice(0, count);
}

