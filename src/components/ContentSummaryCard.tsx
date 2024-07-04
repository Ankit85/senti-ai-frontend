import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const ContentSummaryCard = ({ data }: { data: any }) => {
  console.log("data inside content summary card", data);
  return (
    <Card className="px-4 py-4">
      <CardHeader>
        <CardTitle className="text-lg ml-[-8px]">Content Summary</CardTitle>
      </CardHeader>
      <CardContent className=""> {data?.summary_text}</CardContent>
    </Card>
  );
};

export default ContentSummaryCard;
