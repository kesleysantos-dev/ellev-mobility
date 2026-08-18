import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Alguns assets do cliente vêm com extensão em maiúsculo (.PNG, .MOV), que
  // o Vite não reconhece como asset por padrão (só casa a versão minúscula).
  assetsInclude: ['**/*.PNG', '**/*.MOV'],
})
