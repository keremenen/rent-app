import { PrismaClient } from "@prisma/client";
import { stat } from "fs";
const prisma = new PrismaClient();

const cites = [
  {
    id: "gd",
    name: "Gdańsk",
    description: "Gdańsk short description",
    longDescription: "Gdańsk long description",
    imageUrl: "main	-gdansk.jpg",
    gallery: [
      {
        id: "gd-01",
        imageUrl: "gdansk-01.jpg",
      },
      {
        id: "gd-02",
        imageUrl: "gdansk-02.jpg",
      },
    ],
    neighborhoods: [
      {
        id: "wrzeszcz",
        name: "Wrzeszcz",
        description: "Wrzeszcz description",
        imageUrl: "wrzeszcz-main.jpg",
        statistics: {
          id: "wrzeszcz-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
        gallery: [
          {
            id: "wrzeszcz-01",
            imageUrl: "wrzeszcz-01.jpg",
          },
          {
            id: "wrzeszcz-02",
            imageUrl: "wrzeszcz-02.jpg",
          },
        ],
      },
    ],
    location: {
      id: "gdansk-location",
      latitude: 54.352,
      longitude: 18.646,
    },
    statistics: {
      id: "gdansk-stats",
      population: 470000,
      area: 262.0,
      walkScore: 85,
      commuteTime: 30,
    },
  },
];

async function main() {
  console.log("Start seeding ...");

  for (const city of cites) {
    const result = await prisma.city.upsert({
      where: { id: city.id },
      update: {}, // You can define specific fields to update here
      create: {
        id: city.id,
        name: city.name,
        description: city.description,
        longDescription: city.longDescription,
        imageUrl: city.imageUrl,
        gallery: {
          create: city.gallery.map((galleryItem) => ({
            id: galleryItem.id,
            imageUrl: galleryItem.imageUrl,
          })),
        },
        neighborhoods: {
          create: city.neighborhoods.map((neighborhood) => ({
            id: neighborhood.id,
            name: neighborhood.name,
            description: neighborhood.description,
            imageUrl: neighborhood.imageUrl,
            statistics: {
              create: {
                id: neighborhood.statistics.id,
                averageRent: neighborhood.statistics.averageRent,
                walkScore: neighborhood.statistics.walkScore,
                transitScore: neighborhood.statistics.transitScore,
              },
            },
            gallery: {
              create: neighborhood.gallery.map((galleryItem) => ({
                id: galleryItem.id,
                imageUrl: galleryItem.imageUrl,
              })),
            },
          })),
        },
      },
    });
    console.log(`Created city with id: ${result.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
