import remarkGfm from 'remark-gfm'
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: ["remarkGfm"], // pass as string when using turbopack
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
