import Image from "next/image";
import Navbar from "../components/navbar";
import LogCard from "@/components/card";

// async function getData() {
//   const res = await fetch('https://simanis.stei.itb.ac.id/aan/api/')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

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
