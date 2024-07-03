import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnalyzeCard from "@/components/AnalyzeCard";
import ContentSummaryCard from "@/components/ContentSummaryCard";
import TopKeyword from "@/components/TopKeyword";
import { useState } from "react";

export default function Home() {



  return (
    <div className="min-h-screen bg-slate-800 pt-6">
      <div className="p-4 container max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold text-white">Comment Analysis Tool</h1>

        {/* input with btn */}
        <div className=" flex flex-col gap-4">
          <Input placeholder="Enter youtube url" />
          <Button className="bg-slate-700">Analyse</Button>
        </div>

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
