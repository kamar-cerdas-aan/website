import Navbar from "./navbar";

export default async function MainLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      {children}
    </main>
  );
}
