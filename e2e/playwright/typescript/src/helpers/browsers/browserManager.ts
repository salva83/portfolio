import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

export const invokeBrowser = () => {
  const HEADLESS_MODE = process.env.HEADLESS === "true";
  const options: LaunchOptions = {
    headless: HEADLESS_MODE,
  };
  const browserType = process.env.BROWSER || "chrome";
  switch (browserType) {
    case "chrome":
      return chromium.launch(options);
    case "firefox":
      return firefox.launch(options);
    case "webkit":
      return webkit.launch(options);
    default:
      throw new Error("Unsupported browser type");
  }
};
