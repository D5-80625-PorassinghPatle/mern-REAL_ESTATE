import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div>
        <h1 className="font-bold  text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Porassingh</span>
          <span className="text-slate-950">Patle</span>
        </h1>
        <form>
          <input type="text" placeholder="Search....." />
        </form>
      </div>
    </header>
  );
}
