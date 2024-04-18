import About from "@/components/About";
import { DashboardNav } from "@/components/DashboardNav";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { SparklesCore } from "@/components/ui/sparkles";
import { dashboardLinks } from "@/config/links";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-cols min-h-full">
      {" "}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container bg-clip-text grid flex-1 gap-12 md:grid-cols-[180px_1fr] z-10">
        <aside className="hidden bg-clip-text w-[180px] flex-col mt-32 ml-10 md:flex z-10 overflow-hidden">
          <DashboardNav items={dashboardLinks.data} />
        </aside>
        <main className="flex bg-clip-text w-full flex-1 flex-col z-10">
          {children}
        </main>
      </div>
    </div>
  );
}
