export type SearchedArtworkType = Array<{
  api_link: string;
  api_model: string;
  id: number;
  is_boosted: boolean;
  thumbnail: { alt_text: string; width: number; lqip: string; height: number };
  timestamp: string;
  title: string;
  _score: number;
}>;
