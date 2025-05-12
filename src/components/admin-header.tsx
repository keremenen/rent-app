"use client";

import { logOut } from "@/actions/actions";
import { Button } from "@/components/ui/button";

import { SidebarTrigger } from "@/components/ui/sidebar";

export function AdminHeader() {
  return (
    <header className="bg-background sticky top-0 z-10 flex h-12 items-center gap-4 border-b px-4 sm:px-6">
      <SidebarTrigger className="md:hidden" />

      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <Button variant={"outline"} onClick={async () => await logOut()}>
          Sign Out
        </Button>
      </div>
    </header>
  );
}
