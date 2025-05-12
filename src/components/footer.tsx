import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background mt-auto border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="Rent app Logo"
                className="rounded"
              />
              <span className="text-lg font-semibold">RentApp</span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
              Making apartment hunting simple and stress-free since 2023. Find
              your perfect home with us.
            </p>
            <div className="mt-4 flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  {/* <Image
                    src={siFacebook}
                    alt="Facebook"
                    width={24}
                    height={24}
                  /> */}
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Image
                    src={"/icons/facebook.svg"}
                    alt="Twitter"
                    width={18}
                    height={18}
                  />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Image
                    src={"/icons/instagram.svg"}
                    alt="Twitter"
                    width={18}
                    height={18}
                  />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Image
                    src={"/icons/x.svg"}
                    alt="Twitter"
                    width={18}
                    height={18}
                  />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">For Renters</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/apartments"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Search Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Explore Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/cities"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Explore Cities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-12 border-t pt-6 text-center text-sm">
          <small>&copy; {currentYear} RentApp. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
