/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        sm: '50px',
        md: '100px',
        lg: '128px',
      },
    },
    screens: {
      sm: '320px',
      // => @media (min-width: 375px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'primary-text-color': '#121417',
      'secondary-text-color': 'rgba(18, 20, 23, 0.8)',
      'icon-color': 'rgba(18, 20, 23, 0.9)',
      'accent-color': '#f4c550',
      'bg-color': ' #fff',
      'border-color': 'rgba(18, 20, 23, 0.1)',
      'error-color': '#da1414',
      'correct-color': '#3cbc81',
    },
  },
  plugins: [],
};
