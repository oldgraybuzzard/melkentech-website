import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4B0082',
          dark: '#2D004D',
        },
        secondary: {
          DEFAULT: '#B084CC',
        },
        accent: {
          DEFAULT: '#ACC3A6',
        },
        neutral: {
          DEFAULT: '#EFEFEF',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config