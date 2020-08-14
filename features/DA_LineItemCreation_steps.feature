Feature: Lineitem Creation
  In order to 라인 아이템을 성공적으로 생성
  As a 스텝
  I want to be able to 오류 없이 라인 아이템을 생성

  Scenario Outline: 라인아이템 생성 확인
  Given Direct Sales 페이지로 이동
   When ID 입력
    And Password 입력
    And 확인 버튼 클릭
    And Direct Sales >> Ads 페이지로 이동
    And Name <RevenueType> Regression_Test 입력
    And <RevenueType> 입력
    And Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 설정
    And Platform 선택 : <platformCode>
    And Category Tag 3rd Party Tracker 선택
    And Package, URL Scheme 입력 when <RevenueType>, <platformCode> : packageName = <packageName>, URLScheme = <URLScheme>, launchPackage = <launchPackage>
    And Landing Type 선택
    And Currency 입력 : <CurrencyCode>
    And Budget 입력 : totalBudget=<totalBudget>, dailyBudget=<dailyBudget>, unitPrice=<unitPrice> 
    And Safe Budget 입력 : checkSafeBudget=<checkSafeBudget>, safeBudget=<safeBudget>
    And Reward 입력 : checkReward=<checkReward>, landingPoints=<landingPoints>, rewardPeriod=<rewardPeriod>
    And Period 셋팅
    And Display Type 선택
    And Display Weight 입력
    And IPU, DIPU, TIPU 입력
    And CPU, DCPU, TCPU 입력
    And Include Group 입력
    And Include Unit 입력
    And Exclude Unit 입력
    And Targeting 셋팅
    And Save 클릭
   Then Detail 페이지로 이동
    And Revenue type 확인 : <RevenueType>
    And Name 확인 : <RevenueType>
    And Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 확인
    And Platform 확인 : <platformCode>
    And Category 확인, Tag 확인, 3rd Party Tracker 확인
    And Landing Type 확인
    And Currency 확인 : <CurrencyCode>
    And Total Budget 확인 : <totalBudget>, Daily Budget 확인 : <dailyBudget>, Unit Price 확인 : <unitPrice>
    And Safe Budget on|Off 확인
    And Safe Budget number 확인
    And Reward On|Off 확인
    And Reward number 확인, Landing Points 확인, Reward Period 확인
    And Period 확인
    And Display Type 확인
    And Display Weight 확인
    And IPU setup On|Off 확인
    And IPU, DIPU, TIPU 확인
    And CPU setup On|Off 확인
    And CPU, DCPU, TCPU 확인
    And Include Group 확인
    And Include Unit 확인
    And Exclude Unit 확인
    And Targeting 확인        
   
   Examples:
        | RevenueType | landingPoints | platformCode  | CurrencyCode  | totalBudget | dailyBudget | unitPrice | checkSafeBudget | safeBudget | checkReward |  rewardPeriod | packageName          | URLScheme      | launchPackage |
        | CPC         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180          | n/a                 | n/a            | n/a           |
        | CPM         | 8             | 3             | KRW           | 1000000     | 20          | 8         |  N              |  0         |  Y          |  180          | n/a                 | n/a            | n/a           |
      #| CPI         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 1             | 180          | com.susoft.CJONmart | cjthemarket:// | On            |
        # | CPE         | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPA         | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPL         | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPV         | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPInsta     | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPQ         | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPK         | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPYoutube   | 20            | 3             | KRW           | 1000000     | 20          | 20        |
        # | CPS         | 20            | 3             | KRW           | 1000000     | 20          | 20        |
    