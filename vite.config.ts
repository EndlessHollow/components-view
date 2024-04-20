import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@helpers": path.resolve(__dirname, "./src/helpers"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@stores": path.resolve(__dirname, "./src/stores"),
        },
    },
    plugins: [react()],
});
