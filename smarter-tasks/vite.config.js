import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";

export default ({ mode }) => {
  return defineConfig({
    build: {
      outDir: "build",
    },
    plugins: [react(), reactRefresh(), tailwindcss()],

    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
  });
};
