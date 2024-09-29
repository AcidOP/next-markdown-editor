import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Markdown Viewer and Editor",
  description: "Created with Next.js and react-markdown",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="px-5 mx-auto">{children}</div>
      </body>
    </html>
  );
}
