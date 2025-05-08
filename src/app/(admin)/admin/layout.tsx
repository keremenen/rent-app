import { AdminHeader } from "@/components/admin-header";
import { AdminSidebar } from "@/components/admin-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <AdminSidebar />
          <div className="flex w-full flex-1 flex-col">
            <AdminHeader />
            <main className="flex-1 p-4 pt-6 md:p-6 lg:p-8">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
