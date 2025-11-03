import { useRouter } from "next/navigation"
import { useState } from "react";


export default function useHandleLogin() {
 
    const router =useRouter()
    const [isLoading, setIsLoading] = useState(false)

     const handleLogin = (e, path) => {
    e.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
   if (path) router.push(path);
    }, 2000);

  }

    return {isLoading, handleLogin};
}