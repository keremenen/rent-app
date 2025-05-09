import "server-only";
import prisma from "./db";

export async function getAparmentById(aparmentId: string) {
  const aparment = await prisma.apartment.findUnique({
    where: {
      id: aparmentId,
    },
  });

  return aparment;
}

export async function getCityById(cityId: string) {
  const city = await prisma.city.findUnique({
    where: {
      id: cityId,
    },
  });

  return city;
}
