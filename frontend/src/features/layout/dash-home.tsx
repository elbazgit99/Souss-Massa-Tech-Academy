import { Outlet } from "react-router";
import { AppSidebar } from "../../components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import adminImg from "../../assets/admin.png";

export default function DashHome() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 shadow-sm mb-5">
          <div className="flex justify-between items-center gap-2 px-4 w-full ">
            <SidebarTrigger className="-ml-1" />

            <img
              alt="admin"
              src={adminImg}
              className="inline-block size-8 rounded-full ring-2 ring-white cursor-pointer"
            />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* <TableUsers /> */}

          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
