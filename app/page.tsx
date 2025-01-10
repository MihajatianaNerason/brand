import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <>
      <h1>Hello World</h1>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
    </>
  );
}
