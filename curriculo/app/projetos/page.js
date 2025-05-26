"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/eniobezerra/repos") // Substitua por seu usuário real do GitHub
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-slate-100 to-slate-300 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Projetos Desenvolvidos</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projetos Pessoais no GitHub</h2>
        <p className="mb-6 text-sm text-gray-600">
          Abaixo estão listados alguns dos meus repositórios públicos disponíveis no GitHub. Eles demonstram habilidades práticas com tecnologias modernas, foco em código limpo e projetos independentes construídos com atenção a usabilidade e performance.
        </p>

        {loading ? (
          <p className="text-center">🔄 Carregando repositórios...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo) => (
              <div key={repo.id} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-indigo-600 hover:underline"
                >
                  {repo.name}
                </a>
                <p className="text-sm text-gray-700 mt-2">
                  {repo.description ? repo.description : "Este repositório não possui descrição."}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <Link href="/" className="block mt-12 text-center text-blue-600 hover:underline">⟵ Voltar para Home</Link>
    </main>
  );
}