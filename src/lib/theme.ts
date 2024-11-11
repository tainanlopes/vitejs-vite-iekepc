interface ThemeConfig {
  brand: {
    name: string;
    logo: {
      path: string;
      height: string;
      alt: string;
    };
  };
  colors: {
    primary: {
      main: string;
      hover: string;
      light: string;
    };
    secondary: {
      main: string;
      hover: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    background: {
      main: string;
      light: string;
      dark: string;
    };
    border: {
      main: string;
      focus: string;
    };
  };
  typography: {
    fontFamily: string;
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
  };
}

const themeConfig = {
  brand: {
    name: "Leve",
    logo: {
      path: "/logo.svg",
      height: "32px",
      alt: "Leve Saúde",
    },
  },
  colors: {
    primary: {
      main: "#4B0082",
      hover: "#3D006A",
      light: "#6B2FA3",
    },
    secondary: {
      main: "#F59E0B",
      hover: "#D97706",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
      muted: "#6B7280",
    },
    background: {
      main: "#FFFFFF",
      light: "#F9FAFB",
      dark: "#F3F4F6",
    },
    border: {
      main: "#E5E7EB",
      focus: "#4B0082",
    },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
} as const;

export const getThemeValue = (path: string) => {
  return path.split('.').reduce((obj: any, key: string) => obj?.[key], themeConfig);
};

export const theme: ThemeConfig = themeConfig;