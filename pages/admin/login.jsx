import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("https://pikko.vercel.app/api/login", {
        username,
        password
      });
      router.push("/admin");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black/25">
      <div className="border border-black p-20 rounded-lg flex flex-col bg-white">
        <h1 className="text-2xl font-semibold mb-8">Admin Dashboard</h1>
        <input
          className="border border-black p-1 mb-4"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border border-black p-1 mb-4"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-lime-600 text-white border border-black p-1"
          onClick={handleClick}
        >
          Sign In
        </button>
        {error && <span className="mt-4 text-red-400">Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
