import Link from "next/link"
import YouTubeIcon from '@/app/components/ui/youtube'

export default function Footer() {
    return (
        <section className="max-w-2xl font-sans text-center space-y-6">
            <div className="flex justify-center gap-4">
                <Link className="flex hover:opacity-80 transition-opacity" 
                      href="https://www.youtube.com/@AnAiEngineer" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube Channel">
                    <YouTubeIcon/>
                </Link>
            </div>
            <p className="text-sm text-mono text-neutral-500">
                © {new Date().getFullYear()} Theosis AI
            </p>
        </section>
    );
}