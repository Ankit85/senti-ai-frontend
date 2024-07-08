const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;

// Function to check if a URL is a YouTube URL
function isYoutubeUrl(url: string) {
  return youtubeRegex.test(url);
}

function getYoutubeVideoId(url: string) {
  if (!isYoutubeUrl(url)) {
    return null;
  }

  let videoId = null;

  // Extract video ID from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i,
    /^([^"&?\/\s]{11})$/i,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      videoId = match[1];
      break;
    }
  }

  return videoId;
}

export { isYoutubeUrl, getYoutubeVideoId };
