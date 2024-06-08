'use client'
import Image from "next/image";
import Navbar from "../components/navbar";
import LogCard from "@/components/card";
import { useEffect, useState } from "react";

async function login() {
  const res = await fetch('https://simanis.stei.itb.ac.id/aan/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"device_id":  "A1", 
    "password": "Aan"}),
  }).then(res => console.log(res)).catch(err => console.error(err))
 
  if (!res.ok) {
    throw new Error('Failed to login')
  }
 
  const { token } = await res.json()

  localStorage.setItem('token', token);

  console.log(token)

  return token
}

async function getData() {
  const res = await fetch('https://simanis.stei.itb.ac.id/aan/api/data',
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiIiwiZGV2aWNlX2lkIjoiQTEiLCJpYXQiOjE3MTU2NzExNzl9.csyGnh60ewFfDhf1MgD8Tgx7RhnpjjzaOyxWL_G2tmY`
      }
    }
  ).then(res => console.log(res)).catch(err => console.error(err))
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    login()
    getData()
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  })

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
