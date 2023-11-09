### React + Typescript + TailwindCSS + DaisyUI + FontAwesome + React Router Template
```bash
npm i
npm run dev
```
### To recreate this project

```bash
npm create vite@latest
npm install -D tailwindcss postcss autoprefixer daisyui #dependencies
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
npm install react-router-dom
npm install @types/react-router-dom --save-dev
npx tailwindcss init -p
```

```tsx
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
```

```tsx
//.eslintrc.cjs
node: true // stops 'require' is not defined error from having plugins for TW
```