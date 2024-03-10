import report, { GenerateOptions } from "multiple-cucumber-html-reporter";

console.debug(
  "multiple-cucumber-html-reporter - process.argv :",
  process.argv,
  "process.argv.length: ",
  process.argv.length,
);

if (process.argv.length < 3) {
  throw new Error(
    "Incorrect number of arguments for report. Args length: " +
      process.argv.length,
  );
}

// Get the environment from the command-line arguments
const ENVIRONMENT_RUN: string = process.argv[2];
const TAGS: string = process.argv.length> 3 ? process.argv[3] : "";


// Get the environment values from the .env files in the cypress/helpers/environment folder
//TODO - Add the code to read the .env file and get the environment values
// and use it in the report

const DATE_TIME = new Date().toISOString();
//throw new Error("Browser target is not set or set to value " + ENVIRONMENT_RUN);
const options: GenerateOptions = {
  jsonDir: "./reports/json",
  reportPath: "./reports/html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "mac",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Test project" },
      { label: "Release", value: "1.0.0" },
      { label: "Execution Time", value: DATE_TIME },
      { label: "Environment", value: ENVIRONMENT_RUN },
      { label: "Tags", value: TAGS },
    ],
  },
};

report.generate(options);
