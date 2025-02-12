import { Icons } from "@workspace/ui/components/icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto font-mono h-[50dvh]">
      <Link
      href="https://github.com/theosis-ai/"
      target="_blank"
      rel="noopener noreferrer"
      >
      <Icons.gitHub className="h-8 w-8 mb-10" />
      </Link>
      <h1 className="text-4xl font-medium tracking-wider mb-4">Theosis AI</h1>
      <p className="font-sans tracking-wider mb-12 text-center">
      Artificial Intelligence with PyTorch, Llama, Llama Stack, and React
      </p>
      <Link
      className="items-center flex gap-1 p-1"
      href="https://tunelab.theosis.ai"
      target="_blank"
      rel="noopener noreferrer"
      >
      {`Tune Lab`} <ExternalLink height="12" width="12" />
      </Link>
      <Link
      className="items-center flex gap-1 p-1"
      href="https://llamalab.theosis.ai"
      target="_blank"
      rel="noopener noreferrer"
      >
      {`Llama Lab`} <ExternalLink height="12" width="12" />
      </Link>
    </div>
  );
}
