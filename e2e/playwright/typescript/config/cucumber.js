module.exports = {
  default: {
    tags: process.env.TEST_SUITE_TAGS || "",
    retry: parseInt(process.env.RETRY_ATTEMPTS) || 0,
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["src/test/features/"],
    dryRun: false,
    require: ["src/test/steps/*.ts", "src/hooks/*.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:reports/html/cucumber-html-report.html",
      "json:reports/json/cucumber-json-report.json",
    ],
  },
};
