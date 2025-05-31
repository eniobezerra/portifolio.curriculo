"use client";
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="max-w-2xl p-8 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>
        <p className="mb-4">
          Este portfólio foi desenvolvido utilizando as seguintes tecnologias e módulos:
        </p>
        <ul className="list-disc list-inside text-left mb-6">
          <li><strong>Next.js:</strong> Framework para aplicações React com renderização híbrida.</li>
          <li><strong>React:</strong> Biblioteca JavaScript para criação de interfaces de usuário.</li>
          <li><strong>TailwindCSS:</strong> Framework CSS utilitário para estilização rápida e responsiva.</li>
          <li><strong>useState e useEffect:</strong> Hooks do React utilizados para gerenciar estado e efeitos colaterais.</li>
          <li><strong>Fetch API:</strong> Utilizado para integração com APIs externas (nas páginas futuras).</li>
          <li><strong>Componentização:</strong> Reutilização de componentes para melhor manutenção e organização do código.</li>
        </ul>
        <Link href="/" className="text-blue-600 underline">Voltar para Home</Link>
      </div>
    </main>
  );
}
