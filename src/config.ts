// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Jason Brown";
export const SITE_DESCRIPTION =
  "Engineering leader, astrophotographer, aviator, innovator";
export const TWITTER_HANDLE = "@jjaybrown";
export const MY_NAME = "Jason Brown";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
