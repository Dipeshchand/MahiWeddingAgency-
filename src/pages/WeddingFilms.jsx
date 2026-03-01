
import { useEffect, useState } from "react";

/* ---------------- Lazy Video Card ---------------- */
function LazyVideo({ video }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      {!play ? (
        <div
          className="relative cursor-pointer group"
          onClick={() => setPlay(true)}
        >
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 text-white rounded-full px-5 py-3 text-xl group-hover:scale-110 transition">
              ▶
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
          allowFullScreen
        />
      )}

      <div className="p-4">
        <p className="font-medium line-clamp-2">
          {video.snippet.title}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(video.snippet.publishedAt).toDateString()}
        </p>
      </div>
    </div>
  );
}

/* ---------------- Skeleton Loader ---------------- */
function VideoSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-[220px] rounded-xl"></div>
      <div className="h-4 bg-gray-300 mt-4 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 mt-2 rounded w-1/2"></div>
    </div>
  );
}

/* ---------------- Main Component ---------------- */
export default function Films() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        );

        const data = await res.json();

        const formatted = data.items.map((item) => ({
          id: {
            videoId: item.snippet.resourceId.videoId,
          },
          snippet: item.snippet,
        }));

        setVideos(formatted);
      } catch (error) {
        console.error("YouTube Playlist Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  return (
    <div className="min-h-screen  py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r to-red-200"
          style={{ fontFamily: "light" }}
        >
          Our Wedding{" "}
          <span className="text-red-700 " style={{ fontFamily: "Seasons1" }}>
            Films
          </span>
        </h1>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <VideoSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <LazyVideo key={video.id.videoId} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
