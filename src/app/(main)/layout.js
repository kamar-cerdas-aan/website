import Navbar from "../../components/navbar";

export default function MainLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      {children}
    </main>
  );
}
