import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A',
        component: '#2A2A2A',
        border: '#606060',
        subtext: '#A3A3A3',
        inactive: '#666666'
      },
      width: {
        desktop: '1280px',
      },
      minWidth: {
        desktop: '1280px',
      }
    },
  },
  plugins: [nextui()],
}
export default config
