"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import LogCard from "@/components/card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProfile, getHistory } from "./data";

export default function Home() {
  const router = useRouter();
  const [profile, setProfile] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      getProfile(token).then((data) => {
        console.log("profile", data);
        setProfile(data)
        getHistory(token).then((hist) => {
          console.log("History", hist)
          setHistory(hist)
        })
      }).catch((error) => {
        console.error(error);
        router.push("/login");
      });

    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-16">
      <Navbar username={profile.name} />
      <h1 className="text-4xl font-bold text-center">
        Smart Room Control System
      </h1>
      {
        history.map(item => {
          if (item.load == 1) {
            item.log = "Sleep detected"
            item.action = "Light off"
          } else if (item.pir == 1) {
            item.log = "Movement detected"
            item.action = "Light on"
          } else {
            item.log = "Room empty"
            item.action = "Light off"
          }
          return <LogCard key={item._id} log={item.log} time={item.timestamp} action={item.action} />
        })
      }
    </main>
  );
}
