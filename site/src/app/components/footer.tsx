import Link from "next/link"
import YouTubeIcon from '@/app/components/ui/youtube'
import LinkedIn from '@/app/components/ui/linkedin'

export default function Footer() {
    return (
        <section className="max-w-2xl font-sans text-center space-y-6">
            <div className="flex justify-center gap-4">
                <Link className="flex hover:opacity-80 transition-opacity text-neutral-500" 
                      href="https://www.youtube.com/@AnAiEngineer" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube Channel">
                    <YouTubeIcon/>
                </Link>
                <Link className="flex hover:opacity-80 transition-opacity text-neutral-500" 
                      href="https://www.linkedin.com/company/theosis-ai" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube Channel">
                    <LinkedIn/>
                </Link>
            </div>
            <p className="text-[0.625rem] text-mono text-neutral-500">
                © {new Date().getFullYear()} Theosis AI, Justin Goheen
            </p>
        </section>
    );
}