const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, '../../packages/kit-tailwind/src/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, '../../packages/kit-fluffy/src/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark'],
    base: true,
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      backgroundImage: {
        'optional-theme-bg': "url('/Button-bg.svg')",
      },
      boxShadow: {
        depth: 'var(--shadow-elevation-medium)',
        'depth-dark': 'var(--dark-shadow-elevation-medium)',
      },
      colors: {
        'qwik-blue': {
          50: 'hsl(204, 100%, 96%)',
          100: 'hsl(203, 100%, 94%)',
          200: 'hsl(199, 97%, 86%)',
          300: 'hsl(198, 100%, 74%)',
          400: 'hsl(197, 97%, 60%)',
          500: 'hsl(197, 93%, 53%)',
          600: 'hsl(199, 100%, 40%)',
          700: 'hsl(200, 100%, 32%)',
          800: 'hsl(200, 94%, 25%)',
          900: 'hsl(201, 84%, 17%)',
          950: 'hsl(204, 83%, 9%)',
        },
        'qwik-purple': {
          50: 'hsl(260, 100%, 90%)',
          100: 'hsl(262, 83%, 91%)',
          200: 'hsl(259, 85%, 92%)',
          300: 'hsl(261, 87%, 85%)',
          400: 'hsl(263, 84%, 73%)',
          500: 'hsl(266, 83%, 66%)',
          600: 'hsl(270, 77%, 58%)',
          700: 'hsl(272, 64%, 50%)',
          800: 'hsl(271, 64%, 42%)',
          900: 'hsl(272, 62%, 30%)',
          950: 'hsl(269, 67%, 13%)',
        },

        'qwikui-purple-50': '#f9f5ff',
        'qwikui-purple-100': '#f2e8ff',
        'qwikui-purple-200': '#e7d6fe',
        'qwikui-purple-300': '#d4b5fd',
        'qwikui-purple-400': '#b37bfa',
        'qwikui-purple-500': '#9f57f5',
        'qwikui-purple-600': '#8835e8',
        'qwikui-purple-700': '#7424cc',
        'qwikui-purple-800': '#6323a6',
        'qwikui-purple-900': '#521d86',
        'qwikui-purple-950': '#360863',
        'qwikui-blue-50': '#effaff',
        'qwikui-blue-100': '#def3ff',
        'qwikui-blue-200': '#b6eaff',
        'qwikui-blue-300': '#76dbff',
        'qwikui-blue-400': '#2dcaff',
        'qwikui-blue-500': '#02b9fc',
        'qwikui-blue-600': '#0090d2',
        'qwikui-blue-700': '#0073aa',
        'qwikui-blue-800': '#00618c',
        'qwikui-blue-900': '#075073',
        'qwikui-blue-950': '#04334d',

        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        ring: 'hsl(var(--color-ring))',
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',

        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--color-muted))',
          foreground: 'hsl(var(--color-muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--color-destructive))',
          foreground: 'hsl(var(--color-destructive-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--color-popover))',
          foreground: 'hsl(var(--color-popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--color-card))',
          foreground: 'hsl(var(--color-card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--border-radius)',
        md: 'calc(var(--border-radius) - 2px)',
        sm: 'calc(var(--border-radius) - 4px)',
      },
      boxShadow: {
        'light-low': `0.3px 0.5px 0.7px hsl(0deg 0% 63% / 0.34),
        0.4px 0.8px 1px -1.2px hsl(0deg 0% 63% / 0.34),
        1px 2px 2.5px -2.5px hsl(0deg 0% 63% / 0.34)`,
        'light-medium': `0.3px 0.5px 0.7px hsl(0deg 0% 63% / 0.36),
        0.8px 1.6px 2px -0.8px hsl(0deg 0% 63% / 0.36),
        2.1px 4.1px 5.2px -1.7px hsl(0deg 0% 63% / 0.36),
        5px 10px 12.6px -2.5px hsl(0deg 0% 63% / 0.36)`,
        'light-high': `0.3px 0.5px 0.7px hsl(0deg 0% 63% / 0.3),
        1.3px 2.6px 3.3px -0.3px hsl(0deg 0% 63% / 0.3),
        2.4px 4.8px 6px -0.6px hsl(0deg 0% 63% / 0.3),
        3.7px 7.5px 9.4px -0.9px hsl(0deg 0% 63% / 0.3),
        5.7px 11.3px 14.2px -1.2px hsl(0deg 0% 63% / 0.3),
        8.5px 16.9px 21.3px -1.6px hsl(0deg 0% 63% / 0.3),
        12.4px 24.9px 31.3px -1.9px hsl(0deg 0% 63% / 0.3),
        17.8px 35.7px 44.9px -2.2px hsl(0deg 0% 63% / 0.3),
        25px 50px 62.9px -2.5px hsl(0deg 0% 63% / 0.3)`,
        'dark-low': `0.4px 0.6px 0.8px hsl(218deg 49% 7% / 0.34),
        0.7px 1px 1.4px -1.2px hsl(218deg 49% 7% / 0.34),
        1.7px 2.5px 3.4px -2.5px hsl(218deg 49% 7% / 0.34)`,
        'dark-medium': `0.4px 0.6px 0.8px hsl(218deg 49% 7% / 0.36),
        1.4px 2px 2.7px -0.8px hsl(218deg 49% 7% / 0.36),
        3.5px 5.1px 7px -1.7px hsl(218deg 49% 7% / 0.36),
        8.6px 12.3px 16.9px -2.5px hsl(218deg 49% 7% / 0.36)`,
        'dark-high': `0.4px 0.6px 0.8px hsl(218deg 49% 7% / 0.3),
        2.3px 3.2px 4.4px -0.3px hsl(218deg 49% 7% / 0.3),
        4.1px 5.8px 8px -0.6px hsl(218deg 49% 7% / 0.3),
        6.4px 9.2px 12.6px -0.9px hsl(218deg 49% 7% / 0.3),
        9.8px 13.9px 19.1px -1.2px hsl(218deg 49% 7% / 0.3),
        14.6px 20.8px 28.6px -1.6px hsl(218deg 49% 7% / 0.3),
        21.4px 30.6px 42px -1.9px hsl(218deg 49% 7% / 0.3),
        30.8px 43.9px 60.3px -2.2px hsl(218deg 49% 7% / 0.3),
        43.1px 61.5px 84.5px -2.5px hsl(218deg 49% 7% / 0.3)`,
      },
      transitionTimingFunction: {
        step: 'cubic-bezier(0.6, 0.6, 0, 1)',
        jumpy: 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
};
