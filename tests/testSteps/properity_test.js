const assert = require('assert');

module.exports = function() {
    return actor({
      //Name 입력
      name: function(RevenueType) {
        this.fillField("item_name", RevenueType+"_Regression_Test");
      },

      checkName: async function(RevenueType){
        let expectedName = await RevenueType+"_Regression_Test";
        let actualNAme = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(1) > div > div.value")
        await assert.equal(expectedName, actualNAme)

      },

      //Revenue Type 입력
      revenueType: async function(RevenueType) {
        // this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags > span")
        await this.fillField('#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags > input', RevenueType);
        await this.wait(1)
        await this.pressKey('Enter');
      },

      checkRevenueType: async function(RevenueType) {
        let actualReveneyType = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(2) > div > div.value");
        await assert.equal(actualReveneyType, RevenueType)
       
      },
      
      //Environment 설정
      setEnv: function() {
        //Test
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(4) > div:nth-child(2) > label > label > span")
        //Backfill
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(5) > div:nth-child(2) > label > label > span")
        //Lockscreen
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(6) > div:nth-child(2) > label > label > span")
        //Offerwall
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(7) > div:nth-child(2) > label > label > span")
      },

      //Environment 확인
      checkEnviroment: async function(){
        let actualLockscreenValue = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div > div.col-sm-7 > div > div > div:nth-child(6) > div > div.value")
        await assert.equal("On", actualLockscreenValue.replace(/\n/g,""))
      },

      //Platform 설정
      setPlatform: function(platformCode){
        
        if(platformCode == '1'){
          //Android
          //this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(2) > label")
          this.click("Android")
        }else if(platformCode == '2') {
          //iOS
          this.click("iOS")
          //this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(3) > label")
        }else{
          // Android & iOS
          this.click("Android & iOS")
          //this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(4) > label")
        }
        
      },
      //Platform 확인
      checkPlatform: async function(platformCode){
        if(platformCode == '1'){
          //Android
          let actualPlatform = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(7) > div > div.value")
          await assert.equal(actualPlatform, "Android")
        }else if(platformCode == '2') {
          //iOS
          let actualPlatform = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(7) > div > div.value")
          await assert.equal(actualPlatform, "iOS")

        }else{
          // Android & iOS
          let actualPlatform = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(7) > div > div.value")
          await assert.equal(actualPlatform, "Android & iOS")
        }

      },

      setPackageName: async function(packageName){
        await this.fillField("extra_data.package_name",packageName)
      },
      checkPackageName: async function(packageName){
        let actualPackageName = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(11) > div > div.value")
        await assert.equal(packageName, actualPackageName)
      },

      setURLScheme: async function(URLScheme){
        await this.fillField("extra_data.url_scheme",URLScheme)
      },

      checkURLScheme: async function(URLScheme){
        let actualURLScheme = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(12) > div > div.value")
        await assert.equal(URLScheme, actualURLScheme)
      },
      setLaunchPackage: async function(launchPackage){
        let elementOfLaunchPackage = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(10) > div:nth-child(2) > label > span"
        let valueOfLaunchPackage = await this.grabTextFrom(elementOfLaunchPackage)
        if(launchPackage == "On" && valueOfLaunchPackage == "On"){
          
        }else if (launchPackage == "Off" && valueOfLaunchPackage == "On"){
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(10) > div:nth-child(2) > label > label > span > span")
        }else if (launchPackage == "Off" && valueOfLaunchPackage == "Off"){
          
        }else if (launchPackage == "On" && valueOfLaunchPackage == "Off"){
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(10) > div:nth-child(2) > label > label > span > span")
        }        
      },

      checkLaunchPackage: async function(launchPackage){
        let actualLaunchPackage = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(10) > div > div.value")
        await assert.equal(launchPackage, actualLaunchPackage.replace(/\n/g,""))
      },
      

      setLandingType: async function(landingType, RevenueType, platformCode, integrationType){
        
        var field

        switch(RevenueType){
          case "CPC" :
          case "CPM" :
            field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11)";
            break;
          case "CPI" :
            switch(platformCode){
              case "1" : 
              case "2" : 
                field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(12)";
                break;
              case "3" : 
                field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(13)"
            }
          case "CPE" : 
          case "CPA" :
          case "CPS" : 
            switch(integrationType){
              case "Web" : 
                field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11)";
                break;
              case "SDK" : 
                field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11)";
                break;
              case "3rdPartyTracker":
                field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(13)";
                break;
            }
          case "CPL" :
             field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(13)";
             break;
          case "CPInsta" :
          case "CPQ" :   
          case "CPK" : 
          case "CPYoutube" : 
           field = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11)";                    
           break;
        }
        
        console.log("filed::::::::::::::::::::::::::::::::"+field);
        
        let landingTypeis 

        if (landingType = 'CardView'){
          landingTypeis = "Card View";
        }else{
          landingTypeis = landingType;
        }

        try{
          console.log("11111111111111111111111111111111111111111")
          //this.waitForElement(field + " > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags > input", 3);
          this.fillField(field + " > div.multiselect.multiselect--above.multiselect-wrapper.shrink > div.multiselect__tags > input", landingTypeis);
          
        }catch{
          console.log("22222222222222222222222222222222222222222")
          this.fillField(field + " > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags > input", landingTypeis);
          //this.waitForElement(field + " > div.multiselect.multiselect--above.multiselect-wrapper.shrink > div.multiselect__tags > input", 3);
          //this.fillField(field + " > div.multiselect.multiselect--above.multiselect-wrapper.shrink > div.multiselect__tags > input", landingTypeis);
          //this.fillField('#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(13) > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags > span');
          
        }finally{
          await this.wait(1)
          await this.pressKey("Enter")
        }
      },
      
      checkLandingType: async function(landingType){
        let actualLandingType = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(13) > div > div.value")
        await assert.equal(landingType, actualLandingType.replace(/\n/g,""))
      },
      // Integration Type 선택
      setIntegrationType: async function(integrationType){
        await console.log("integrationType:::::::::::::::::::::::::"+integrationType)

        if(integrationType == "3rdPartyTracker"){
          await this.fillField('#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(10) > div.size > div > div.multiselect__tags > input', "3rd Party Tracker"); 
          await this.wait(1)
          await this.pressKey('Enter');
        }else if (integrationType == "Web"){
          await this.fillField('#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(10) > div.size > div > div.multiselect__tags > input', integrationType);
          await this.wait(1)
          await this.pressKey('Tab');
        }
      },
      // Integration Type 검증
      checkIntegrationType: async function(integrationType){
        let actualintegrationType = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(10) > div > div.value")
        await assert.equal(integrationType, integrationType.replace(/\n/g,""))
      },

      //App Id 입력
      setAppId: async function(appId){
        await this.waitForElement({ xpath: '/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[10]/input'},5);   //extra_data.app_id
        await this.fillField({ xpath: '/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[10]/input'},appId)
      },
      //App Id 검증
      checkAppId: async function(appId){
        let actualappId = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(11) > div > div.value")
        await assert.equal(appId, actualappId.replace(/\n/g,""))
      },

      // 3rd Party tracker 선택
      setThirdPartyTracker: async function(thirdPartyTracker){
       // switch
       // 
        let selectThridPartyTracker = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11) > div.size > div > div > div.multiselect__tags > input"
       // let selectThridPartyTracker = "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11) > div.size > div > div > div.multiselect__tags > span"

        await this.waitForElement(selectThridPartyTracker,5)
        await this.fillField(selectThridPartyTracker, thirdPartyTracker);
        await this.wait(2)
        await this.pressKey('Enter');
      },

      // 3rd Party tracker 확인
      checkThirdPartyTracker: async function(thirdPartyTracker){
        let actualthirdPartyTracker = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(11) > div > div.field--wrap > div")
        await assert.equal(thirdPartyTracker, actualthirdPartyTracker.replace(/\n/g,""))
      },

      // Event Name 입력
      setEventName: async function(eventName){
        await this.fillField('extra_data.cpa_event_name', eventName);
      },
      // Event Name 확인
      checkEventName: async function(eventName){
        let actualeventName = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(12) > div > div.value")
        await assert.equal(eventName, actualeventName.replace(/\n/g,""))
      },

      //Facebook 
      setFacebookLink: async function(facebooklink, facebookid){
        //Facebook link
        let fieldFacebookLink = {xpath : "/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[9]/div[2]/textarea[2]"};
        await this.fillField(fieldFacebookLink,facebooklink);
        //Facebook ID
        let fieldFacebookId = {xpath : "/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[10]/input"};
        await this.fillField(fieldFacebookId,facebookid);


      },
      //Instagram
      setInstagram: async function(instagramId){
        let fieldInstagramId = {xpath:"/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[9]/input"}
        await this.fillField(fieldInstagramId,instagramId);
      },

      //Kakao Channel
      setKakaoChannel: async function(kakaoChnnel){
        let fieldKakaoChannel= "#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(10) > div.multiselect-action-container > div.size > div > div > div.multiselect__tags > input"
        await this.fillField(fieldKakaoChannel,kakaoChnnel);
        await this.wait(2)
        await this.pressKey('Enter');
      },

      //Channel ID
      setChannelId: async function(chnnelId){
        let fieldChnnelId= {xpath : "/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[9]/input"}
        await this.fillField(fieldChnnelId,chnnelId);
      },


      //2nd Landing URL
      setSecondLandingURL: async function(secondLandingUrl, RevenueType){
        var fieldSecondLandingUrl
        switch(RevenueType){
          case "CPL"    : 
            fieldSecondLandingUrl = {xpath : "/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[11]/div[2]/textarea[2]"};
            await this.fillField(fieldSecondLandingUrl,secondLandingUrl)
            break;
          case "CPInsta":
          case "CPK":
            fieldSecondLandingUrl = {xpath : "/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[10]/div[2]/textarea[2]"};
            await this.fillField(fieldSecondLandingUrl,secondLandingUrl)
            break;
          case "CPQ":
            fieldSecondLandingUrl = {xpath : "/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[2]/div/div/div/div[9]/div[2]/textarea[2]"};
            await this.fillField(fieldSecondLandingUrl,secondLandingUrl)
            break;
            
        }
      }
    });
  }
