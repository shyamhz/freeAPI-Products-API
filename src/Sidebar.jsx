import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

import AppSidebar from "@/components/app-sidebar";

const Sidebar = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <div className="flex items-center border-b px-4"></div>

        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Sidebar;
