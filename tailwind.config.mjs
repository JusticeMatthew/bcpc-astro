/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  blocklist: ['container'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      margin: {
        section: 'var(--space-section)',
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        bebas: ['BebasNeue', ...defaultTheme.fontFamily.sans],
        zeyada: ['Zeyada', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        min: 'var(--step-00)',
        bread: 'var(--step-0)',
        subtitle: 'var(--step-1)',
        title: 'var(--step-3)',
        headline: 'var(--step-7)',
      },
      colors: {
        light: '#F8FAFC',
        dark: '#18181B',
        brand: '#F6921E',
        mid: '#27272A',
      },
    },
  },
  plugins: [],
};
