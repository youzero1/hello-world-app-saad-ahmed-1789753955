export function HelloWorld() {
  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-700 uppercase shadow-sm backdrop-blur">
        <span className="size-1.5 rounded-full bg-indigo-500" />
        Up and running
      </span>

      <h1 className="bg-gradient-to-br from-slate-900 via-indigo-800 to-sky-700 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
        Hello World
      </h1>

      <p className="max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
        Your app is live and ready. This is the starting point — everything from
        here is yours to shape.
      </p>

      <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
    </section>
  );
}
