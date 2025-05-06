type SectionHeaderProps = {
  title: string;
  description?: string;
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col items-center text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  );
}
