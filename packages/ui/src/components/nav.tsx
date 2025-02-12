"use client";


import Link from "next/link";
import ModeSwitcher from "@workspace/ui/components/modeSwitcher";
import { Menu } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function Nav() {

  return (

    <nav className="flex items-center justify-between mt-8 ml-4 mr-4 mb-4 sm:ml-12 sm:mr-12">
      <Menubar>
        <MenubarMenu >
          <MenubarTrigger >
            <Menu className="h-4 w-4"/>
          </MenubarTrigger>
          <MenubarContent >
            <MenubarItem asChild>
            <Link className="items-center flex gap-1" href="/"  >
                Home
            </Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link className="items-center flex gap-1" href="/cookbook" >
                  Cookbook
              </Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link className="items-center flex gap-1" href="/blog">
                  Blog
                </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-1 justify-end">
        <ModeSwitcher />
      </div>
    </nav>
  )
}


