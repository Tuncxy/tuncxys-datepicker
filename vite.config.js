import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/tuncxys-datepicker.js'),
            name: 'TuncxysDatePicker',
            // Çıktı dosya isim şablonu
            fileName: (format) => `tuncxys-datepicker.${format}.js`
        },
        rollupOptions: {
            external: [], // Bağımlılık olmadığı için boş
            output: {
                globals: {},
                // ÖNEMLİ: CSS dosyasının adını burada sabitliyoruz!
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'tuncxys-datepicker.css';
                    return assetInfo.name;
                }
            }
        }
    }
});