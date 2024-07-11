import Link from "next/link"
// import Image from 'next/image'

export default function Home() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh] bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6">
        <section className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl font-roboto tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            AGNTK
          </h1>
          <p className="text-lg text-gray-900">
            {`
          open source powered artificial intelligence
        `}
          </p>
          <div className="flex justify-center gap-4">
          <Link className="flex" href="https://github.com/agntk" target="_blank">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          {/*<Link className="flex" href="https://huggingface.co/Agntk" target="_blank">*/}
          {/*  <Image*/}
          {/*    src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo-pirate.svg"*/}
          {/*    width={28}*/}
          {/*    height={28}*/}
          {/*   alt={""}/>*/}
          {/*</Link>*/}
          </div>
          <div className="flex justify-center gap-4">
          <Link className="flex" href="https://cookbook.agntk.com/">
            <p className="text-lg text-gray-900">
              {`
          cookbook
        `}
            </p>
          </Link>
          </div>
        </section>
      </main>
    </div>
  )
}




