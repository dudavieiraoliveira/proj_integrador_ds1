
import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const metadata = { title: "Entrar" };

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-sm">
      <h1 className="mb-6 text-2xl font-bold">Entrar</h1>

      <Suspense>
        <LoginForm />
      </Suspense>
    </section>
  );
}
