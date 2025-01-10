"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <Button onClick={() => setTheme("light")}>Light Mode</Button> <br />
      <Button onClick={() => setTheme("dark")}>Dark Mode</Button> <br />
      <Button onClick={() => setTheme("system")}>System Mode</Button> <br />
    </div>
  );
}
