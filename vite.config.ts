import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // uncomment this if you want to change the default port 5173 to 3000
    /*server: {
        port: 3000,
    },*/
})
