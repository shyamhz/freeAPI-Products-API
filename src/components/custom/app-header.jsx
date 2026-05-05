import { useState, useEffect } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const AppHeader = ({ title }) => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "system";
    const isDarkMode =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    updateTheme(newDarkMode);
  };

  return (
    <header className="border-b px-4 py-3 sm:py-4 flex gap-2 sm:gap-4 items-center justify-between">
      <div className="flex gap-2 sm:gap-4 items-center min-w-0">
        <SidebarTrigger />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-none tracking-tight truncate">
          {title}
        </h1>
        <div>
          <p className="text-sm">
            Powered by{" "}
            <a href="https://freeapi.app">
              <strong> FreeAPI.app</strong>
            </a>
          </p>
          <p className="text-muted-foreground text-xs">
            Favicon by{" "}
            <a target="_blank" href="https://icons8.com/icon/64748/tea-bag">
              <strong>Icons8</strong>
            </a>
          </p>
        </div>
      </div>
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="icon"
        className="shrink-0"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </header>
  );
};

export default AppHeader;
