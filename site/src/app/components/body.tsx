import Link from "next/link"
import GitHub from "@/app/icons/github"

export default function Body() {
    return (
        <section className="max-w-2xl font-mono text-center space-y-4">
            <div className="flex justify-center ">
                <Link className="flex" href="https://github.com/theosis-ai" target="_blank">
                    <GitHub />
                </Link>
            </div>
            <div className="flex justify-center ">
                <Link className="flex" href="https://agents.theosis.ai/" target="_blank">
                    <p className="text-lg text-gray-900">Agent Cookbook</p>
                    <svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6"
                         width="7">
                        <path
                            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                            fill="var(--accents-3)"></path>
                    </svg>
                </Link>
            </div>
            <div className="flex justify-center ">
                <Link className="flex" href="https://github.com/theosis-ai/tuning-lab" target="_blank">
                    <p className="text-lg text-gray-900">NeMo Lab</p>
                    <svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6"
                         width="7">
                        <path
                            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                            fill="var(--accents-3)"></path>
                    </svg>
                </Link>
            </div>
            <div className="flex justify-center ">
                <Link className="flex" href="https://nemo.theosis.ai/" target="_blank">
                    <p className="text-lg text-gray-900">NeMo Cookbook</p>
                    <svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6"
                         width="7">
                        <path
                            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                            fill="var(--accents-3)"></path>
                    </svg>
                </Link>
            </div>
            <div className="flex justify-center ">
                <Link className="flex" href="https://huggingface.co/TheosisAI" target="_blank">
                    <p className="text-lg text-gray-900">Hugging Face</p>
                    <svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6"
                         width="7">
                        <path
                            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                            fill="var(--accents-3)"></path>
                    </svg>
                </Link>
            </div>
            <div className="flex justify-center ">
                <Link className="flex" href="https://theaiengineer.substack.com" target="_blank">
                    <p className="text-lg text-gray-900">The AI Engineer Substack</p>
                    <svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6"
                         width="7">
                        <path
                            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                            fill="var(--accents-3)"></path>
                    </svg>
                </Link>
            </div>
        </section>
    );
}
