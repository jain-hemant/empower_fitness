type SectionPageProps = {
  title: string;
};

export function SectionPage({ title }: SectionPageProps) {
  return (
    <main className="flex flex-1 flex-col gap-4 px-6 py-12 sm:px-10">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="max-w-2xl text-zinc-600">
        The {title.toLowerCase()} page is ready for its feature implementation.
      </p>
    </main>
  );
}
