import { CityHeader } from "@/components/city-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
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
      image: "/placeholder.svg?height=300&width=400",
      propertyCount: 156,
      avgRent: 2800,
      popular: true,
    },
    {
      id: "midtown",
      name: "Midtown",
      description:
        "A central location with a mix of residential and commercial properties.",
      image: "/placeholder.svg?height=300&width=400",
      propertyCount: 124,
      avgRent: 2500,
      popular: true,
    },
    {
      id: "uptown",
      name: "Uptown",
      description:
        "A quieter residential area with historic homes and tree-lined streets.",
      image: "/placeholder.svg?height=300&width=400",
      propertyCount: 89,
      avgRent: 2200,
      popular: false,
    },
    {
      id: "westside",
      name: "West Side",
      description:
        "A trendy area with art galleries, boutiques, and innovative dining.",
      image: "/placeholder.svg?height=300&width=400",
      propertyCount: 210,
      avgRent: 2400,
      popular: true,
    },
    {
      id: "eastside",
      name: "East Side",
      description:
        "A diverse community with international cuisine and cultural attractions.",
      image: "/placeholder.svg?height=300&width=400",
      propertyCount: 175,
      avgRent: 2100,
      popular: false,
    },
    {
      id: "northside",
      name: "North Side",
      description:
        "A family-friendly area with parks, good schools, and affordable housing.",
      image: "/placeholder.svg?height=300&width=400",
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
      image: "/placeholder.svg?height=200&width=300",
      category: "Culture",
    },
    {
      name: "Central Park",
      description:
        "Expansive urban park with walking trails, lakes, and recreational facilities.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Outdoors",
    },
    {
      name: "Historic District",
      description:
        "Preserved historic neighborhood with architecture from the 19th century.",
      image: "/placeholder.svg?height=200&width=300",
      category: "History",
    },
    {
      name: "Science Center",
      description:
        "Interactive museum with exhibits on science, technology, and innovation.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Education",
    },
    {
      name: "Waterfront Promenade",
      description:
        "Scenic walkway along the river with shops, restaurants, and views.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Outdoors",
    },
    {
      name: "Performing Arts Center",
      description:
        "Venue for theater, music, dance, and other performing arts.",
      image: "/placeholder.svg?height=200&width=300",
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

          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/cities">View All Cities</Link>
            </Button>
            <Button asChild>
              <Link href={`/cities/2/apartments`}>Browse Apartments</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
