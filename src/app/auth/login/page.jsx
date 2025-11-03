'use client'

import { Button } from "@/src/components/ui/button";
import { Spinner } from "@/src/components/ui/spinner";
import useHandleLogin from "@/src/hooks/handleLogin.js";

export default function LoginPage() {
  
  const { isLoading, handleLogin } = useHandleLogin();

  return (
    <div className="w-full max-w-sm space-y-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back</h2>
      <form onSubmit={useHandleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          required
        />
        <Button className='w-full' size='xl'
        onClick={(e) => handleLogin(e, "/opt-path")}>
          {isLoading ? <Spinner /> : 'Login'}
        </Button>
      </form>
      <p className="mt-4 text-gray-600">
        Don’t have an account?{" "}
        <a
          href="/auth/sign-up"
          className="text-teal-600 font-semibold hover:underline"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}
