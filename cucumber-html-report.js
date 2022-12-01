const report = require("multiple-cucumber-html-reporter");
const start = Date();
const end = Date();
report.generate({
  jsonDir: "cypress/cucumber-json",
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "107",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Report Details",
    data: [
      { label: "Project", value: "HICSE_WebFront" },
      { label: "Release", value: "1.67.1" },
      { label: "Environment", value: "UAT" },
      { label: "Execution Start Time", value: start },
    ],
  },
});
