import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const TopKeyword = ({ data }: { data: any }) => {
  return (
    <Card className="px-4 py-4">
      <CardHeader className="">
        <CardTitle className="text-lg">Top Keywords</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {data &&
            data.keywords.map((item: any) => {
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
