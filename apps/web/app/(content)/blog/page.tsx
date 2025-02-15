import { BlogPosts } from "@/components/blog-posts";

export default function Page() {
  return (
    <section className="mx-auto w-full max-w-2xl overflow-y-hidden">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Blog</h1>
      <p className="mb-4 text-muted-foreground">
        {`Welcome to the Blog! Read on for release notes on Tune Lab and Llama Lab, and for practical guides on tools used in the stack.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
