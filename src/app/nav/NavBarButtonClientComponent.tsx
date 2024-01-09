'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import LoginComponent from "@/components/LoginComponent";

export default function NavBarButtonClientComponent({children}: { children?: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle for hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </label>
      <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${menuOpen ? 'block' : 'hidden'}`}>
        <li><Link href="/">Scenarios</Link></li>
        <li><Link href="/tags">Tags</Link></li>
        {children}
      </ul>
    </div>
  );
}