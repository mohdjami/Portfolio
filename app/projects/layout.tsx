import About from "@/components/About";
import { DashboardNav } from "@/components/DashboardNav";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { dashboardLinks } from "@/config/links";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="container grid flex-1 gap-12 md:grid-cols-[180px_1fr]">
        <aside className="hidden w-[180px] flex-col mt-32 ml-10 md:flex">
          <DashboardNav items={dashboardLinks.data} />
        </aside>
        <main className="flex w-full flex-1 flex-col">{children} </main>
      </div>
    </div>
  );
}
