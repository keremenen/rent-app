export type City = {
  statistics: {
    area: number;
    id: string;
    cityId: string;
    population: number;
    walkScore: number;
    commuteTime: number;
  } | null;
} & {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};
