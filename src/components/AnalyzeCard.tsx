"use client";
import { BadgeCheckIcon } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const AnalyzeCard = ({ data }: { data: any }) => {
  console.log("data inside analyzed card", data);
  return (
    <Card className="flex  items-center">
      <BadgeCheckIcon className="ml-4" />
      <CardHeader>
        <CardTitle className="text-lg">Analysis Complete</CardTitle>
        <CardDescription className="text-sm">
          Analyzed {data && data?.summary?.total_length} comments from
          YouTube
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AnalyzeCard;
