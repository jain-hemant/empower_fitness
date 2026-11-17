import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        Empower Fitness
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Build strength. Find your pace.
      </h1>
      <p className="max-w-xl text-lg text-zinc-600">
        Your fitness journey starts here. Explore our services or become a
        member today.
      </p>
      <Link
        className="rounded-full bg-emerald-700 px-6 py-3 font-medium text-white hover:bg-emerald-800"
        href="/admission"
      >
        Join Empower Fitness
      </Link>
    </main>
  );
}
