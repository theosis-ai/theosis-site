import Link from "next/link"
import GitHub from "@/app/components/ui/github"
import { ExternalLink } from 'lucide-react';

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
                    // { href: "https://github.com/theosis-ai/llama-lab", text: "Llama Lab" },
                    { href: "https://github.com/theosis-ai/tune-lab", text: "Tune Lab" },
                    // { href: "https://theaiengineer.substack.com", text: "The AI Engineer" },
                ].map((link) => (
                    <Link key={link.href}
                          className="flex justify-center items-center hover:opacity-80 transition-opacity" 
                          href={link.href} 
                          target="_blank"
                          rel="noopener noreferrer">
                        <p className="text-lg text-gray-800">{link.text}</p>
                        <ExternalLink className="ml-1" height="12" width="12"/>
                    </Link>
                ))}
            </div>
        </section>
    );
}
