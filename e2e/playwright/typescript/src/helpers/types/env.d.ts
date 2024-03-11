export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      BROWSER: "chrome" | "firefox" | "webkit";
      ENVIRONMENT: "development" | "qa" | "qa_local" | "staging" | "production";
      HEADLESS: "true" | "false";
      LOCALE_COUNTRY: string;
    }
  }
}
