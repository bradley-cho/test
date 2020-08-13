const { I, StepLogin, StepProperity, StepBudget, StepAllocation, StepPlacement, StepTearDown } = inject();

Feature('createLineitem');

Scenario('test something', async(I) => {

    let initialUrl = 'https://dashboard-staging.buzzvil.com/campaign/direct_sales/ads/'
    const revenueType = 'CPC'
    // I.login()

    I.amOnPage(initialUrl)
    // StpeLogin.login("bradley.cho@buzzvil.com","@NGEqUCNt27jxPR")
    //StepLogin.sendForm("bradley.cho@buzzvil.com","@NGEqUCNt27jxPR")
    //StepLogin.sendForm()
    // StepLogin.login("bradley.cho@buzzvil.com","@NGEqUCNt27jxPR")
    
     I.fillField("body > div > form > label:nth-child(2) > input","bradley.cho@buzzvil.com")
     I.fillField("body > div > form > label:nth-child(3) > input","@NGEqUCNt27jxPR")
     I.click("body > div > form > div > button")

    // Create Ad
    I.click("body > div > section > div > div.view-container > div > section.header > div > div > div > button > span")
    I.click("body > div > section > div > div.view-container > div > section.header > div > div > div > div > div > a:nth-child(2)")

    /**** Fill Property ****/
    // Fill Name
    I.fillField("item_name",revenueType+"_Regression_Test") 

    //#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > span
    
    let checkRewardStatus = await I.grabAttributeFrom("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > span","toggle-label");
    await console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa:"+checkRewardStatus )
});
