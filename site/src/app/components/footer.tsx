import Link from "next/link"
import YouTubeIcon from '@/app/components/ui/youtube'
import { Linkedin } from 'lucide-react';

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
                      href="https://www.linkedin.com/in/jxtngx" 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube Channel">
                    <Linkedin width="24" height="24" viewBox="0 0 24 24"/>
                </Link>
            </div>
            <p className="text-sm text-mono text-neutral-500">
                © {new Date().getFullYear()} Theosis AI, Justin Goheen
            </p>
        </section>
    );
}