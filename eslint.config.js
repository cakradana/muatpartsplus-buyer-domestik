// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { nextJsConfig } from "@muatmuat/eslint-config/next-js";

const eslintConfig = [
  ...nextJsConfig,
  // Add any UI-specific overrides here if needed
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rules: {
      // UI-specific rule overrides can go here
    },
  },
  // Exclude SCSS files from ESLint since they're handled by Sass/Tailwind
  {
    ignores: ["src/**/*.scss", "src/**/*.css"],
  },
];

export default eslintConfig;
