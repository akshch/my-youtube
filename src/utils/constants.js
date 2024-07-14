const GOOGLE_API_KEY = "AIzaSyBWngmZFufE1NYij16MiN6fXEI3xzR2lh0";

export const OFFSITE_LIVE_CHAT = 25;
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CATEGORY_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_CATEGORY_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=100&key=" +
  GOOGLE_API_KEY;
