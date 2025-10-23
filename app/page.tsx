import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-4">Joshua Arenas</h1>
      <p className="mb-6">Welcome to my portfolio! Explore my work below.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Latest Projects</h2>

        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-xl font-bold mb-1">Python + React Test Site</h3>
          <p className="text-sm text-gray-600 mb-2">
            Limited API due to subscription fees (Render deployed)
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <a
                href="https://nba-profiles.onrender.com"
                target="_blank"
                className="text-blue-600 underline"
              >
                Static Site – nba-profiles.onrender.com
              </a>
            </li>
            <li>
              <a
                href="https://nba-backend-qud3.onrender.com"
                target="_blank"
                className="text-blue-600 underline"
              >
                Web Service – nba-backend-qud3.onrender.com
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-1">WordPress Portfolio Site</h3>
          <p className="text-sm text-gray-600 mb-2">
            A minimalist showcase for Disenyo Ni Primo, built with WordPress and PageXL to highlight solo architectural branding and Filipino design sensibilities.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <a
                href="https://disenyoniprimo-markdagale.page.gd/"
                target="_blank"
                className="text-blue-600 underline"
              >
                Visit Site – disenyoniprimo-markdagale.page.gd
              </a>
            </li>
          </ul>
        </div>
      </section>

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