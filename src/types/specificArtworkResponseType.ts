export interface SpecificArtworkResponseType {
  id: number;
  alt_titles: string | null;
  title: string;
  image_id: string;
  artist_title: string;
  department_title: string;
  thumbnail:
    | {
        alt_text: string;
      }
    | undefined;
}
