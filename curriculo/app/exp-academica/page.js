"use client";
import Link from "next/link";

export default function Academico() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200 text-neutral-900 px-6 py-12 font-sans">
      <div className="w-full max-w-3xl bg-white p-10 rounded-xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-12">Formação Acadêmica</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold mb-1">Curso de Jogos Digitais</h2>
            <p className="text-sm text-neutral-600 mb-2">
              Universidade Católica de Pernambuco — <span className="italic">2017</span>
            </p>
            <p className="text-base text-neutral-700">
              Fundamentos em desenvolvimento de jogos, programação gráfica, modelagem 3D, design de interfaces e engines como Unity e Unreal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-1">Curso de Sistemas para Internet</h2>
            <p className="text-sm text-neutral-600 mb-2">
              Universidade Católica de Pernambuco — <span className="italic">2023</span>
            </p>
            <p className="text-base text-neutral-700">
              Ênfase em desenvolvimento web, engenharia de software, aplicações distribuídas, banco de dados, APIs e tecnologias modernas de front e back-end.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/">
            <button className="text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-2 transition">
              ⟵ Voltar para Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
