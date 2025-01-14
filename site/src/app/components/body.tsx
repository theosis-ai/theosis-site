import Link from "next/link"
import GitHub from "@/app/components/ui/github"

export default function Body() {
    return (
        <section className="max-w-2xl font-sans text-center space-y-6">
            <div className="flex justify-center mb-8">
                <Link className="flex items-center hover:opacity-80 transition-opacity" 
                      href="https://github.com/theosis-ai" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Organization">
                    <GitHub />
                </Link>
            </div>
            <div className="grid gap-4">
                {[
                    { href: "https://github.com/theosis-ai/llama-lab", text: "Llama Lab" },
                    { href: "https://llama.theosis.ai/", text: "Llama Cookbook" },
                    { href: "https://github.com/theosis-ai/torch-lab", text: "Torch Lab" },
                    { href: "https://torch.theosis.ai/", text: "Torch Cookbook" },
                    { href: "https://huggingface.co/TheosisAI", text: "Hugging Face" },
                    { href: "https://theaiengineer.substack.com", text: "The AI Engineer Substack" },
                ].map((link) => (
                    <Link key={link.href}
                          className="flex justify-center items-center hover:opacity-80 transition-opacity" 
                          href={link.href} 
                          target="_blank"
                          rel="noopener noreferrer">
                        <p className="text-lg text-gray-800">{link.text}</p>
                        <svg aria-hidden="true" className="ml-1" height="7" viewBox="0 0 6 6" width="7">
                            <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" 
                                  fill="currentColor"/>
                        </svg>
                    </Link>
                ))}
            </div>
        </section>
    );
}
