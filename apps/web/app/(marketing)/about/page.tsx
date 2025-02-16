import About from './about.mdx'
 
export default function Page() {
  return (
    <div 
    className="prose
    prose-headings:mt-8 
    prose-headings:font-semibold 
    prose-headings:text-foreground
    prose-h1:text-2xl
    prose-h2:text-xl
    prose-h3:text-lg
    prose-h4:text-base
    prose-h5:text-sm
    prose-h6:text-xs
    prose-p:text-muted-foreground
    prose-a:text-muted-foreground hover:prose-a:opacity-80
    prose-strong:text-foreground
    prose-code:text-primary prose-code:bg-muted
    prose-pre:bg-muted prose-pre:text-foreground
    dark:prose-invert
    dark:prose-headings:text-secondary
    dark:prose-p:text-foreground
    dark:prose-strong:text-foreground
    dark:prose-code:text-primary dark:prose-code:bg-muted
    dark:prose-pre:bg-muted dark:prose-pre:text-foreground
    mx-auto 
    w-full 
    max-w-2xl 
    overflow-y-hidden"
    >
      <About />
    </div>
  )
}