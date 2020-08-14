const { I, StepLogin, StepProperity, StepBudget, StepAllocation, StepPlacement, StepTearDown, StepDataValodation} = inject();
const assert = require('assert');

const displayWeightValue = ''
const ipuYN = "n"
const hipu = '3'
const dipu = '3'
const tipu = '3'
const cpuYN = "n"
const hcpu = '3'
const dcpu = '3'
const tcpu = '3'


let initialUrl = 'https://dashboard-staging.buzzvil.com/campaign/direct_sales/ads/'

// Scenario Outline: 로그인 기능 확인
Given(/Direct Sales 페이지로 이동/, async() => {
  await console.log("Direct Sales 페이지로 이동")
  await I.amOnPage(initialUrl)

});

When (/ID 입력/, async() => {
  await console.log("ID 입력")
  await StepLogin.enterId("bradley.cho@buzzvil.com")
  
});

When (/Password 입력/, async() => {
  await  console.log("Password 입력")
  await StepLogin.enterPassword("@NGEqUCNt27jxPR")
  
});

 When (/확인 버튼 클릭/, async() => {
  await  console.log("확인 버튼 클릭")
  await  StepLogin.clickSubmit()
});

 When (/Direct Sales >> Ads 페이지로 이동/, async() => {
  await console.log("Direct Sales >> Ads 페이지로 이동")
  await StepLogin.movetoAds()
});


When ('Name {word} Regression_Test 입력', async(RevenueType) => {
  await console.log("Name "+ RevenueType + " Regression_Test 입력")
  await StepProperity.name(RevenueType)
});

When ('{word} 입력', async(RevenueType) => {
  await console.log(RevenueType+" 입력")
  await StepProperity.revenueType(RevenueType)
});	



When ('Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 설정', async() => {
  await console.log("Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 설정")
  await StepProperity.setEnv()
});

When ('Platform 선택 : {word}', async(platformCode) => {
  await console.log("Platform 선택")
  await StepProperity.setPlatform(platformCode)
});

When ('Category Tag 3rd Party Tracker 선택', async() => {
  await console.log("Category Tag 3rd Party Tracker 선택")

});
When ('Package, URL Scheme 입력 when {word}, {word} : packageName = {word}, URLScheme = {word}, launchPackage = {word}', async(RevenueType, platformCode, packageName, URLScheme, launchPackage) => {

  if(RevenueType == 'CPI'){
    if(platformCode == "1"){
      await console.log("Package, URL Scheme 입력 Android")
      StepProperity.setPackageName(packageName);
    }else if (platformCode =="2"){
      await console.log("Package, URL Scheme 입력 iOS")
      StepProperity.setURLScheme(URLScheme);
    }else{
      await console.log("Package, URL Scheme 입력 Android & iOS")
      StepProperity.setPackageName(packageName);
      StepProperity.setURLScheme(URLScheme);
    }
      StepProperity.setLaunchPackage(launchPackage);

  }else{
    await console.log("SKIP Package, URL Scheme 입력")
  }
  
});

When ('Landing Type 선택', async() => {
  await console.log("Landing Type 선택")
});


When ('Currency 입력 : {word}', async(CurrencyCode) =>{
  await console.log("Budget입력")
  await StepBudget.setCurrency(CurrencyCode)
});

When ('Budget 입력 : totalBudget={int}, dailyBudget={int}, unitPrice={int}', async(totalBudget, dailyBudget, unitPrice) => {
  console.log("Budget입력")
  await StepBudget.setBudget(totalBudget, dailyBudget, unitPrice)
 });

 When ('Safe Budget 입력 : checkSafeBudget={word}, safeBudget={int}', async(checkSafeBudget, safeBudget) => {
    console.log("Safe Budget 입력");
    await StepBudget.setSafeBudget( checkSafeBudget, safeBudget);
 });

  When ('Reward 입력 : checkReward={word}, landingPoints={int}, rewardPeriod={int}', async(checkReward, landingPoints, rewardPeriod) =>{
    console.log("Reward 입력");
    await StepBudget.setReward(checkReward, landingPoints, rewardPeriod);
  });

When ('Period 셋팅', async() => {
  console.log("Period 셋팅")
});

When ('Display Type 선택', async() => {
  console.log("Display Type 선택")
  const displayTypeCode = '1'
  // 1: First & Rolling screens, 2: First screen, 3, Rolling screen
  StepAllocation.displayType(displayTypeCode)
});

When ('Display Weight 입력', async() => {
  console.log("Display Weight 입력");
  StepAllocation.displayWeight(displayWeightValue)

});

