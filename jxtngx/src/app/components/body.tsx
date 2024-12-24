import Link from "next/link"
import GitHubIcon from '@mui/icons-material/GitHub';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function Body() {
    return (
        <section className="max-w-2xl text-center space-y-2">
            <div className="flex justify-center gap-4">
            <Link className="flex" href="https://github.com/jxtngx" target="_blank">
                <GitHubIcon fontSize="large"/>
            </Link>
            </div>
            <br></br>
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
        </section>
    );
}