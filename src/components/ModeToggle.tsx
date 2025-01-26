import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-0" />
      </div>
      <Switch
        className="bg-secondary"
        checked={isDark}
        onCheckedChange={() => {
          setIsDark(!isDark);
          document.documentElement.classList.toggle("dark");
        }}
      />
    </div>
  );
}
