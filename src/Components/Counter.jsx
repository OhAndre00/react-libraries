import React, { useState } from "react";

// Componente Counter
export default function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  // Funzione per incrementare
  function increment() {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  }

  // Funzione per decrementare
  function decrement() {
    setCounter((prevCounter) => prevCounter - incrementAmount);
  }

  // Funzione reset
  function reset() {
    setCounter(initialValue);
  }

  return (
    <div className="flex flex-col gap-5 p-10 bg-amber-200 w-fit">
      <CounterDisplay count={counter} />
      <div className="flex gap-5">
        <button
          className="border-2 p-2 rounded-xl border-emerald-400"
          onClick={increment}
        >
          Incrementa
        </button>
        <button
          className="border-2 p-2 rounded-xl border-red-400"
          onClick={decrement}
        >
          Decrementa
        </button>
        <button
          className="border-2 p-2 rounded-xl border-gray-500"
          onClick={reset}
        >
          Ripristina
        </button>
      </div>
    </div>
  );
}

function CounterDisplay({ count }) {
  return (
    <h2 className="font-bold text-2xl text-center">
      Contatore: <span className="text-red-400">{count}</span>
    </h2>
  );
}
