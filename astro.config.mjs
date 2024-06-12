import { defineConfig } from 'astro/config';

import i18n from "@astrolicious/i18n";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  integrations: [i18n({
    defaultLocale: "nl",
    locales: ["nl", "fr", "en", "de"],
  })]
});