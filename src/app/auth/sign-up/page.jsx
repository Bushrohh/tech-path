'use client'

import React from 'react'
import { Button } from "@/src/components/ui/button";
import { Spinner } from "@/src/components/ui/spinner";
import useHandleLogin from "@/src/hooks/handleLogin.js";

export default function SignUpPage() {

  const {isLoading, handleLogin} = useHandleLogin();

  return ( 
    <div className="flex h-screen">

      <div className="w-full  flex flex-col justify-center items-center p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create an Account</h2>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            reuired
          />
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
          
        </form>
        
        <Button className='w-full mt-5' size='xl'
        onClick={(e) => handleLogin(e, "/opt-path")}>
          {isLoading ? <Spinner /> : 'Sign Up'}
        </Button>

        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="text-teal-600 font-semibold hover:underline">
            Log In
          </a>
        </p>
      </div>
 </div>
  );
}
