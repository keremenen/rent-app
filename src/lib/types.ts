import { Decimal } from "@prisma/client/runtime/library";

export type City = {
  id: string;
  name: string;
  shortDescription: string | null;
  longDescription: string | null;
  gallery: string[];
  latitude: Decimal | null;
  longitude: Decimal | null;
  population: bigint | null;
  area: Decimal | null;
  walkscore: Decimal | null;
  commuteTime: Decimal | null;
  createdAt: Date;
};
