import Link from "next/link"
import YouTubeIcon from '@/app/icons/youtube'

export default function Footer() {
    return (
        <section className="max-w-2xl font-sans text-center">
        <div className="flex justify-center gap-4">
            <Link className="flex" href="https://www.youtube.com/@AnAiEngineer" target="_blank">
                  <YouTubeIcon/>
            </Link>
            <hr/>
        </div>
        <p className="mt-8 text-neutral-900 dark:text-neutral-900">
        © {new Date().getFullYear()} Theosis AI, Justin Goheen
      </p>
        </section>
    );
}