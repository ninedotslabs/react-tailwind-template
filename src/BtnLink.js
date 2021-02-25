import React from "react";

export default function BtnLink({ href, children }) {
  return (
    <a
      href={href}
      className="bg-blue-600 hover:bg-blue-800 duration-200 rounded-xl font-semibold py-2 px-4 inline-flex text-white m-1 font-mono"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
