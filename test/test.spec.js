import { chromium } from "playwright";
import { webActions } from "../webActions/webActions";
import { LoginPageObjects } from "../pageFactory/pageObjFactory/loginPageObj";
import { testConfig } from "../testData/testData";

let page,browser,context,webActionsobj,LoginPageObjects1;
describe("test", () => {
  beforeAll(async () => {
     browser = await chromium.launch(({
      headless: false
   }));
     context = await browser.newContext();
     page = await context.newPage();
  });

  afterAll(() => {
    if (!page.isClosed()) {
      browser.close();
    }
  });

  test("test", async () => {
    webActionsobj=new webActions(page);
    await webActionsobj.navigateToURL();
    await webActionsobj.enterElementText(LoginPageObjects.EMAIL_EDITBOX_ID,testConfig.username);
    await webActionsobj.enterElementText(LoginPageObjects.PASSWORD_EDITBOX_ID,testConfig.username);
    await webActionsobj.clickElement(LoginPageObjects.SUBMIT_BUTTON_ID);
  
  });
});
