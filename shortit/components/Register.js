import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const router = new useRouter();

  const handleSubmit = async (e, action) => {
    e.preventDefault();
    const { email, password } = e.target;

    if (password.value != repassword) {
      //Notification wrong pw
      console.log('Passwords do not match ' + password.value + " | " + repassword );
      return
    }
    console.log("Try + " + email.value + " " + password.value);
    const result = await signIn('credentials', {
      redirect: false,
      email: email.value,
      password: password.value,
      action: action,
    });

    if (result.error) {
      console.log(result.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={(e) => handleSubmit(e, 'register')} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 mx-auto">
        <h2 className="text-2xl mb-4 font-bold text-gray-900">Register</h2>
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
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Repeat Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="repassword"
            type="password"
            placeholder="Repeat Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <Link legacyBehavior href="/login">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Login
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
