"use client";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-200">
        <h1 className="text-4xl font-bold mb-8 text-center">Meu Portfólio</h1>
        <nav className="flex flex-col items-center space-y-4">
          <Link
            href="/sobre"
            className="bg-blue-500 text-white px-6 py-2 text-lg hover:bg-blue-600 transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/exp-academica"
            className="bg-blue-500 text-white px-6 py-2 text-lg hover:bg-blue-600 transition-colors"
          >
            Experiência Acadêmica
          </Link>
          <Link
            href="/exp-profissional"
            className="bg-blue-500 text-white px-6 py-2 text-lg hover:bg-blue-600 transition-colors"
          >
            Experiência Profissional
          </Link>
          <Link
            href="/projetos"
            className="bg-blue-500 text-white px-6 py-2 text-lg hover:bg-blue-600 transition-colors"
          >
            Projetos Desenvolvidos
          </Link>
          <Link
            href="/jogo"
            className="bg-blue-500 text-white px-6 py-2 text-lg hover:bg-blue-600 transition-colors"
          >
            Jogo da Senha
          </Link>
        </nav>
      </main>
    </>
  );
}
