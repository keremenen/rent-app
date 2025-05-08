"use client";

import {
  Home,
  LayoutDashboard,
  Map,
  MapPin,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const SidebarMenuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    name: "Apartments",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Cities",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    name: "Neighborhoods",
    icon: <Map className="h-4 w-4" />,
  },
  {
    name: "Users",
    icon: <Users className="h-4 w-4" />,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  return (
    <Sidebar
      variant="inset"
      collapsible={isMobile ? "offcanvas" : "icon"}
      className="border-r"
    >
      <SidebarHeader className="py-2 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">RentApp</span>
            <span className="text-muted-foreground text-xs">
              Admin Dashboard
            </span>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarSeparator className="m-0" />
      <SidebarContent className="py-2">
        <SidebarMenu>
          {SidebarMenuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(
                  `/admin/${item.name.toLowerCase()}`,
                )}
                tooltip={item.name}
              >
                <Link href={`/admin/${item.name.toLowerCase()}`}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith("/admin/settings")}
              tooltip="Settings"
            >
              <Link href="/admin/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
