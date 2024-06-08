"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import LogCard from "@/components/card";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getProfile } from "./data";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      getProfile(token).then((data) => {
        console.log("profile", data);
      }).catch((error) => {
        console.error(error);
        router.push("/login");
      });
    }
  }, []);

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
