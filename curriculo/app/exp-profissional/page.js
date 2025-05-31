"use client";
import Link from "next/link";

export default function Profissional() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-md text-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-center">Experiência Profissional</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">Unicap (Universidade Católica de Pernambuco)</h2>
            <p className="text-md text-gray-700 mb-2">Atividades realizadas:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Manutenção de Redes</li>
              <li>Manutenção de Câmeras IP com o Software Genetec</li>
              <li>Manutenção de Nobreaks</li>
              <li>Manutenção de Impressoras Laser</li>
            </ul>
          </section>

          

          
        </div>
        <Link href="/" className="block mt-8 text-blue-600 underline text-center">Voltar para Home</Link>
      </div>
    </main>
  );
}
