const assert = require('assert');

module.exports = function() {
    return actor({
      //Currency 입력
      setCurrency: function(currencyCode) {
        switch(currencyCode){
          case "KRW" : return this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags");
          default: return  this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags");
        }
        
      },

      //Currency 확인
      checkCurrency : async function(CurrencyCode){
      let acutalCurrency = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-5 > div > div > div:nth-child(1) > div > div.value")
      await assert.equal(CurrencyCode,acutalCurrency)
      },

      setBudget: async function(totalBudget,dailyBudget,unitPrice) {
        //Total Budget
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div.input-group > input",totalBudget);
        //Daily Budget
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(3) > div.input-group > input",dailyBudget);
        //Unit Price
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(4) > div.input-group > input",unitPrice);

 
      },
      setSafeBudget : async function(checkSafeBudget,safeBudget){
        //Safe Budget
        if (checkSafeBudget =="Y"){
          this.checkOption("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")
          this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__field > div > div.input-group > input",safeBudget)
        }else{
          this.uncheckOption("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")
        }       

      },
      
      setReward : async function(checkReward, landingPoints, rewardPeriod, actionInterval, RevenueType) {
        //landingPoints
        let checkRewardStatus = await this.grabTextFrom("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > span","span");
        if (checkReward == "Y"){
          
          if (checkRewardStatus=="Off"){
            this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > label > span")
          }
          console.log(landingPoints)
          this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(7) > div.input-group > input",landingPoints)
          // this.wait(10)

        }else if(checkReward =="0") {
          if (checkRewardStatus=="On"){
            this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > label > span > span")
          }
        }
        
        switch(RevenueType){
          case "CPV" : 
            this.fillField("extra_data.action_interval",actionInterval)
            break;
          default : 
            //rewardPeriod
            this.fillField("reward_period", rewardPeriod)
            break;
        }
        // this.wait(10)
      },



      // Budget 확인
      // Total Budget 확인
      checkTotalBudget : async function(totalBudget){
        this.waitForElement("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-5 > div > div > div:nth-child(2) > div > div.value.horizontal > span", 5)

        let acutalTotalBudget = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-5 > div > div > div:nth-child(2) > div > div.value.horizontal > span")
        await assert.equal(totalBudget,acutalTotalBudget.replace(/,/g,""))
      },
      // Daily Budget 확인 
      checkDailyBudget : async function(dailyBudget){
        let acutalDailyBudget = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-5 > div > div > div:nth-child(3) > div > div.value.horizontal > span")        
        await assert.equal(dailyBudget,acutalDailyBudget.replace(/,/g,""))      
      },
      // Unit Price 확인
      checkUnitPrice : async function(unitPrice){
        let acutalUnitPrice = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-5 > div > div > div:nth-child(4) > div > div.value.horizontal > span")
        await assert.equal(unitPrice,acutalUnitPrice.replace(/,/g,""))
      }
    });
  }


