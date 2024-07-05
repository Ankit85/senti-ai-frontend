import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const ContentSummaryCard = ({ data }: { data: any }) => {
  return (
    <Card className="px-4 py-4">
      <CardHeader>
        <CardTitle className="text-lg ml-[-8px]">Content Summary</CardTitle>
      </CardHeader>
      <CardContent className=""> {data?.summaryText}</CardContent>
    </Card>
  );
};

export default ContentSummaryCard;
