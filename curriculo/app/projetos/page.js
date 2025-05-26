"use client";
import Link from "next/link";

export default function Projetos() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Projetos Desenvolvidos</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Plataforma de Recrutamento Inteligente</h2>
          <p className="mt-2 text-gray-700">
            Sistema completo de recrutamento automatizado com análise de currículos, triagem automática e painel de administração.
            Utilizou tecnologias como Next.js, MongoDB, TailwindCSS e OpenAI API para análise semântica.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Dashboard de Métricas para E-commerce</h2>
          <p className="mt-2 text-gray-700">
            Projeto focado em visualização de dados de vendas, conversões e tráfego, integrando com APIs do Google Analytics e Stripe.
            Tecnologias: React, Chart.js, TailwindCSS.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Aplicativo de Tarefas com Firebase</h2>
          <p className="mt-2 text-gray-700">
            App responsivo de organização pessoal com autenticação via Firebase e persistência de dados em tempo real. Interface simples e moderna.
          </p>
        </section>
      </div>
      <Link href="/" className="block mt-8 text-blue-600 underline">Voltar para Home</Link>
    </main>
  );
}