export default async function Login() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center align-center gap-16">
        <a href="/" className="text-sky-500 items-left w-96 underline">Back to Home</a>
        <h1 className="text-4xl font-bold text-center">
            Welcome back!
        </h1>
        <div className="flex flex-col items-left gap-4 w-80">
            <input type="text" placeholder="Device ID" className="p-2 border-2 border-sky-600 rounded-lg"/>
            <input type="password" placeholder="Password" className="p-2 border-2 border-sky-600 rounded-lg"/>
        </div>
        <button className="bg-sky-500 py-2 w-48 rounded-lg text-white font-bold">Login</button>
        <div className="flex flex-col items-center gap-2">
            <p>Don't have a device?</p>
            <a href="/register" className="text-sky-500 font-bold underline">Register</a>
        </div>
      </main>
    );
  }
  