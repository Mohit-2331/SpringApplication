// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const fs = require("fs");
let sampleMap = new Map();
var SpecReporter = require("jasmine-spec-reporter").SpecReporter;

exports.config = {
  allScriptsTimeout: 11000,

  specs: ['../../scripts/homePage/app.cvs-homePage.ts'],
  capabilities: {
    browserName: "chrome",
    unexpectedAlertBehaviour: "accept",
  },
  params: {
    appUrl: "https://start.spring.io/",
    login: {
      username: "event_lead1@test.com",
      password: "password",
    },
  },
  directConnect: true,
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    var fs = require("fs-extra");
    fs.emptyDir("screenshots/", function (err) {
      console.log(err);
    });
    require("ts-node").register({
      project: require("path").join(__dirname, "../../tsconfig.e2e.json"),
    });
    browser.ignoreSynchronization = true;
    var jasmineReporters = require("jasmine-reporters");
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: "./",
        filePrefix: "xmlresults",
      })
    );

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == "failed" || "passed") {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get("browserName");
            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream(
                "screenshots/" + browserName + "-" + result.fullName + ".png"
              );
              stream.write(new Buffer(png, "base64"));
              stream.end();
            });
          });
        }
      },
    });
  },
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();
    var HTMLReport = require("protractor-html-reporter");
    capsPromise.then(function (caps) {
      browserName = caps.get("browserName");
      browserVersion = caps.get("version");
      testConfig = {
        reportTitle: "CVS Health Report",
        outputPath: "./",
        screenshotPath: "./screenshots",
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
      };
      new HTMLReport().from("xmlresults.xml", testConfig);
    });
  },
};
