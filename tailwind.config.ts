import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        custom1: '0px 4px 6px -2px rgba(16, 24, 40, 0.05)', // #1018280d
        custom2: '0px 12px 16px -4px rgba(16, 24, 40, 0.10)', // #1018281a
        'custom-md': '0px 2px 2px 1.8px #0000001A',
         'custom-light': '0px 1px 4px 0px #171B1E33',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       screens: {
        'smipx': '300px',
        // => @media (min-width: 640px) { ... }

        'ipx': '375px',
        // => @media (min-width: 640px) { ... }

        'ip8': '414px',
        // => @media (min-width: 640px) { ... }

        'ip8n': '400px',
        // => @media (min-width: 640px) { ... }

        'at500': '500px',
        // => @media (min-width: 640px) { ... }

        'at594': '594px',
        // => @media (min-width: 640px) { ... }

        'silver': '950px',
        // => @media (min-width: 1536px) { ... }
        'at1098': '1098px',
        // => @media (min-width: 1536px) { ... }
        
      }, 
    },
  },
  plugins: [],
} satisfies Config;
