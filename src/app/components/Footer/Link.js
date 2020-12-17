import React from "react";

export const Link = ({ to, label, ...props }) => (
  <a
    href={`#${to}`}
    style={{
      display: "block",
      margin: "20px 0",
      color: "white",
      textDecoration: "none",
    }}
    {...props}
  >
    {label}
  </a>
);
