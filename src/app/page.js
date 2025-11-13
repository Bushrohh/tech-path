"use client";

import { Button } from "@/src/components/ui/button";
import useHandleLogin from "@/src/hooks/handleLogin";
import { Spinner } from "@/src/components/ui/spinner";


export default function Home() {
  const { isLoading, handleLogin } = useHandleLogin();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-teal-100 text-center p-6">
      <img
        src="/techlogonew.svg" 
        alt="Tech Path logo" 
        width={124}   
        height={124} 
      />
      <div className="mb-10">
        <h1 className="text-teal-700 font-black text-5xl mb-3">Tech Path</h1>
        <p className="text-teal-700 text-lg font-light tracking-wide">
          Find Your Perfect Tech Path
        </p>
      </div>

      <div className="w-full max-w-xs mb-8">
        <Button
          onClick={(e) => handleLogin(e, "/auth/login")}
          className="w-full bg-teal-600 text-white font-semibold hover:bg-white hover:text-teal-700 transition"
          size="lg"
        >
          {isLoading ? <Spinner /> : "Login"}
        </Button>
      </div>

      <p className="text-teal-700 text-md">
        Don’t have an account yet?{" "}
        <a
          href="/auth/sign-up"
          className="text-teal-700 font-semibold hover:underline"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
