const fs = require("fs");
let sampleMap = new Map();
let rawdata = fs.readFileSync('../../TestResources/locatorsData.json');
let locators = JSON.parse(rawdata);

export class homepageLocatorsBase {
  project: any;
  group: any;
  artifact: any;
  name: any;
  desc: any;
  packName: any;
  addDependencies: any;
  search: any;
  generate: any;


  constructor() {
    {
        this.project = locators["Project"]["project"];
        this.group = locators["Project"]["group"];
        this.artifact= locators["Project"]["artifact"];
        this.name = locators["Project"]["name"];
        this.desc = locators["Project"]["desc"];
        this.packName = locators["Project"]["packName"];
        this.addDependencies = locators["Project"]["addDependencies"];
        this.search = locators["Project"]["search"];
        this.generate = locators["Project"]["generate"];
    
      }
    }
}
