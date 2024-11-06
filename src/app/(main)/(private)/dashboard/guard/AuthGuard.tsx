"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const { status} = useSession();
    const router = useRouter();

    useEffect(()=>{
        if(status === 'unauthenticated'){
            router.push('/login');
        }
    },[status, router])

    if (status === 'authenticated'){
        return (
            <>{children}</>
        )
    }
    
    if(status === 'loading'){
        return (
            <div>Loading...</div>
        )
    }
  }