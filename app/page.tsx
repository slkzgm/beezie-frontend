import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-accent-gold">beezie</h1>
          <p className="text-lg text-text-tertiary">
            Beezie Frontend Exercise - Claw Machine Interface
          </p>
        </div>

        <Link
          href="/claw"
          className="bg-gradient-gold rounded-[10px] px-12 py-4 text-lg font-semibold text-background shadow-glow transition-all hover:shadow-[0px_0px_15px_0px_rgba(255,176,0,0.5)] active:scale-[0.98]"
        >
          Enter Claw Machine
        </Link>
      </div>
    </main>
  );
}
