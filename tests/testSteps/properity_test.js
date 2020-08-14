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
      setPlatform: function(platformCode){
        
        if(platformCode == '1'){
          //Android
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(4) > label")
        }else if(platformCode == '2') {
          //iOS
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(3) > label")
        }else{
          // Android & iOS
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(4) > label")
        }
        
      },
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
        let actualPackageName = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div > div.col-sm-7 > div > div > div:nth-child(11) > div > div.value")
        await assert.equal(packageName, actualPackageName)
      },

      setURLScheme: async function(URLScheme){
        await this.fillField("extra_data.url_scheme",URLScheme)
      },

      checkURLScheme: async function(URLScheme){
        let actualURLScheme = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div > div.col-sm-7 > div > div > div:nth-child(11) > div > div.value")
        await assert.equal(URLScheme, actualURLScheme)
      },
      setLaunchPackage: async function(launchPackage){
        let valueOfLaunchPackage = await this.grabTextFrom("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11) > div:nth-child(2) > label > span")
        
        if(launchPackage == "On" && valueOfLaunchPackage == "On"){
          
        }else if (launchPackage == "Off" && valueOfLaunchPackage == "On"){
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11) > div:nth-child(2) > label > label > span > span")
        }else if (launchPackage == "Off" && valueOfLaunchPackage == "Off"){
          
        }else if (launchPackage == "On" && valueOfLaunchPackage == "Off"){
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(11) > div:nth-child(2) > label > label > span > span")
        }        
      },

      checkLaunchPackage: async function(launchPackage){
        let actualLaunchPackage = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div > div.col-sm-7 > div > div > div:nth-child(10) > div > div.value")
        await assert.equal(launchPackage, actualLaunchPackage)
      }


    
    });
  }





// const { I } = inject();

// module.exports = {

//     fields: {
//         email: 'body > div > form > label:nth-child(2) > input',
//         password: 'body > div > form > label:nth-child(3) > input'
//       },

//     submitButton: {selector : 'body > div > form > div > button'},

//     sendForm(email, password){
//         I.fillField(this.fields.email, email);
//         I.fillField(this.fields.password, password);
//         I.click(this.submitButton);
//     },

//     register(email, password) {
//     // use another page object inside current one
//     registerPage.registerUser({ email, password });
//     }

// }

