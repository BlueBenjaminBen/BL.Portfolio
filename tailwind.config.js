/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./build/HTML/**/*.html", "./build/js/**.js"],
  theme: {
    extend: {
      fontFamily:{
        'monoton': ['Monoton', 'sans-serif'],
      },
      animation:{
        'text-slide-em': 'text-slide-em 9.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide-em': {
          '0%, 16%': {
            transform: 'translateY(0em)',
          },
          '20%, 36%': {
            transform: 'translateY(-1.1em)', /**-16.66 */
          },
          '40%, 56%': {
            transform: 'translateY(-2.1em)', /**-33.33 */
          },
          '60%, 76%': {
            transform: 'translateY(-3.1em)', /**-50 */
          },
          '80%, 96%': {
            transform: 'translateY(-4.1em)', /** -66.66 */
          },
          '100%': {
              transform: 'translateY(-5.1em)', /**83.33 */
          },
        }
      }
    },
  },
  plugins: [],
}

