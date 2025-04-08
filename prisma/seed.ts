import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const cities = [
  {
    id: "gdansk",
    name: "Gdańsk",
    description: "Gdańsk short description",
    longDescription: "Gdańsk long description",
    imageUrl: "/images/cities/gdansk/main.jpg",
    gallery: [
      {
        id: "gd-01",
        altText: "Gdańsk image 1",
        imageUrl: "/images/cities/gdansk/gallery/1.jpg",
      },
      {
        id: "gd-02",
        altText: "Gdańsk image 2",
        imageUrl: "/images/cities/gdansk/gallery/1.jpg",
      },
      {
        id: "gd-03",
        altText: "Gdańsk image 3",
        imageUrl: "/images/cities/gdansk/gallery/1.jpg",
      },
      {
        id: "gd-04",
        altText: "Gdańsk image 4",
        imageUrl: "/images/cities/gdansk/gallery/1.jpg",
      },
      {
        id: "gd-05",
        altText: "Gdańsk image 5",
        imageUrl: "/images/cities/gdansk/gallery/1.jpg",
      },
      {
        id: "gd-06",
        altText: "Gdańsk image 6",
        imageUrl: "/images/cities/gdansk/gallery/1.jpg",
      },
    ],
    neighborhoods: [
      {
        id: "wrzeszcz",
        name: "Wrzeszcz",
        description: "Wrzeszcz description",
        imageUrl: "/images/neighborhoods/gdansk/wrzeszcz/main.jpg",
        statistics: {
          id: "wrzeszcz-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
        apartments: {
          id: "apt-01",
          title: "Wrzeszcz Apartment 1",
          address: "Wrzeszcz, Gdańsk, Poland",
          description: "Wrzeszcz Apartment 1 description",
          backgroundImage: "/images/apartments/apt-01/main.jpg",
          gallery:
            "/images/apartments/apt-01/gallery/1.jpg, /images/apartments/apt-01/gallery/2.jpg, /images/apartments/apt-01/gallery/3.jpg, /images/apartments/apt-01/gallery/4.jpg, /images/apartments/apt-01/gallery/5.jpg, /images/apartments/apt-01/gallery/6.jpg, /images/apartments/apt-01/gallery/7.jpg",
          amenities: "Feature 1, Feature 2, Feature 3",
          monthlyRent: 1500,
          bedrooms: 2,
          bathrooms: 1,
          squareFootage: 800,
          availableFrom: new Date("2023-10-01"),
        },
      },
      {
        id: "brzezno",
        name: "Brzeźno",
        description: "Brzeźno description",
        imageUrl: "/images/neighborhoods/gdansk/brzezno/main.jpg",
        statistics: {
          id: "brzezno-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
      },
      {
        id: "przymorze",
        name: "Przymorze",
        description: "Przymorze description",
        imageUrl: "/images/neighborhoods/gdansk/przymorze/main.jpg",
        statistics: {
          id: "przymorze-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
      },
      {
        id: "zaspa",
        name: "Zaspa",
        description: "Zaspa description",
        imageUrl: "/images/neighborhoods/gdansk/zaspa/main.jpg",
        statistics: {
          id: "zaspa-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
      },
      {
        id: "jasien",
        name: "Jasień",
        description: "Jasień description",
        imageUrl: "/images/neighborhoods/gdansk/jasien/main.jpg",
        statistics: {
          id: "wrzeszcz-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
      },
      {
        id: "srodmiescie",
        name: "Śródmieście",
        description: "Śródmieście description",
        imageUrl: "/images/neighborhoods/gdansk/srodmiescie/main.jpg",
        statistics: {
          id: "srodmiescie-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
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
  {
    id: "gdynia",
    name: "Gdynia",
    description: "Gdynia short description",
    longDescription: "Gdynia long description",
    imageUrl: "/images/cities/gdynia/main.jpg",
    gallery: [
      {
        id: "ga-01",
        altText: "Gdańsk image 1",
        imageUrl: "gdansk-01.jpg",
      },
      {
        id: "ga-02",
        altText: "Gdańsk image 2",
        imageUrl: "gdansk-02.jpg",
      },
      {
        id: "ga-03",
        altText: "Gdańsk image 2",
        imageUrl: "gdansk-02.jpg",
      },
    ],
    neighborhoods: [
      {
        id: "chylonia",
        name: "Chylonia",
        description: "Wrzeszcz description",
        imageUrl: "wrzeszcz-main.jpg",
        statistics: {
          id: "wrzeszcz-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
      },
    ],
    location: {
      id: "gdynia-location",
      latitude: 54.352,
      longitude: 18.646,
    },
    statistics: {
      id: "gdynia-stats",
      population: 470000,
      area: 262.0,
      walkScore: 85,
      commuteTime: 30,
    },
  },
  {
    id: "sopot",
    name: "Sopot",
    description: "Sopot short description",
    longDescription: "Sopot long description",
    imageUrl: "/images/cities/sopot/main.jpg",
    gallery: [
      {
        id: "sp-01",
        altText: "Gdańsk image 1",
        imageUrl: "gdansk-01.jpg",
      },
      {
        id: "sp-02",
        altText: "Gdańsk image 2",
        imageUrl: "gdansk-02.jpg",
      },
      {
        id: "sp-03",
        altText: "Gdańsk image 2",
        imageUrl: "gdansk-02.jpg",
      },
    ],
    neighborhoods: [
      {
        id: "przylesie",
        name: "Przylesie",
        description: "Przylesie description",
        imageUrl: "wrzeszcz-main.jpg",
        statistics: {
          id: "wrzeszcz-stats",
          averageRent: 1500,
          walkScore: 85,
          transitScore: 90,
        },
      },
    ],
    location: {
      id: "sopot-location",
      latitude: 54.352,
      longitude: 18.646,
    },
    statistics: {
      id: "sopot-stats",
      population: 470000,
      area: 262.0,
      walkScore: 85,
      commuteTime: 30,
    },
  },
];

async function main() {
  console.log("Start seeding ...");

  for (const city of cities) {
    // Upsert the city
    const cityResult = await prisma.city.upsert({
      where: { id: city.id },
      update: {
        name: city.name,
        description: city.description,
        longDescription: city.longDescription,
        imageUrl: city.imageUrl,
      },
      create: {
        id: city.id,
        name: city.name,
        description: city.description,
        longDescription: city.longDescription,
        imageUrl: city.imageUrl,
      },
    });

    console.log(`Created or updated city with id: ${cityResult.id}`);

    // Update or create CityGalleryImage
    for (const galleryItem of city.gallery) {
      await prisma.cityGalleryImage.upsert({
        where: { id: galleryItem.id },
        update: {
          altText: galleryItem.altText,
          imageUrl: galleryItem.imageUrl,
        },
        create: {
          id: galleryItem.id,
          altText: galleryItem.altText,
          imageUrl: galleryItem.imageUrl,
          cityId: city.id,
        },
      });
    }

    // Update or create CityStats
    if (city.statistics) {
      await prisma.cityStats.upsert({
        where: { id: city.statistics.id },
        update: {
          population: city.statistics.population,
          area: city.statistics.area,
          walkScore: city.statistics.walkScore,
          commuteTime: city.statistics.commuteTime,
        },
        create: {
          id: city.statistics.id,
          population: city.statistics.population,
          area: city.statistics.area,
          walkScore: city.statistics.walkScore,
          commuteTime: city.statistics.commuteTime,
          cityId: city.id,
        },
      });
    }

    // Update or create CityLocation
    if (city.location) {
      await prisma.cityLocation.upsert({
        where: { id: city.location.id },
        update: {
          latitude: city.location.latitude,
          longitude: city.location.longitude,
        },
        create: {
          id: city.location.id,
          latitude: city.location.latitude,
          longitude: city.location.longitude,
          cityId: city.id,
        },
      });
    }

    // Update or create Neighborhoods and their nested relations
    for (const neighborhood of city.neighborhoods) {
      const neighborhoodResult = await prisma.neighborhood.upsert({
        where: { id: neighborhood.id },
        update: {
          name: neighborhood.name,
          description: neighborhood.description,
          imageUrl: neighborhood.imageUrl,
        },
        create: {
          id: neighborhood.id,
          name: neighborhood.name,
          description: neighborhood.description,
          imageUrl: neighborhood.imageUrl,
          cityId: city.id,
        },
      });

      // Update or create NeighborhoodStats
      if (neighborhood.statistics) {
        await prisma.neighborhoodStats.upsert({
          where: { id: neighborhood.statistics.id },
          update: {
            averageRent: neighborhood.statistics.averageRent,
            walkScore: neighborhood.statistics.walkScore,
            transitScore: neighborhood.statistics.transitScore,
          },
          create: {
            id: neighborhood.statistics.id,
            averageRent: neighborhood.statistics.averageRent,
            walkScore: neighborhood.statistics.walkScore,
            transitScore: neighborhood.statistics.transitScore,
            neighborhoodId: neighborhoodResult.id,
          },
        });
      }

      // Update or create Apartments
      if (neighborhood.apartments) {
        await prisma.apartment.upsert({
          where: { id: neighborhood.apartments.id },
          update: {
            title: neighborhood.apartments.title,
            address: neighborhood.apartments.address,
            description: neighborhood.apartments.description,
            backgroundImage: neighborhood.apartments.backgroundImage,
            gallery: neighborhood.apartments.gallery,
            amenities: neighborhood.apartments.amenities,
            monthlyRent: neighborhood.apartments.monthlyRent,
            bedrooms: neighborhood.apartments.bedrooms,
            bathrooms: neighborhood.apartments.bathrooms,
            squareFootage: neighborhood.apartments.squareFootage,
            availableFrom: neighborhood.apartments.availableFrom,
          },
          create: {
            id: neighborhood.apartments.id,
            title: neighborhood.apartments.title,
            address: neighborhood.apartments.address,
            description: neighborhood.apartments.description,
            backgroundImage: neighborhood.apartments.backgroundImage,
            gallery: neighborhood.apartments.gallery,
            amenities: neighborhood.apartments.amenities,
            monthlyRent: neighborhood.apartments.monthlyRent,
            bedrooms: neighborhood.apartments.bedrooms,
            bathrooms: neighborhood.apartments.bathrooms,
            squareFootage: neighborhood.apartments.squareFootage,
            availableFrom: neighborhood.apartments.availableFrom,
            neighborhoodId: neighborhoodResult.id,
          },
        });
      }
    }
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
