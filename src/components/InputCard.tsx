"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function InputCard({ handleUrlCall }: { handleUrlCall: any }) {
  const [url, setUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState<String | null>(null);

  const fetchData = () => {
    handleUrlCall(url, setErrorMsg);
  };

  return (
    <div className=" flex flex-col gap-4">
      <Input
        placeholder="Enter youtube url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      {errorMsg && <div className="text-red-500">{errorMsg}</div>}
      <Button className="bg-slate-700" onClick={fetchData}>
        Analyse
      </Button>
    </div>
  );
}
