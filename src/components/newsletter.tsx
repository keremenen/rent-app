"use client";

import type React from "react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.lop(email);
  };

  return (
    <section className="bg-primary/5 py-16">
      <div className="container px-4">
        <div className="bg-background mx-auto max-w-2xl rounded-xl p-8 shadow-sm">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest listings, market
              trends, and rental tips
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-lg bg-green-50 p-4 text-center text-green-800">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm">
                We&apos;ll keep you updated with the latest news and listings.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
