import {  by, element,ExpectedConditions, promise , WebElement , ElementFinder} from 'protractor';
import { homepageLocatorsBase } from './homepageLocatorsBase';
import { basePage } from '../../utilityClasses/BaseClass'
var log4js = require("../../../util/helper.js")
import{Alert} from 'selenium-webdriver';
var protractor = require( 'protractor' );
var browser = require("protractor").protractor.browser;
let path = require("path");

let base = new homepageLocatorsBase();

export class uploadFile extends basePage
{

     navigate()
     {
     
      browser.waitForAngularEnabled(false);
      browser.get(browser.params.appUrl);
      browser.driver.manage().window().maximize();
      browser.waitForAngular();
      this.sleep(5000);

     }

     working()
     {
      this.click(base.project);
      this.sleep(100);
     }
     
     group(val)
     {
      this.enterTextByXpath(base.group , val);
      this.sleep(100);
     }

     artifact(val)
     {
      this.enterTextByXpath(base.artifact , val);
      this.sleep(100);
     }

     name(val)
     {
      this.enterTextByXpath(base.name , val);
      this.sleep(100);
     }

     description(val)
     {
      this.enterTextByXpath(base.desc , val);
      this.sleep(100);
     }
     packageName(val)
     {
      this.enterTextByXpath(base.packName , val);
      this.sleep(100);
     }
     addDependencies(val)
     {
      this.click(base.addDependencies);
      this.sleep(100);
      this.enterTextByXpath(base.search, val);
      this.sleep(100);
      this.keyPress(protractor.Key.DOWN);
      this.sleep(100);
      this.keyPress(protractor.Key.ENTER);
      this.sleep(1000);
      this.click(base.generate);
      this.sleep(5000);
     }

    
}