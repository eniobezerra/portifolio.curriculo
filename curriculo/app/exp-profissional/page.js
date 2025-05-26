"use client";
import Link from "next/link";

export default function Profissional() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Experiência Profissional</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Desenvolvedor Front-End</h2>
          <p className="text-md text-gray-700">Empresa TechSol — Jan 2023 até o momento</p>
          <p className="mt-2">Atuação no desenvolvimento de aplicações web utilizando React, Next.js, TailwindCSS e integração com APIs REST. Participação ativa em reuniões de planejamento ágil e code reviews.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Estagiário em Desenvolvimento Web</h2>
          <p className="text-md text-gray-700">StartUp WebHub — Ago 2021 a Dez 2022</p>
          <p className="mt-2">Criação e manutenção de páginas institucionais, landing pages e integração com sistemas de terceiros. Trabalho com HTML, CSS, JavaScript e bibliotecas modernas.</p>
        </section>
      </div>
      <Link href="/" className="block mt-8 text-blue-600 underline">Voltar para Home</Link>
    </main>
  );
}