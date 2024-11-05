"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const ServicesPage = () => {

  const handleLogout = () => {
    console.log('log out');
    signOut({callbackUrl: '/'});
  }

  return (
    
    <div>
      <h1>Services Page</h1>
      <div>
      <button onClick={handleLogout}>
        log out
      </button>
      </div>
      <div><button><Link href={"/dashboard/services/test"}>test</Link></button></div>
    </div>
  );
};
export default ServicesPage;
