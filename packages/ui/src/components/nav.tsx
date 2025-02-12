"use client";

import Link from "next/link";
import ModeSwitcher from "@workspace/ui/components/modeSwitcher";
import { House } from 'lucide-react';

export default function Nav() {

  return (
    <nav className="flex items-center justify-between mt-8 ml-4 mr-4 mb-4 sm:ml-12 sm:mr-12">
      <div className="flex flex-1 justify-left gap-6 ml-4">
        <Link className="items-center flex gap-1" href="/">
          <House className="h-4 w-4"/>
        </Link>
        <Link className="items-center flex gap-1" href="/cookbook">
          Cookbook
        </Link>
        <Link className="items-center flex gap-1" href="/blog">
          Blog
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <ModeSwitcher />
      </div>
    </nav>
  );
}
