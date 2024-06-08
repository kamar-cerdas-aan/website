import Home from "./home";

export default async function Home() {
  // const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center gap-16">
      <Navbar />
      <h1 className="text-4xl font-bold text-center">
        Smart Room Control System
      </h1>
      <LogCard log="Movement Detected" time="20:13" action="Turned on"></LogCard>
    </main>
  );
}