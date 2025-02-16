import type { MDXComponents } from "mdx/types";
import { Button } from "@workspace/ui/components/button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    DraftTag: ({ children }) => (
      <Button
        className="w-18"
        variant="tag"
        size="tag"
      >
        {children}
      </Button>
    ),
    ...components,
  };
}
