import React, { ReactNode } from "react";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
return (
  <html>
    <body>
      {children}
    </body>
  </html>
)
}
