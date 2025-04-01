import { CityHeader } from "@/components/city-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CityNeighborhoods } from "@/components/city-neighborhoods";
import { CityAttractions } from "@/components/city-attractions";
import { CityGallery } from "@/components/city-gallery";

const city = {
  id: "1",
  name: "Gdańsk",
  description:
    "A vibrant metropolis offering diverse neighborhoods, cultural attractions, and economic opportunities.",
  longDescription:
    "This city combines historic charm with modern innovation, creating a unique urban landscape. From its iconic skyline to its diverse neighborhoods, the city offers something for everyone. With a strong economy, excellent public transportation, and a rich cultural scene, it's an ideal place to live, work, and play.",
  history:
    "Founded in the early 18th century, this city has a rich and diverse history. It began as a small trading post before growing into a major industrial center in the 19th century. The 20th century brought significant urban development and economic diversification. Today, it stands as a global city with influence in finance, media, art, fashion, research, technology, education, and entertainment.",
  image: "/placeholder-image.jpg",
  gallery: [
    "/placeholder-image.jpg",
    "/placeholder-image.jpg",
    "/placeholder-image.jpg",
    "/placeholder-image.jpg",
    "/placeholder-image.jpg",
    "/placeholder-image.jpg",
  ],
  stats: {
    population: 8500000,
    area: 302.6, // square miles
    density: 28317, // people per square mile
    founded: 1624,
    timezone: "Eastern Time Zone",
    averageIncome: 75000,
    medianAge: 36.5,
    climate: "Humid subtropical",
    averageTemp: {
      summer: 76,
      winter: 35,
    },
  },
  economy: {
    majorIndustries: [
      "Finance",
      "Technology",
      "Healthcare",
      "Education",
      "Media",
      "Tourism",
    ],
    unemployment: 4.2, // percentage
    jobGrowth: 2.1, // percentage
    majorEmployers: [
      "City University",
      "Memorial Hospital",
      "Global Financial",
      "Tech Innovations Inc.",
      "Media Conglomerate",
    ],
  },
  neighborhoods: [
    {
      id: "downtown",
      name: "Downtown",
      description:
        "The bustling heart of the city with high-rise apartments and vibrant nightlife.",
      image: "/placeholder-image.jpg",
      propertyCount: 156,
      avgRent: 2800,
      popular: true,
    },
    {
      id: "midtown",
      name: "Midtown",
      description:
        "A central location with a mix of residential and commercial properties.",
      image: "/placeholder-image.jpg",
      propertyCount: 124,
      avgRent: 2500,
      popular: true,
    },
    {
      id: "uptown",
      name: "Uptown",
      description:
        "A quieter residential area with historic homes and tree-lined streets.",
      image: "/placeholder-image.jpg",
      propertyCount: 89,
      avgRent: 2200,
      popular: false,
    },
    {
      id: "westside",
      name: "West Side",
      description:
        "A trendy area with art galleries, boutiques, and innovative dining.",
      image: "/placeholder-image.jpg",
      propertyCount: 210,
      avgRent: 2400,
      popular: true,
    },
    {
      id: "eastside",
      name: "East Side",
      description:
        "A diverse community with international cuisine and cultural attractions.",
      image: "/placeholder-image.jpg",
      propertyCount: 175,
      avgRent: 2100,
      popular: false,
    },
    {
      id: "northside",
      name: "North Side",
      description:
        "A family-friendly area with parks, good schools, and affordable housing.",
      image: "/placeholder-image.jpg",
      propertyCount: 120,
      avgRent: 1900,
      popular: true,
    },
  ],
  attractions: [
    {
      name: "City Museum",
      description:
        "World-class museum featuring art and artifacts from around the globe.",
      image: "/placeholder-image.jpg",
      category: "Culture",
    },
    {
      name: "Central Park",
      description:
        "Expansive urban park with walking trails, lakes, and recreational facilities.",
      image: "/placeholder-image.jpg",
      category: "Outdoors",
    },
    {
      name: "Historic District",
      description:
        "Preserved historic neighborhood with architecture from the 19th century.",
      image: "/placeholder-image.jpg",
      category: "History",
    },
    {
      name: "Science Center",
      description:
        "Interactive museum with exhibits on science, technology, and innovation.",
      image: "/placeholder-image.jpg",
      category: "Education",
    },
    {
      name: "Waterfront Promenade",
      description:
        "Scenic walkway along the river with shops, restaurants, and views.",
      image: "/placeholder-image.jpg",
      category: "Outdoors",
    },
    {
      name: "Performing Arts Center",
      description:
        "Venue for theater, music, dance, and other performing arts.",
      image: "/placeholder-image.jpg",
      category: "Entertainment",
    },
  ],
  transportation: {
    subway: {
      lines: 10,
      stations: 472,
      dailyRiders: 5500000,
      description:
        "Extensive subway system connecting all boroughs, running 24/7.",
    },
    bus: {
      routes: 234,
      dailyRiders: 2100000,
      description:
        "Comprehensive bus network covering areas not served by subway.",
    },
    bike: {
      lanes: 1375, // miles
      sharingProgram: "City Bikes with 800+ stations and 13,000+ bikes",
      description:
        "Growing network of protected bike lanes and popular bike-sharing program.",
    },
    airports: [
      "International Airport (20 miles from downtown)",
      "Regional Airport (15 miles from downtown)",
    ],
    walkability: 88, // out of 100
    commuteTime: 35, // average in minutes
  },
  costOfLiving: {
    index: 180, // 100 is national average
    housing: {
      averageRent: {
        studio: 2200,
        oneBedroom: 2800,
        twoBedroom: 3500,
        threeBedroom: 4500,
      },
      averageHomeCost: 750000,
    },
    utilities: {
      monthly: 175, // average monthly cost
      internet: 70, // average monthly cost
    },
    groceries: {
      index: 114, // 100 is national average
      examples: [
        { item: "Gallon of Milk", price: 4.5 },
        { item: "Loaf of Bread", price: 3.75 },
        { item: "Dozen Eggs", price: 4.25 },
      ],
    },
    dining: {
      inexpensiveMeal: 20,
      midRangeMeal: 75,
      fastFood: 12,
    },
    transportation: {
      publicTransitPass: 127, // monthly
      gasoline: 3.85, // per gallon
      rideshare: 25, // average 5-mile trip
    },
  },
  realEstate: {
    marketOverview:
      "Competitive market with high demand and limited inventory, especially in desirable neighborhoods.",
    trends: [
      "Increasing demand for apartments with home office space",
      "Growing interest in neighborhoods with outdoor amenities",
      "Rising prices in areas with good schools and transportation",
      "New luxury developments in previously industrial areas",
    ],
    averageDaysOnMarket: 45,
    inventoryLevel: "Low",
    priceGrowth: 5.2, // percentage year over year
    rentalGrowth: 3.8, // percentage year over year
    newDevelopments: 28, // number of major new residential developments
  },
  latitude: 40.7128,
  longitude: -74.006,
};

