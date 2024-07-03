"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const InputCard = () => {
  const [url, setUrl] = useState("");

  const handleUrlCall = async () => {
    if (url.includes("youtube")) {
      const videoId = url.split("v=")[1];

      console.log("videoId ==> ", videoId);

      const YOUTUBE_URL = "https://senti-ai-backend.onrender.com";
      //   const YOUTUBE_URL = "http://localhost:8000";
      try {
        const finalUrl = YOUTUBE_URL + "/analyse/youtube/" + videoId;
        console.log("Final url ==> ", finalUrl);
        const response = await fetch(finalUrl);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const jsonRes = await response.json();
        console.log("JSON RES ==> ", jsonRes);
      } catch (error: any) {
        console.error("error while calling api ==> ", error.message);
      }
    }
  };

  return (
    <div className=" flex flex-col gap-4">
      <Input
        placeholder="Enter youtube url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button className="bg-slate-700" onClick={handleUrlCall}>
        Analyse
      </Button>
    </div>
  );
};

export default InputCard;
