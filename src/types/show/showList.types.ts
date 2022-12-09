export interface showListType {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  rating: {
    average: number;
  };
  genres: string[];
  language: string;
}
