import { createSignal, createResource } from 'solid-js';
import type { Component } from 'solid-js';

import { GASClient } from 'gas-client';
import * as server from '../public/server';
const { serverFunctions } = new GASClient < typeof server > ();

const fetchActiveUserEmail = async (count: number) => (await serverFunctions.getActiveUserEmail(count));

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  const [email] = createResource(count, fetchActiveUserEmail);

  return (
    <div class="m-0 w-screen h-screen flex flex-col justify-center items-center gap-4">
      <div class="p-8 font-mono text-4xl text-center">{email.loading ? "loading..." : email()}</div>
      <button class="p-4 bg-slate-500 rounded-xl font-mono text-4xl" onclick={increment}>+</button>
      <div class="p-8 font-mono text-9xl text-center">{count()}</div>
      <button class="p-4 bg-slate-500 rounded-xl font-mono text-4xl" onclick={decrement}>-</button>
    </div>
  );
};

export default App;
