import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-4">Joshua Arenas</h1>
      <p className="mb-6">Welcome to my portfolio! Explore my work below.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">GitHub Repositories</h2>
        <a
          href="https://github.com/zenohj?tab=repositories"
          target="_blank"
          className="text-blue-600 underline"
        >
          View my GitHub
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">CodePen Projects</h2>
        <ul className="list-disc pl-6 space-y-1">
          {[
            'pvgNxJg', 'yyeVqWG', 'zxroJwv', 'gbPLdWe',
            'myVOGYG', 'bNEBPza', 'MYKbMRZ', 'emJBwwo'
          ].map(id => (
            <li key={id}>
              <a
                href={`https://codepen.io/Joshua-Arenas/pen/${id}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                CodePen: {id}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}