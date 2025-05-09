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
