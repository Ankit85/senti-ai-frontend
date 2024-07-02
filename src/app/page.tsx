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
        <Card className="flex  items-center">
          <BadgeCheckIcon className="ml-4" />
          <CardHeader>
            <CardTitle className="text-lg">Analysis Complete</CardTitle>
            <CardDescription className="text-sm">
              Analyzed 1000 comments from YouTube
            </CardDescription>
          </CardHeader>
        </Card>

        {/* content summary */}
        <Card className="px-4 py-4">
          <CardHeader>
            <CardTitle className="text-lg ml-[-8px]">Content Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-sm ">
            This video appears to be a popular music video that has garnered
            significant attention. The majority of viewers seem to enjoy the
            content, with many expressing positive sentiments about the song and
            the artist&rsquo;s performance. There&rsquo;s a notable trend of
            people mentioning they&rsquo;ve been &rsquo;Rick Rolled&rsquo;,
            suggesting the video might be part of an internet meme or joke.
            While some viewers express disappointment or frustration, possibly
            due to unexpectedly encountering the video, overall the reception is
            largely positive. The video has sparked a mix of genuine
            appreciation, nostalgic comments, and playful reactions, indicating
            its cultural significance beyond just its musical content.
          </CardContent>
        </Card>

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
