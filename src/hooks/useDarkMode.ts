import { useLayoutEffect, useState } from "react";

const THEME_LOCAL_STORAGE_KEY = "theme";
const savedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

type Theme = "light" | "dark";

const toggleThemeClassName = (theme: Theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
};

export const useDarkMode = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>(
    savedTheme ? (savedTheme as Theme) : "light"
  );

  useLayoutEffect(() => {
    toggleThemeClassName(activeTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTheme]);

  const toggleTheme = () => {
    const newThemeMode = activeTheme === "light" ? "dark" : "light";
    setActiveTheme(newThemeMode);
    toggleThemeClassName(newThemeMode);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newThemeMode);
  };
  return {
    activeTheme,
    toggleTheme,
  };
};
