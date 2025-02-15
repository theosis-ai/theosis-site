import Link from "next/link";
import { formatDate, getBlogPosts } from "@/lib/getBlogPosts";
import { Button } from "@workspace/ui/components/button";

export function BlogPosts() {
  const allPosts = getBlogPosts({ includeDrafts: false });

  return (
    <div>
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 lg:min-w-xl">
              <p className="w-[350px] tabular-nums">{post.metadata.title}</p>
              <p 
              className="w-[150px] text-muted-foreground"
              >
                {formatDate(post.metadata.publishedAt || new Date().toISOString(), false)}
              </p>
              <Button
                  className="w-18"
                    variant="tag"
                    size="tag"
                  >
                    {post.metadata.tag?.toUpperCase() || "BLOG"}
              </Button>
            </div>
          </Link>
        ))}
    </div>
  );
}