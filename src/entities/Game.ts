import { Platform } from "../hooks/useGames";

export interface Game {
  id: number;
  name: string;
  slug: number;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
