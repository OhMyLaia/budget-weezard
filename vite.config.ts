import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(),
    tailwindcss()
  ]
})

// export default defineConfig({
//   base: "/",  // Esto asegura que se use la raíz del servidor
//   plugins: [react(), tailwindcss()]
// });

