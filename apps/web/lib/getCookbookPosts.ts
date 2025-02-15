import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  subtitle: string;
  publishedAt: string;
  summary: string;
  image?: string;
  position: any;
  draft: boolean;
  tag?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  const frontMatterBlock = match![1];

  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock
    ? frontMatterBlock.trim().split("\n")
    : [];
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    if (key) {
      const trimmedKey = key.trim() as keyof Metadata;
      metadata[trimmedKey] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

function getAllMDXFiles(dir: string): string[] {
  const files: string[] = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllMDXFiles(fullPath));
    } else if (path.extname(item) === ".mdx") {
      files.push(fullPath);
    }
  });

  return files;
}

export function getCookbookPosts({
  includeDrafts = false,
}: { includeDrafts?: boolean } = {}) {
  const POSTS_PATH = path.join(
    process.cwd(),
    "app",
    "(content)",
    "cookbook",
    "posts",
  );

  const posts = getAllMDXFiles(POSTS_PATH).map((filePath) => {
    const { metadata, content } = readMDXFile(filePath);
    const slug = path.basename(filePath, path.extname(filePath));

    // Extract directory name from path and check if it matches [...dirname] pattern
    const dirMatch = filePath.match(/\[{2}(.+?)\]{2}/);
    if (dirMatch) {
      const tag = dirMatch[1]?.split("...")[1];
      metadata.tag = tag;
    }

    return {
      metadata,
      slug,
      content,
    };
  });

  return includeDrafts ? posts : posts.filter((post) => post.metadata.draft !== true);
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
