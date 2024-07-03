import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BadgeCheckIcon } from "lucide-react";
import AnalyzeCard from "@/components/AnalyzeCard";

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
     

        {/* Top Keywords */}
        <Card className="px-4 py-4">
          <CardHeader className="">
            <CardTitle className="text-lg">Top Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>awesome (50 occurrences)</li>
              <li>love (45 occurrences)</li>
              <li>great (40 occurrences) </li>
              <li>meh (25 occurrences) </li>
              <li>disappointing (30 occurrences) </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
