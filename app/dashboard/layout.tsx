import React from 'react';
import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* this is the main div */}
      <div className="w-full flex-none md:w-64">
        {/* this is the div wrapping the side nav bar */}
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* this is the div wrapping the children */}
        {children}
      </div>
    </div>
  );
}
