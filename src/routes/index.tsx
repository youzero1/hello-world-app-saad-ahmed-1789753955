import { createFileRoute } from '@tanstack/react-router';
import { HelloWorld } from '@/components/HelloWorld';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <HelloWorld />
    </main>
  );
}
