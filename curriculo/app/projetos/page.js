"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/eniobezerra/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200 text-gray-800">
      <div className="w-full max-w-5xl p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Projetos Desenvolvidos</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Projetos Pessoais no GitHub</h2>
          <p className="mb-6 text-sm text-gray-600 text-center max-w-2xl mx-auto">
            Abaixo estão listados alguns dos meus repositórios públicos disponíveis no GitHub. Eles demonstram habilidades práticas com tecnologias modernas e foco em código limpo.
          </p>

          {loading ? (
            <p className="text-center">🔄 Carregando repositórios...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <div
                  key={repo.id}
                  className="p-5 bg-slate-50 rounded-lg shadow hover:shadow-md transition"
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-indigo-600 hover:underline"
                  >
                    {repo.name}
                  </a>
                  <p className="text-sm text-gray-700 mt-2">
                    {repo.description || "Este repositório não possui descrição."}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <Link href="/" className="block mt-10 text-center text-blue-600 hover:underline">
          ⟵ Voltar para Home
        </Link>
      </div>
    </main>
  );
}
