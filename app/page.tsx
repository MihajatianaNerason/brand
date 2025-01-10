"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <p>{theme}</p>
      <Button
        onClick={() => setTheme("dark")}
        variant={"default"}
        className="text-foreground"
      >
        Dark
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant={"default"}
        className="text-foreground"
      >
        Light{" "}
      </Button>
    </div>
  );
}
