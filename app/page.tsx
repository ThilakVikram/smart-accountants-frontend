const modules = [
  { title: "Company Data", description: "Manage and maintain company records." },
  { title: "Processes", description: "Track and handle ongoing processes." },
  { title: "Decisions", description: "Review information and support decision making." },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
        <span className="text-lg font-semibold tracking-tight">Smart Accountants</span>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Manage company data, processes and decisions from one place.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.title}
              className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="font-medium">{m.title}</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{m.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
