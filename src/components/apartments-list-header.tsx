type ApartmentListHeaderProps = {
  totalCount: number;
};

export function ApartmentListHeader({ totalCount }: ApartmentListHeaderProps) {
  return (
    <div className="bg-muted/50 py-8">
      <div className="container px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Apartments for Rent
            </h1>
            <p className="text-muted-foreground">
              {totalCount} {totalCount === 1 ? "apartment" : "apartments"}{" "}
              available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
