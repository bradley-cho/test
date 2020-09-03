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
    And Category, Tag 선택
    And 3rd Party Tracker 선택
    And Package, URL Scheme 입력 when <RevenueType>, <platformCode> : packageName = <packageName>, URLScheme = <URLScheme>, launchPackage = <launchPackage>
    And Integration Type = <integrationType>, App ID = <appId> 입력, 3rd Party Tracker = <thirdPartyTracker> 입력, Event Name = <eventName> 입력 when <RevenueType>
    And facebook 정보입력 : link = <facebooklink>, id = <facebookid> when <RevenueType>
    And Instagram 정보 입력 : InstagramId = <instagramId> when <RevenueType>
    And Kakao Chnnel 정보 입력 : kakaoChnnel  = <kakaoChnnel> when <RevenueType>
    And Chnnel ID 정보 입력 : chnnelId  = <chnnelId> when <RevenueType>
    And Second Landing URL 입력 : 2ndLandingUrl = <secondLandingUrl> when <RevenueType>
    And Landing Type 선택 : <landingType> when <RevenueType>, <platformCode>, <integrationType>
    And Currency 입력 : <CurrencyCode>
    And Budget 입력 : totalBudget=<totalBudget>, dailyBudget=<dailyBudget>, unitPrice=<unitPrice> 
    And Safe Budget 입력 : checkSafeBudget=<checkSafeBudget>, safeBudget=<safeBudget>
    And Reward 입력 : checkReward=<checkReward>, landingPoints=<landingPoints>, rewardPeriod=<rewardPeriod>, actionInterval=<actionInterval> when <RevenueType>
    And Period 셋팅 when <RevenueType>
    And Display Type 선택 when <RevenueType>
    And Display Weight 입력 when <RevenueType>
    And IPU, DIPU, TIPU 입력 when <RevenueType>
    And CPU, DCPU, TCPU 입력 when <RevenueType>
    And Include Group 입력 when <RevenueType>
    And Include Unit 입력 when <RevenueType>
    And Exclude Unit 입력 when <RevenueType>
    And Targeting 셋팅 when <RevenueType>
    And CPS 셋팅 : shoppingCategory = <shoppingCategory>, originalPrice = <originalPrice>, discountedPrice = <discountedPrice>, hot = <hot> when <RevenueType>
    And Save 클릭
   Then Detail 페이지로 이동
    And Revenue type 확인 : <RevenueType>
    And Name 확인 : <RevenueType>
    And Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 확인
    And Platform 확인 : <platformCode>
    And Category 확인, Tag 확인, 3rd Party Tracker 확인
    And Package, URL Scheme 확인 when <RevenueType>, <platformCode> : packageName = <packageName>, URLScheme = <URLScheme>, launchPackage = <launchPackage>
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
        | RevenueType | landingPoints | platformCode  | CurrencyCode  | totalBudget | dailyBudget | unitPrice | checkSafeBudget | safeBudget | checkReward |  rewardPeriod | actionInterval     | packageName         | URLScheme      | launchPackage | integrationType   | appId  | thirdPartyTracker | eventName | landingType | facebooklink                | facebookid |secondLandingUrl              | instagramId                   | kakaoChnnel | chnnelId | shoppingCategory | originalPrice | discountedPrice | hot | 
        | CPC         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | n/a                         | n/a        | n/a                          | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPM         | 8             | 3             | KRW           | 1000000     | 20          | 8         |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | n/a                         | n/a        | n/a                          | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPI         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | com.susoft.CJONmart | cjthemarket:// | On            | n/a               | n/a    | n/a               | n/a       | Browser     | n/a                         | n/a        | n/a                          | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPE         | 20            | 1             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | SDK               | test   | n/a               | n/a       | Browser     | n/a                         | n/a        | n/a                          | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPE         | 20            | 1             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | 3rdPartyTracker   | n/a    | default           | test      | Browser     | n/a                         | n/a        | n/a                          | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |         
        # | CPA         | 20            | 1             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | Web               | n/a    | default           | test      | Browser     | n/a                         | n/a        | n/a                          | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPL         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | http://facebook.com/buzzvil | test       | http://facebook.com/buzzvil  | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPV         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | n/a           | 1800               | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | n/a                         | n/a        | http://facebook.com/buzzvil  | n/a                           | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPInsta     | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | http://facebook.com/buzzvil | n/a        | http://facebook.com/buzzvil  | http://instagram.com/buzzvil  | n/a         | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPQ         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | n/a                         | n/a        | http://facebook.com/buzzvil  | n/a                           | n/a    	    | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPK         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | n/a                         | n/a        | http://facebook.com/buzzvil  | n/a                           | 오리진스     | n/a      | n/a              | n/a           | n/a             | n/a |
        # | CPYoutube   | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | n/a               | n/a    | n/a               | n/a       | Browser     | n/a                         | n/a        | http://facebook.com/buzzvil  | n/a                           | n/a         | buzzvil  | n/a              | n/a           | n/a             | n/a |
        # | CPS         | 20            | 3             | KRW           | 1000000     | 20          | 20        |  N              |  0         |  Y          | 180           | n/a                | n/a                 | n/a            | n/a           | 3rdPartyTracker   | n/a    | avazu             | test      | Browser     | n/a                         | n/a        | n/a                          | n/a                           | n/a         | n/a      | 식품              |  10000        |  9999           | On  |
    