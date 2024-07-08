"use client";
import AnalyzeCard from "@/components/AnalyzeCard";
import ContentSummaryCard from "@/components/ContentSummaryCard";
import TopKeyword from "@/components/TopKeyword";
import InputCard from "@/components/InputCard";
import { useState } from "react";
import Loader from "@/components/Loader";
import CustomBarChart from "@/components/BarChart";
import { isYoutubeUrl, getYoutubeVideoId } from "@/lib/helper";

export default function Home() {
  const [data, setData] = useState<String | null>(null);
  const [isLoading, setLoading] = useState<Boolean>(false);

  const handleUrlCall = async (inputUrl: string, setErrMsg: any) => {
    const YOUTUBE_URL = "https://senti-ai-backend.onrender.com";
    /*  if (YOUTUBE_URL === undefined) {
      throw new Error("YOUTUBE_URL is not undefined");
    } */
    if (!isYoutubeUrl(inputUrl)) {
      setErrMsg("Please Enter Youtube URL");
      setLoading(false);
      return;
    }
    setLoading(true);
    setErrMsg(null);
    setData(null);
    try {
      const videoId = getYoutubeVideoId(inputUrl);
      const finalUrl = YOUTUBE_URL + "/analyse/youtube/" + videoId;
      console.log("Final url ==> ", finalUrl);
      const response = await fetch(finalUrl);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const jsonRes = await response.json();
      setData(jsonRes.data);
    } catch (error: any) {
      console.error("error while calling api ==> ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 pt-6">
      <div className="p-4 container max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold text-white">Comment Analysis Tool</h1>

        {/* input with btn */}
        <InputCard handleUrlCall={handleUrlCall} />

        {/* Loading */}
        {isLoading && (
          <>
            <Loader />
          </>
        )}

        {/* card complete */}
        {data && <AnalyzeCard data={data} />}

        {/* content summary */}
        {data && <ContentSummaryCard data={data} />}

        {/* Top Keywords */}
        {data && <TopKeyword data={data} />}

        {/* Bar chart */}
        {data && <CustomBarChart data={data} />}
      </div>
    </div>
  );
}
