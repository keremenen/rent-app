import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  href="/resources/renters-guide"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Renter&apos;s Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/moving-checklist"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Moving Checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/rental-faqs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Rental FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">For Property Owners</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/list-property"
                  className="text-muted-foreground hover:text-foreground"
                >
                  List Your Property
                </Link>
              </li>
              <li>
                <Link
                  href="/owner-dashboard"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Owner Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/landlord-guide"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Landlord Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/property-management"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Property Management Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
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
