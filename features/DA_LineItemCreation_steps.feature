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
    And Revenue Type 입력
    And Name 입력
    And Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 설정
    And Platform 선택
    And Category 선택, Tag 선택, 3rd Party Tracker 선택
    And Landing Type 선택 
    And Budget 입력
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
   Then New Creative 페이지로 이동
  #  When Detail 페이지로 이동
  #  Then Revenue Type 확인
  #   And Name 확인
  #   And Test : off, Backfill : off, Lockscreen : On, Offerwall : Off 확인
  #   And Platform 확인
  #   And Category 확인, Tag 확인, 3rd Party Tracker 확인
  #   And Landing Type 확인, 
  #   And Currency 확인
  #   And Total Budget 확인, Daily Budget 확인, Unit Price 확인
  #   And Safe Budget on|Off 확인
  #   And Safe Budget number 확인
  #   And Reward On|Off 확인
  #   And Reward number 확인, Landing Points 확인, Reward Period 확인
  #   And Period 확인
  #   And Display Type 확인
  #   And Display Weight 확인
  #   And IPU setup On|Off 확인
  #   And IPU, DIPU, TIPU 확인
  #   And CPU setup On|Off 확인
  #   And CPU, DCPU, TCPU 확인
  #   And Include Group 확인
  #   And Include Unit 확인
  #   And Exclude Unit 확인
  #   And Targeting 확인        
   
   Examples:
       | ID | Password | 
       | test@buzzvil.com         | test            |
       | bradley.cho@buzzvil.com  | @NGEqUCNt27jxPR |

