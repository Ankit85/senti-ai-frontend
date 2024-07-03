"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const InputCard = () => {
  const [url, setUrl] = useState("");

  const handleUrlCall = () => {
    if (url.includes("youtube")) {
      const videoId = url.split("v=")[1];

      console.log("videoId ==> ", videoId);
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
