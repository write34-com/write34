import React from 'react';
import Link from 'next/link';
import LoginComponent from "@/components/LoginComponent";
import NavBarButtonClientComponent from "@/app/nav/NavBarButtonClientComponent";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <NavBarButtonClientComponent>
          {/* TODO: Cleanup the dropdown menu to not use this hacky solution for splitting client/server code */}
          <li><LoginComponent /></li>
        </NavBarButtonClientComponent>
        <Link className="btn btn-ghost hidden lg:flex" href="/scenarios/popular">Popular</Link>
        <Link className="btn btn-ghost hidden lg:flex" href="/tags">Tags</Link>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" href="/">write34</Link>
      </div>

      <div className="navbar-end">
        <Link href="/scenarios/upload">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
            </svg>
          </button>
        </Link>
        <Link href="/search">
          <button className="btn btn-ghost btn-circle mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </Link>
        <div className="hidden md:flex items-center">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}
