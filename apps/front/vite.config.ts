import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import { ViteAliases } from "vite-aliases";

export default defineConfig({
  plugins: [
    react(),
    ViteAliases({
      /**
       * Relative path to the project directory
       */
      dir: "src",

      /**
       * Prefix symbol for the aliases
       */
      prefix: "@",

      /**
       * Allow searching for subdirectories
       */
      deep: true,

      /**
       * Search depthlevel for subdirectories
       */
      depth: 1,

      /**
       * Creates a Logfile
       * use `logPath` to change the location
       */
      createLog: false,

      /**
       * Create global project directory alias
       */
      createGlobalAlias: true,

      /**
       * Turns duplicates into camelCased path aliases
       */
      adjustDuplicates: false,

      /**
       * Used paths in JS/TS configs will now be relative to baseUrl
       */
      useAbsolute: false,

      /**
       * Adds seperate index paths
       * approach created by @davidohlin
       */
      useIndexes: false,

      /**
       * Generates paths in IDE config file
       * works with JS or TS
       * for Typescript: set `useTypescript` true
       */
      useConfig: false,

      /**
       * Will generate Paths in tsconfig
       * used in combination with `useConfig`
       */
      useTypescript: true
    })
  ],
  server: {
    watch: {
      usePolling: true
    }
  }
});
