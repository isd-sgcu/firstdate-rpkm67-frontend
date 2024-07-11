import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-footer':
          'linear-gradient(90deg, #E9A49B -3.82%, #FFFFFF 52.04%, #FFBBD2 85.55%, #F1DFC1 107.89%)',
      },
      fontSize: {
        xss: ['0.625rem', '0.875rem'], //size: 10px, line-height: 14px
      },
      colors: {
        project: {
          fuchsia: '#F75471',
          pink: '#FFBBD2',
          apricot: '#E9A49B',
          cream: '#F1DFC1',
          blue: '#678CEC',
          'dark-gray': '#979797',
          'light-gray': '#313131',
          'light-blue': '#D8E3FE',
          gray: '#DDDDDD',
          brown: '#AA8B84',
        },
      },
      fontFamily: {
        season: ['var(--season)', 'system-ui'],
        athiti: ['var(--athiti)', 'system-ui'],
        sarun: ['var(--sarun)', 'system-ui'],
      },
    },
  },
  plugins: [require('@butterfail/tailwindcss-inverted-radius')],
};
export default config;
