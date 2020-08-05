const { I, StepLogin, StepProperity, StepBudget, StepAllocation, StepPlacement } = inject();


const revenueType = 'CPC'
let initialUrl = 'https://dashboard-staging.buzzvil.com/campaign/direct_sales/ads/'
    
// Scenario Outline: 로그인 기능 확인
Given('Direct Sales 페이지로 이동', () => {
  I.amOnPage(initialUrl)

});

When ('ID 입력', () => {
  StepLogin.enterId("bradley.cho@buzzvil.com")
  
});

When ('Password 입력', () => {
  StepLogin.enterPassword("@NGEqUCNt27jxPR")
  
});

 When ('확인 버튼 클릭', () => {
   StepLogin.clickSubmit()
});

 When ('Direct Sales >> Ads 페이지로 이동', () => {
  StepLogin.movetoAds()
});

When ('Name 입력', () => {
  StepProperity.name(revenueType)
});

When ('Revenue Type 입력', () => {
  StepProperity.revenueType(revenueType)
});	
When ('Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 설정', () => {
  StepProperity.setEnv()
});
When ('Platform 선택', () => {
  //1 : AOS
  //2 : iOS
  //3 : both
  const platformCode = '1'
  StepProperity.setPlatform(platformCode)

});
When ('Category 선택, Tag 선택, 3rd Party Tracker 선택', () => {


});
When ('Landing Type 선택', () => {
});
When ('Budget 입력', () => {
  const totalBudget = '1000000'
  const dailyBudget = '20'
  const unitPrice = '20'
  const checkSafeBudget = '0'
  const safeBudget = "30"
  const checkReward = "0"
  const landingPoints = "20"
  const rewardPeriod = "60"
  const CurrencyCode = "KRW"

  StepBudget.setCurrency(CurrencyCode)
  StepBudget.setBudget(totalBudget, dailyBudget, unitPrice, checkSafeBudget, safeBudget,checkReward,landingPoints, rewardPeriod)


});
When ('Period 셋팅', () => {
});
When ('Display Type 선택', () => {
  const displayTypeCode = '1'
  // 1: First & Rolling screens, 2: First screen, 3, Rolling screen
  StepAllocation.displayType(displayTypeCode)
});
When ('Display Weight 입력', () => {
  const displayWeightValue = ''
  StepAllocation.displayWeight(displayWeightValue)

});

When ('IPU, DIPU, TIPU 입력', () => {
  const ipuYN = "n"
  const hipu = '3'
  const dipu = '3'
  const tipu = '3'
  StepAllocation.ipu(ipuYN,hipu,dipu,tipu)
});

When ('CPU, DCPU, TCPU 입력', () => {
  const cpuYN = "n"
  const hcpu = '3'
  const dcpu = '3'
  const tcpu = '3'
  StepAllocation.cpu(cpuYN,hcpu,dcpu,tcpu)
});
When ('Include Group 입력', () => {
 // includeGroupName= 'Test_Unit_Group_Brad_AOS'
 // StepPlacement.includeGroup(includeGroupName)
  
});
When ('Include Unit 입력', () => {
});
When ('Exclude Unit 입력', () => {
});
When ('Targeting 셋팅', () => {
});
When ('Save 클릭', () => {
});


