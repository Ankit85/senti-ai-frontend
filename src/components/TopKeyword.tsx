import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const TopKeyword = () => {
  return (
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
  );
};

export default TopKeyword;
