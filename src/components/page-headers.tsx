type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-muted/50 py-12 md:py-16">
      <div className="container px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground mx-auto max-w-2xl md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
