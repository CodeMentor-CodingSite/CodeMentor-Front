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
        backgroundDark: '#1A1A1A',
        componentDark: '#2A2A2A',
        borderDark: '#606060',
        subtextDark: '#A3A3A3',
        inactiveDark: '#666666'
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
