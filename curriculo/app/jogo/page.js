"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function generateSecret() {
  const digits = new Set();
  while (digits.size < 4) {
    digits.add(Math.floor(Math.random() * 10).toString());
  }
  return Array.from(digits).join("");
}

function getFeedback(guess, secret) {
  let bulls = 0, cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) bulls++;
    else if (secret.includes(guess[i])) cows++;
  }
  return { bulls, cows };
}

export default function Jogo() {
  const [secret, setSecret] = useState("");
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setSecret(generateSecret());
  }, []);

  const handleGuess = () => {
    if (guess.length !== 4 || new Set(guess).size !== 4) return alert("Digite 4 dígitos únicos.");
    const feedback = getFeedback(guess, secret);
    const updatedGuesses = [{ guess, ...feedback }, ...guesses];
    setGuesses(updatedGuesses);
    setGuess("");
    if (feedback.bulls === 4 || updatedGuesses.length >= 10) {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setSecret(generateSecret());
    setGuesses([]);
    setGuess("");
    setGameOver(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-gray-900">
        <h1 className="text-3xl font-bold mb-4 text-center">Jogo da Senha</h1>
        <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:items-center">
          <input
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="border p-2 rounded flex-1"
            placeholder="Digite 4 números únicos"
            disabled={gameOver}
          />
          <button onClick={handleGuess} disabled={gameOver} className="px-4 py-2 bg-blue-600 text-white rounded">
            Tentar
          </button>
        </div>
        <button
          onClick={() => alert(`Senha: ${secret}`)}
          className="mb-4 w-full px-4 py-2 bg-blue-600 text-black rounded"
        >
          Mostrar Senha
        </button>
        <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
          {guesses.map((g, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded shadow text-sm">
              <span className="font-mono">{g.guess}</span>: {g.bulls} bulls, {g.cows} cows
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold mb-2">
              {guesses[0].bulls === 4
                ? "🎉 Parabéns! Você acertou a senha."
                : "❌ Fim de jogo. Número máximo de tentativas alcançado."}
            </p>
            <button onClick={handleRestart} className="px-4 py-2 bg-green-600 text-white rounded">
              Novo Jogo
            </button>
          </div>
        )}
        <Link href="/" className="block mt-6 text-center text-blue-600 underline">
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
