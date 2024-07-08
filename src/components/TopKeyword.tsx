import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const TopKeyword = ({ data }: { data: any }) => {
  return (
    <Card className="px-4 py-4">
      <CardHeader className="">
        <CardTitle className="text-lg">
          Top 5 Keywords used in comments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 text-slate-600">
          {data &&
            data?.topKeywords?.slice(0, 5).map((item: any) => {
              return (
                <li key={item.keyword}>
                  {item.keyword} ({item.count} occurrences)
                </li>
              );
            })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TopKeyword;
