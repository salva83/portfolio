import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  Status,
  AfterStep,
} from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { fixture as pageFixture } from "./pageFixtures";
import { invokeBrowser } from "../helpers/browsers/browserManager";
import { getEnvironment } from "../helpers/environment/env";

// Set default timeout to 15 seconds (15000 milliseconds)
setDefaultTimeout(15 * 1000);

const WAIT_TIME_BETWEEN_STEPS = 500;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  getEnvironment();
  browser = await invokeBrowser();
});

Before(async function () {
  context = await browser.newContext();
  pageFixture.page = await context.newPage();
});

AfterStep(async function ({ result }) {
  await pageFixture.page.waitForTimeout(WAIT_TIME_BETWEEN_STEPS);
});

After(async function ({ pickle, result }) {
  // screenshot on failure

  //if (result && result.status === Status.FAILED) {
  const screenshotPath = `reports/screenshots/${pickle.name.replace(/\s+/g, "-").toLowerCase()}.png`;
  const screenshotImage = await pageFixture.page.screenshot({
    path: screenshotPath,
  });
  await this.attach(screenshotImage, "image/png");
  //}

  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
