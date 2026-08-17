import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Alguns assets do cliente vêm com extensão em maiúsculo (.PNG), que o
  // Vite não reconhece como asset por padrão (só casa .png em minúsculo).
  assetsInclude: ['**/*.PNG'],
})
