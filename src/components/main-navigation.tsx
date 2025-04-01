"use client";

import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MainNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetTitle>
                <div className="flex items-center gap-2 px-4 py-3">
                  <Image
                    src="/logo.png"
                    width={64}
                    height={32}
                    alt="ApartmentHub Logo"
                    className="rounded"
                  />
                  <span className="text-lg font-semibold">RentApp</span>
                </div>
              </SheetTitle>
              <MobileNav />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={64}
              height={32}
              alt="ApartmentHub Logo"
              className="rounded"
            />
            <span className="text-lg font-semibold">RentApp</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/apartments"
            className="hover:text-primary text-sm font-medium"
          >
            Find Apartments
          </Link>

          <Link
            href="/cities"
            className="hover:text-primary text-sm font-medium"
          >
            Cities
          </Link>
          <Link
            href="/neighborhoods"
            className="hover:text-primary text-sm font-medium"
          >
            Neighborhoods
          </Link>
          <Link
            href="/about"
            className="hover:text-primary text-sm font-medium"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary text-sm font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/favorites" className="hidden md:block">
            <Button variant="outline" size="sm">
              Favorites list
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Hello guest</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">Create Account</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex h-full flex-col gap-4 py-4">
      <div className="flex flex-col gap-1 px-2">
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/apartments">Find Apartments</Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/about">About Us</Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/resources">Contact</Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/list-property">List Your Property</Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        <Button variant="ghost" className="justify-start" asChild>
          <Link href="/register">Create Account</Link>
        </Button>
      </div>
    </div>
  );
}
