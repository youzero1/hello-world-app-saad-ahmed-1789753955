import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Hello World</h1>
      </div>
    </main>
  );
}
