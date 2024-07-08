"use client";
import AnalyzeCard from "@/components/AnalyzeCard";
import ContentSummaryCard from "@/components/ContentSummaryCard";
import TopKeyword from "@/components/TopKeyword";
import InputCard from "@/components/InputCard";
import { useState } from "react";
import Loader from "@/components/Loader";
import CustomBarChart from "@/components/BarChart";

export default function Home() {
  const [data, setData] = useState<String | null>(null);
  const [isLoading, setLoading] = useState<Boolean>(false);

  const handleUrlCall = async (inputUrl: string, setErrMsg: any) => {
    if (inputUrl.includes("youtube")) {
      setLoading(true);
      setErrMsg(null);
      setData("");
      const videoId = inputUrl.split("v=")[1];

      console.log("videoId ==> ", videoId);

      const YOUTUBE_URL = "https://senti-ai-backend.onrender.com";
      // const YOUTUBE_URL = "http://localhost:8000";
      try {
        const finalUrl = YOUTUBE_URL + "/analyse/youtube/" + videoId;
        console.log("Final url ==> ", finalUrl);
        const response = await fetch(finalUrl);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const jsonRes = await response.json();
        setData(jsonRes.data);
        console.log("JSON RES ==> ", data);
      } catch (error: any) {
        console.error("error while calling api ==> ", error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setErrMsg("Please Enter Youtube URL");
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
