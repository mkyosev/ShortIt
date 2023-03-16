import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useRouter } from "next/router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e, action) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
      action: action,
    });

    if (result.error) {
      console.log(result.error);
    } else {
      router.push('/');
    }
  };
  // const [session, loading] = useSession()
  const { data: session } = useSession()
  console.log(session);
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={(e) => handleSubmit(e, 'login')} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 mx-auto">
        <h2 className="text-2xl mb-4 font-bold text-gray-900">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => handleSubmit(e, 'login')}
          >
            Sign In
          </button>
          <Link legacyBehavior href="/register">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Register
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => signIn('github')}
            className="w-12 h-12 flex items-center justify-center bg-white text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <BsGithub />
          </button>
          <span className="mx-4 text-gray-400">|</span>
          <button
            onClick={() => signIn('google')}
            className="w-12 h-12 flex items-center justify-center bg-white text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <BsGoogle />
          </button>
        </div>

      </form>
    </div>
  );


};

export default Login;
