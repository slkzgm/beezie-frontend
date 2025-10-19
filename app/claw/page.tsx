import Header from "@/components/Header";
import ClawSection from "@/components/ClawSection";
import TopItems from "@/components/TopItems";
import RecentPulls from "@/components/RecentPulls";

export default function ClawPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-4 pt-24 md:px-8 md:pt-32 lg:px-[50px] lg:pt-[137px]">
        <div className="mb-8">
          <ClawSection />
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-2">
          <TopItems />
          <RecentPulls />
        </div>
      </main>
    </div>
  );
}

