import Image from "next/image";
import Navbar from "../components/navbar";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16">
      <Navbar />
      <h1 className="text-4xl font-bold text-center">
        Smart Room Control System
      </h1>
    </main>
  );
}
