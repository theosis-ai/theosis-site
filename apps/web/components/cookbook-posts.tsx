import Link from "next/link";
import { getCookbookPosts } from "@/lib/getCookbookPosts";

export function CookbookPosts() {
  const allPosts = getCookbookPosts();

  return (
    <div >
      {allPosts
        .sort((a, b) => {
          if (a.metadata.position < b.metadata.position) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/cookbook/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 lg:min-w-xl">
              <p className="w-[200px] tabular-nums">{post.metadata.title}</p>
              <p >{post.metadata.subtitle}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
