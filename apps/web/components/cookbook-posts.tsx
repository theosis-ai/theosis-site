import Link from "next/link";
import { getCookbookPosts } from "@/lib/getCookbookPosts";
import { Button } from "@workspace/ui/components/button";

export function CookbookPosts() {
  const allPosts = getCookbookPosts({ includeDrafts: false });

  return (
    <div className="flex flex-col items-center">
      {Object.entries(
        allPosts
          .sort((a, b) => {
            if (a.metadata.position < b.metadata.position) {
              return -1;
            }
            return 1;
          })
          .reduce(
            (acc, post) => {
              const tag = post.metadata.tag;
              if (tag) {
                if (!acc[tag]) acc[tag] = [];
                acc[tag].push(post);
              }
              return acc;
            },
            {} as Record<string, typeof allPosts>,
          ),
      ).map(([tag, posts]) => (
        <div key={tag}>
          {posts.map((post) => (
            <div key={post.slug} className="mb-4">
              <Link
                className="flex items-center"
                href={`/cookbook/${post.slug}`}
              >
                <div className="grid grid-cols-[150px_350px_100px] flex-1">
                  <span>{post.metadata.title}</span>
                  <span className="text-gray-600 text-muted-foreground">
                    {post.metadata.subtitle}
                  </span>
                  <Button
                    className="mb-4 text-xs font-semibold text-muted-foreground tracking-tight h-[calc(theme(spacing.7)_-_1px)]"
                    variant="box"
                    size="sm"
                  >
                    {tag}
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
