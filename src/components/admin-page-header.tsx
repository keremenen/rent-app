import React from "react";

type AdminPageHeaderProps = {
  title: string;
  description?: string;
};

export default function AdminPageHeader({
  title,
  description,
}: AdminPageHeaderProps) {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </section>
  );
}
