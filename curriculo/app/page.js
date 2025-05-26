"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao meu Portfólio</h1>
      <nav className="space-y-2">
        <Link href="/sobre" className="block text-xl underline">Sobre</Link>
        <Link href="/exp-academica" className="block text-xl underline">Experiência Acadêmica</Link>
        <Link href="/exp-profissional" className="block text-xl underline">Experiência Profissional</Link>
        <Link href="/projetos" className="block text-xl underline">Projetos Desenvolvidos</Link>
        <Link href="/jogo" className="block text-xl underline">Jogo da Senha</Link>
      </nav>
    </main>
  );
}