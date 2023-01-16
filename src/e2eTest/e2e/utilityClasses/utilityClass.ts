import {  by, element,ExpectedConditions, promise } from 'protractor';
let protractor = require( 'protractor' );
let browser = require("protractor").protractor.browser;


export class utilityPage{
    
    byXpath(locator)
    {
       return element(by.xpath(locator));
    }

    byClass(locator){
      return element(by.className(locator));
    }

    byName(locator)
    {
      return element(by.name(locator));
    }

    byId(locator){
      return element(by.id(locator));
    }

    waitToBeClickable(locator , time)
    {
       return  browser.wait(ExpectedConditions.elementToBeClickable(this.byXpath(locator)),  time);
    }

    waitToBePresent(locator , time)
    {
       return  browser.wait(()=>((this.byXpath(locator)).isPresent()),time);
    }
     
    waitToBeVisible(locator,time)
    {
      return browser.wait(ExpectedConditions.visibilityOf(this.byXpath(locator)),time);
    }

    alertWait(time)
    {
       return browser.wait(ExpectedConditions.alertIsPresent(),time);
    }

    Keyboard(val)
    {
       return browser.actions().sendKeys(val).perform();
    }
    waitToBeSelected(locator,time)
    {
      return browser.wait(()=>((this.byXpath(locator)).isSelected()),time);
    }
}
