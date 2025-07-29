import { useBrowserStorageModel } from "@/composition/use-browser-storage";

const DARK_THEME = "dark";
const DEFAULT_THEME = "light";

export const useDarkTheme = () => {
    const { model: currentTheme } = useBrowserStorageModel<"dark" | "light">(
        "localStorage",
        "theme",
        null
    );

    const init = () => {
        const isSystemDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (currentTheme.value) {
            document.documentElement.classList.toggle(currentTheme.value, true);
        } else if (isSystemDark) {
            document.documentElement.classList.toggle(DARK_THEME, true);
        }
    };

    const toggleTheme = () => {
        const current = currentTheme.value;
        if (current === DARK_THEME) {
            currentTheme.value = DEFAULT_THEME;
        } else {
            currentTheme.value = DARK_THEME;
        }
        if (current) {
            document.documentElement.classList.remove(current);
        }
        document.documentElement.classList.add(currentTheme.value);
    };

    return {
        currentTheme,
        init,
        toggleTheme,
    };
};
