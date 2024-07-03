import AnalyzeCard from "@/components/AnalyzeCard";
import ContentSummaryCard from "@/components/ContentSummaryCard";
import TopKeyword from "@/components/TopKeyword";
import InputCard from "@/components/InputCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800 pt-6">
      <div className="p-4 container max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold text-white">Comment Analysis Tool</h1>

        {/* input with btn */}
        <InputCard />
        {/* card complete */}
        <AnalyzeCard />

        {/* content summary */}
        <ContentSummaryCard />

        {/* Top Keywords */}
        <TopKeyword />
      </div>
    </div>
  );
}
