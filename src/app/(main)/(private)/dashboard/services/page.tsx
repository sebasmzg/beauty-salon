"use client";

import { signOut } from "next-auth/react";

const ServicesPage = () => {

  const handleLogout = () => {
    console.log('log out');
    signOut({callbackUrl: '/'});
  }

  return (
    
    <div>
      <h1>Services Page</h1>
      <button onClick={handleLogout}>
        log out
      </button>
    </div>
  );
};
export default ServicesPage;
