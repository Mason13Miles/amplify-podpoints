// "use client";

// import { useState, useEffect } from "react";
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";
// import "./globals.css";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";
// import "@aws-amplify/ui-react/styles.css";
// import { useAuthenticator } from "@aws-amplify/ui-react";

// Amplify.configure(outputs);

// const client = generateClient<Schema>();

// export default function App() {
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
//   const { user, signOut } = useAuthenticator();

//   useEffect(() => {
//     const listTodos = client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });

//     return () => listTodos.unsubscribe(); // Cleanup subscription
//   }, []);

//   function createTodo() {
//     client.models.Todo.create({
//       content: window.prompt("Todo content"),
//     });
//   }

//   function deleteTodo(id: string) {
//     client.models.Todo.delete({ id });
//   }

//   return (
//     <main>
//             <h1>{user?.signInDetails?.loginId}'s todos</h1>
//       <h1 className="bg-blue-100 border border-gray-400 rounded-xl">My Todos</h1>
//       <button onClick={createTodo}>+ New</button>
//       <ul>
//         {todos.map((todo) => (
//           <li onClick={() => deleteTodo(todo.id)} key={todo.id}>
//             {todo.content}
//           </li>
//         ))}
//       </ul>
//       <div>
//         🥳 App successfully hosted. Try creating a new todo.
//         <br />
//         <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
//           Review next steps of this tutorial.
//         </a>
//       </div>
//     </main>
//   );
// }


import { Header } from "./components/landing/header"
import { Hero } from "./components/landing/hero"
import { Features } from "./components/landing/features"
import { Testimonials } from "./components/landing/testimonials"
import { Pricing } from "./components/landing/pricing"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />

    </main>
  )
}