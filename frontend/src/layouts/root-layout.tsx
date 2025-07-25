import "@nfid/identitykit/react/styles.css";

import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}