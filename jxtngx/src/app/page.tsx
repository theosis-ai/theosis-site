import Link from "next/link"
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NorthEastIcon from '@mui/icons-material/NorthEast';
// import Image from 'next/image'

export default function Home() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh] bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6">
        <section className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl font-roboto tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            JXTNGX
          </h1>
          <p className="text-xl font-roboto tracking-tight text-gray-900 sm:text-xl md:text-2xl">
            {`
          Open Source Artificial Intelligence
        `}
          </p>
          <div className="flex justify-center gap-4">
          <Link className="flex" href="https://github.com/jxtngx" target="_blank">
              <GitHubIcon fontSize="large"/>
          </Link>
          </div>
          <div className="flex justify-center gap-4">
          <Link className="flex" href="https://cookbook.jxtngx.ai/docs/home" target="_blank">
            <p className="text-lg text-gray-900">
              {`
          Gen AI Cookbook
        `}
            <NorthEastIcon className="text-lg text-gray-900"/>
            </p>
          </Link>
          </div>
          <div className="flex justify-center gap-4">
          <Link className="flex" href="https://github.com/jxtngx/nemo-lab" target="_blank">
            <p className="text-lg text-gray-900">
              {`
          NeMo Lab
        `}
            <NorthEastIcon className="text-lg text-gray-900"/>
            </p>
          </Link>
          </div>
          <div className="flex justify-center gap-4">
          <Link className="flex" href="https://theaiengineer.substack.com" target="_blank">
            <p className="text-lg text-gray-900">
              {`
          The AI Engineer Blog
        `}
           <NorthEastIcon className="text-lg text-gray-900"/>
            </p>
          </Link>
          </div>
          <div className="flex justify-center gap-4">
          <Link className="flex" href="https://www.youtube.com/@AnAiEngineer" target="_blank">
                <YouTubeIcon fontSize="medium"/>
          </Link>
          <Link className="flex" href="https://www.linkedin.com/in/jxtngx/" target="_blank">
                <LinkedInIcon fontSize="medium"/>
          </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