export default function CityPage() {
  return (
    <div className="bg-background min-h-screen">
      <CityHeader city={city} />

      <main className="container px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Discover {city.name}</h2>
            <p className="text-muted-foreground">
              Explore neighborhoods, attractions, and city information
            </p>
          </div>

          {/* CITY GREETER */}
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/cities">View All Cities</Link>
            </Button>
            <Button asChild>
              <Link href={`/cities/2/apartments`}>Browse Apartments</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>About {city.name}</CardTitle>
                <CardDescription>
                  Overview and history of the city
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{city.longDescription}</p>

                <div>
                  <h3 className="mb-2 font-semibold">History</h3>
                  <p>{city.history}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-muted-foreground text-sm">Population</p>
                    <p className="text-xl font-bold">
                      {city.stats.population.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-muted-foreground text-sm">Founded</p>
                    <p className="text-xl font-bold">{city.stats.founded}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-muted-foreground text-sm">Area</p>
                    <p className="text-xl font-bold">{city.stats.area} sq mi</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-muted-foreground text-sm">Avg Income</p>
                    <p className="text-xl font-bold">
                      ${city.stats.averageIncome.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Featured Neighborhoods</CardTitle>
                <CardDescription>
                  Popular areas to live in {city.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CityNeighborhoods neighborhoods={city.neighborhoods} />
              </CardContent>
            </Card>

            <CityAttractions attractions={city.attractions} className="mb-8" />

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Photo Gallery</CardTitle>
                <CardDescription>
                  Explore {city.name} through photos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CityGallery images={city.gallery} />
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>{city.name} on the map</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <CityMap city={city} neighborhoods={city.neighborhoods} /> */}

                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-primary text-2xl font-bold">
                      {city.transportation.walkability}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Walk Score
                    </div>
                  </div>
                  <div>
                    <div className="text-primary text-2xl font-bold">
                      {city.transportation.commuteTime} min
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Avg Commute
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full" asChild>
                    <Link href={`/cities/gdansk/apartments`}>
                      Browse All Apartments
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact a Local Agent</Link>
                  </Button>
                </div>

                <div className="mt-6 rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">Moving to {city.name}?</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Get our free relocation guide with insider tips on
                    neighborhoods, transportation, schools, and more.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Download Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
