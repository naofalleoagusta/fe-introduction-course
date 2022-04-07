export type TInput = {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth: boolean;
  error?: boolean;
  helperText?: string;
};

export type TMovie = {
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  title: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  poster_path: string;
  vote_count: number;
  video: boolean;
  vote_average: number;
  id: number;
  overview: string;
  popularity: number;
  media_type: string;
  name: string | null;
};
