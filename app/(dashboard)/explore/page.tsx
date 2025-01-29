"use client";

import { useState, useEffect } from "react";

interface Episode {
  id: string;
  title: string;
  description: string;
  audio: string;
  podcastName: string;
  duration: number;
}

interface Podcast {
  id: string;
  title: string;
  publisher: string;
  image: string;
  link: string;
  episodes: Episode[];
}

export default function TopPodcasts() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://listen-api-test.listennotes.com/api/v2/search?q=startup");

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log("API Response:", data); // Debug API response

        if (!data.results) throw new Error("Invalid API response structure");

        // Transform the API data into our Podcast & Episode structure
        const formattedPodcasts: Podcast[] = data.results.map((item: any): Podcast => ({
          id: item.podcast.id,
          title: item.podcast.title_original,
          publisher: item.podcast.publisher_original,
          image: item.podcast.image,
          link: item.podcast.listennotes_url,
          episodes: [
            {
              id: item.id,
              title: item.title_original,
              description: item.description_original || "No description available.",
              audio: item.audio,
              podcastName: item.podcast.title_original,
              duration: item.audio_length_sec,
            },
          ],
        }));

        setPodcasts(formattedPodcasts);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
        setError("Failed to load podcasts.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Podcasts</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast) => (
          <li key={podcast.id} className="border p-4 rounded-lg shadow">
            <img src={podcast.image} alt={podcast.title} className="w-full h-32 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{podcast.title}</h3>
            <p className="text-sm text-gray-600">{podcast.publisher}</p>
            <a href={podcast.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
              View Podcast →
            </a>

            {/* Episodes List */}
            <h4 className="text-md font-semibold mt-4">Episodes:</h4>
            <ul className="mt-2 space-y-2">
              {podcast.episodes.map((episode) => (
                <li key={episode.id} className="border p-2 rounded-md bg-gray-50">
                  <h5 className="text-sm font-medium">{episode.title}</h5>
                  <p className="text-xs text-gray-500">{episode.description.substring(0, 100)}...</p>
                  <audio controls className="w-full mt-2">
                    <source src={episode.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}


