import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const ContentSummaryCard = () => {
  return (
    <Card className="px-4 py-4">
      <CardHeader>
        <CardTitle className="text-lg ml-[-8px]">Content Summary</CardTitle>
      </CardHeader>
      <CardContent className="">
        This video appears to be a popular music video that has garnered
        significant attention. The majority of viewers seem to enjoy the
        content, with many expressing positive sentiments about the song and the
        artist&rsquo;s performance. There&rsquo;s a notable trend of people
        mentioning they&rsquo;ve been &rsquo;Rick Rolled&rsquo;, suggesting the
        video might be part of an internet meme or joke. While some viewers
        express disappointment or frustration, possibly due to unexpectedly
        encountering the video, overall the reception is largely positive. The
        video has sparked a mix of genuine appreciation, nostalgic comments, and
        playful reactions, indicating its cultural significance beyond just its
        musical content.
      </CardContent>
    </Card>
  );
};

export default ContentSummaryCard;
