import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        onClick={() => {
          setIsDark(!isDark);
          document.documentElement.classList.toggle("dark");
        }}
        className="relative w-8 h-8"
        variant="link"
      >
        <Sun className="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2" />
      </Button>
      {/* <Switch
        className="bg-secondary"
        checked={isDark}
        onCheckedChange={() => {
          setIsDark(!isDark);
          document.documentElement.classList.toggle("dark");
        }}
      /> */}
    </div>
  );
}
