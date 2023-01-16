import {  Browser, by, element,ExpectedConditions, promise } from 'protractor';
import { utilityPage } from './utilityClass';
let protractor = require( 'protractor' );
let browser = require("protractor").protractor.browser;

let utility = new utilityPage();
export class basePage extends utilityPage{
    

    clearText(locator)
    {
       return utility.byXpath(locator).clear();
    }

    click(locator)
    {
       return utility.byXpath(locator).click();
    }

    clickClass(locator)
    {
       return utility.byClass(locator).click();
    }

    enterTextByXpath(locator , value:string )
    {
       return utility.byXpath(locator).sendKeys(value);
    }

    waitForClickable(locator,time)
    {
       return utility.waitToBeClickable(locator , time);
    }

    waitForPresent(locator,time){
       return utility.waitToBePresent(locator , time);
    }

    waitForVisible(locator , time)
    {
       return utility.waitToBeVisible(locator,time);
    }

    pressEnter(){
       return utility.Keyboard(protractor.Key.ENTER);
    }

    keyPress(key){
       return utility.Keyboard(key);
    }
    waitForAlert(val)
    {
       return utility.alertWait(val);
    }

    enterTextByClass(locator , val)
    {
       return utility.byClass(locator).sendKeys(val);
    }

    enterTextByBrowser(val:string)
    {
       return utility.Keyboard(val);
    }

    waitForSelection(locator , val)
    {
       return utility.waitToBeSelected(locator,val);
    }
    sleep(time)
    {
      browser.sleep(time);
    }
    isdisplayed(locator,val)

    {

      return expect(this.byXpath(locator).isDisplayed()).toBe(val);

    }

}