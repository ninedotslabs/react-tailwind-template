import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex flex-wrap flex-row justify-center p-2 md:justify-between">
      {children}
    </div>
  );
}
