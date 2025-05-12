import Footer from "@/components/footer";
import { MainNavigation } from "@/components/main-navigation";
import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
}
