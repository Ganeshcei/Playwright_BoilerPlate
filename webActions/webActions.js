import { Page } from "playwright";
import { testConfig } from "../testData/testData";

export class webActions
{
    constructor(page) 
    {
        this.page = page;
    }
    async navigateToURL() 
    {
        await this.page.goto(testConfig.dev);
     }

     async clickElement(locator) 
     {
       
        await this.page.click(locator);
    }

    async enterElementText(locator, text)
    {
        await this.page.fill(locator, text);
    } 

}