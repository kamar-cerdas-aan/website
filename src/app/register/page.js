export default function Login() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center align-center gap-16">
        <a href="/" className="text-sky-500 items-left w-96 underline">Back to Home</a>
        <h1 className="text-4xl font-bold text-center">
            Create New Account
        </h1>
        <div className="flex flex-col items-left gap-4 w-80">
            <input type="text" placeholder="Device ID" className="p-2 border-2 border-sky-600 rounded-lg"/>
            <input type="password" placeholder="Password" className="p-2 border-2 border-sky-600 rounded-lg"/>
            <input type="password" placeholder="Re-enter Your Password" className="p-2 border-2 border-sky-600 rounded-lg"/>
        </div>
        <button className="bg-sky-500 py-2 w-48 rounded-lg text-white font-bold">Register</button>
        <div className="flex flex-col items-center gap-2">
            <p>Already have an account?</p>
            <a href="/login" className="text-sky-500 font-bold underline">Try logging in instead</a>
        </div>
      </main>
    );
  }
  