When ('IPU, DIPU, TIPU 입력', async() => {
  console.log("IPU, DIPU, TIPU 입력");
  StepAllocation.ipu(ipuYN,hipu,dipu,tipu)
});

When ('CPU, DCPU, TCPU 입력', async() => {
  console.log("CPU, DCPU, TCPU 입력");
  StepAllocation.cpu(cpuYN,hcpu,dcpu,tcpu)
});

When ('Include Group 입력', async() => {
  console.log("Include Group 입력");
  includeGroupName= 'Test_Unit_Group_Brad_AOS'
  StepPlacement.includeGroup(includeGroupName) 
});

When ('Include Unit 입력', async() => {
  console.log("Include Unit 입력");
});

When ('Exclude Unit 입력', async() => {
  console.log("Exclude Unit 입력");
});

When ('Targeting 셋팅', async() => {
  console.log("Targeting 셋팅");
 // I.wait(20)
});

When ('Save 클릭', async() => {
  console.log("Save 클릭");
  StepTearDown.clickSave()
});


 Then('Detail 페이지로 이동', async(RevenueType)=>{
   //Lineitem 상세 페이지 이동
  //  I.amOnPage("https://dashboard-staging.buzzvil.com/campaign/direct_sales/ads/1746253/detail")
  //  I.fillField('body > div > form > label:nth-child(2) > input', "bradley.cho@buzzvil.com");
  //  I.fillField('body > div > form > label:nth-child(3) > input', "@NGEqUCNt27jxPR");
  //  I.click('body > div > form > div > button');
   await StepLogin.moveToLineitemDetailPage();
   //I.wait(10)

});

Then('Revenue type 확인 : {word}', async(RevenueType) =>{
  //assert.equal(RevenueType, 'hello')
  console.log("Revenue Type 확인")
  StepProperity.checkRevenueType(RevenueType)
});

Then('Name 확인 : {word}', async(RevenueType) =>{
  console.log("Name 확인")
  StepProperity.checkName(RevenueType);

});
Then('Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 확인', async() =>{
  console.log("Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 확인")
});
Then('Platform 확인 : {int}', async(platformCode) =>{
  console.log("Platform 확인")
  StepProperity.checkPlatform(platformCode)

});
Then('Category 확인, Tag 확인, 3rd Party Tracker 확인', async() =>{
  console.log("Category 확인, Tag 확인, 3rd Party Tracker 확인")
});
Then('Landing Type 확인', async() =>{
  console.log("anding Type 확인")
});
Then('Currency 확인 : {word}', async(CurrencyCode) =>{
  console.log("Currency 확인")
  StepBudget.checkCurrency(CurrencyCode);
});

Then('Total Budget 확인 : {word}, Daily Budget 확인 : {word}, Unit Price 확인 : {word}', async(totalBudget, dailyBudget, unitPrice) =>{
  console.log("Total Budget 확인, Daily Budget 확인, Unit Price 확인")
  StepBudget.checkTotalBudget(totalBudget);
  StepBudget.checkDailyBudget(dailyBudget);
  StepBudget.checkUnitPrice(unitPrice);
});


Then('Safe Budget on|Off 확인', async() =>{
  console.log("Safe Budget on|Off 확인")
});


Then('Safe Budget number 확인', async() =>{
  console.log("Safe Budget number 확인")
});


Then('Reward On|Off 확인', async() =>{
  console.log("Reward On|Off 확인")
});


Then('Reward number 확인, Landing Points 확인, Reward Period 확인', async() =>{
  console.log("Reward number 확인, Landing Points 확인, Reward Period 확인")
});


Then('Period 확인', async() =>{
  console.log("Period 확인")
});


Then('Display Type 확인', async() =>{
  console.log("'Display Type 확인")
});


Then('Display Weight 확인', async() =>{
  console.log("Display Weight 확인")
});


Then('IPU setup On|Off 확인', async() =>{
  console.log("IPU setup On|Off 확인")
});


Then('IPU, DIPU, TIPU 확인', async() =>{
  console.log("IPU, DIPU, TIPU 확인")
});


Then('CPU setup On|Off 확인', async() =>{
  console.log("CPU setup On|Off 확인")
});
Then('CPU, DCPU, TCPU 확인', async() =>{
  console.log("CPU, DCPU, TCPU 확인")
});
Then('Include Group 확인', async() =>{
  console.log("Include Group 확인")
});
Then('Include Unit 확인', async() =>{
  console.log("Include Unit 확인")
});
Then('Exclude Unit 확인', async() =>{
  console.log("Exclude Unit 확인")
});
Then('Targeting 확인', async() =>{
  console.log("Targeting 확인")
});