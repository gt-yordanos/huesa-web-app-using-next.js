import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable specific TypeScript-related rules if needed
      "@typescript-eslint/explicit-module-boundary-types": "off", // Example: Disable explicit return types
      "@typescript-eslint/no-explicit-any": "off", // Example: Disable no-explicit-any rule
    },
  },
];

export default eslintConfig;
