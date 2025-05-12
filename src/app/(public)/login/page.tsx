import AuthForm from "@/components/auth-form";
import Link from "next/link";

export default function LoginForm() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center border-t">
      <h1 className="mb-5 text-center">Log in</h1>

      <AuthForm type="logIn" />
      <p className="mt-6 text-sm text-zinc-500">
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </p>
    </main>
  );
}
