/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      scoreboard: ['scoreboard', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  // plugins: [],
  // darkMode: 'media',

    // make sure to safelist these classes when using purge
    safelist: [
      'w-64',
      'w-1/2',
      'rounded-l-lg',
      'rounded-r-lg',
      'bg-gray-200',
      'grid-cols-4',
      'grid-cols-7',
      'h-6',
      'leading-6',
      'h-9',
      'leading-9',
      'shadow-lg'
    ],
  
    // enable dark mode via class strategy
    darkMode: 'media',
  
    theme: {
      extend: {
        // extend base Tailwind CSS utility classes
      }
    },
    plugins: [
      // include Flowbite as a plugin in your Tailwind CSS project
      require('flowbite/plugin')
    ],
    content: [
      "./node_modules/flowbite/**/*.js",
  ],

  }
  
