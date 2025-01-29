import { NextApiRequest, NextApiResponse } from "next";

// Define the Podcast episode structure
interface Episode {
    id: string;
    title: string;
    description: string;
    podcastName: string;
    publisher: string;
    image: string;
    audio: string;
    duration: number;
    link: string;
}

// Define API response format
interface ApiResponse {
    results: {
        id: string;
        title_original: string;
        description_original: string;
        podcast: {
            title_original: string;
            publisher_original: string;
        };
        image: string;
        audio: string;
        audio_length_sec: number;
        listennotes_url: string;
    }[];
    total: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = "https://listen-api-test.listennotes.com/api/v2/search?q=startup";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch podcasts" });
        }

        const data: ApiResponse = await response.json();

        const episodes: Episode[] = data.results.map((episode) => ({
            id: episode.id,
            title: episode.title_original,
            description: episode.description_original,
            podcastName: episode.podcast.title_original,
            publisher: episode.podcast.publisher_original,
            image: episode.image,
            audio: episode.audio,
            duration: episode.audio_length_sec,
            link: episode.listennotes_url
        }));

        return res.status(200).json({ episodes, total: data.total });
    } catch (error) {
        console.error("Podcast API Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


