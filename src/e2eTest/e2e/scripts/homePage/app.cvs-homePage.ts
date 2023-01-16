import { browser, by, element, ElementFinder } from 'protractor';
import { __param } from "tslib";
import { config } from "process";
import { uploadFile } from "./homePage";
//browser.ignoreSynchronization = true;

describe('Home Page', () => {
  let homepage: uploadFile;
  const fs = require("fs");
  let sampleMap = new Map();
  let rawdata = fs.readFileSync('../../TestResources/testData.json');
  let web = JSON.parse(rawdata);
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    homepage = new uploadFile();
  });
  it('TEsts' , ()=> {
        homepage.navigate();
        homepage.working();
        homepage.group(web["data"]["group"]);
        homepage.artifact(web["data"]["artifact"]);
        homepage.name(web["data"]["name"]);
        homepage.description(web["data"]["description"]);
        homepage.packageName(web["data"]["packageName"]);
        homepage.addDependencies(web["data"]["dependencies"]);

  });


})
