import * as React from "react";
import {
  // AudioWaveform,
  Blocks,
  Calendar,
  // Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
  BookOpenText,
  User,
} from "lucide-react";

import { NavMain } from "../components/nav-main";
import { NavSecondary } from "../components/nav-secondary";
import logo from "/src/assets/fondation-logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "../components/ui/sidebar";

// This is sample data.
const data = {
  // teams: [
  //     {
  //         name: "Jadara Management",
  //         logo: Command,
  //         plan: "Enterprise",
  //     },
  //     {
  //         name: "Acme Corp.",
  //         logo: AudioWaveform,
  //         plan: "Startup",
  //     },
  //     {
  //         name: "Evil Corp.",
  //         logo: Command,
  //         plan: "Free",
  //     },
  // ],
  navMain: [
    {
      title: "Home",
      url: "/dash-home/",
      icon: Home,
      // isActive: true,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Users",
      url: "/dash-home/users",
      icon: User,
    },

    {
      title: "Courses",
      url: "/dash-home/courses",
      icon: BookOpenText,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-4 mb-3">
          <img src={logo} alt="" className="w-9" />
          <span>
            <strong>Jadara Management</strong>
          </span>
        </div>

        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
