import constantsInstance from "../../utils/constants";
import { getEnvironment } from "../environment/env";

const report = require("multiple-cucumber-html-reporter");
getEnvironment();
let environment =process.env.ENVIRONMENT;
let cycleReference = "B11221.34321";

report.generate({
  jsonDir: "./reports/json/",
  reportPath: "./reports/html/",
  reportName: "Test challenge report",
  pageTitle: "Test challenge report",
  metadata: {
    browser: {
      name: process.env.BROWSER,
  
    },
    device: "Local test machine",
    platform: {
      name: "Unix/Linux",
      version: "to be customised",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Test challenge" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Environment", value: environment },
      { label: "Report date", value: new Date().toLocaleString() },
    ],
  },
});
