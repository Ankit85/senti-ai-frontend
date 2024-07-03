import { BadgeCheckIcon } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const AnalyzeCard = () => {
  return (
    <Card className="flex  items-center">
      <BadgeCheckIcon className="ml-4" />
      <CardHeader>
        <CardTitle className="text-lg">Analysis Complete</CardTitle>
        <CardDescription className="text-sm">
          Analyzed 1000 comments from YouTube
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AnalyzeCard;
