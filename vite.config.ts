import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "honourDay2025-3rdPrep",
    build: {
        outDir: './build',
        emptyOutDir: true
    }
});
