module.exports = function() {
    return actor({
      //Name 입력
      setCurrency: function(currencyCode) {
        switch(currencyCode){
          case "KRW" : return this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags");
          default: return  this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags");
        }
        
      },

      setBudget: async function(totalBudget,dailyBudget,unitPrice, checkSafeBudget, safeBudget) {
        //Total Budget
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div.input-group > input",totalBudget);
        //Daily Budget
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(3) > div.input-group > input",dailyBudget);
        //Unit Price
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(4) > div.input-group > input",unitPrice);
        //Safe Budget
        if (checkSafeBudget =="1"){
          this.checkOption("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")

          this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__field > div > div.input-group > input",safeBudget)
        }else{
          this.uncheckOption("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")
        }        
      },

      setReward : async function(checkReward, landingPoints, rewardPeriod) {
        //landingPoints
        let checkRewardStatus = await this.grabTextFrom("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > span","span");
        if (checkReward == "1"){
          
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
        
        //rewardPeriod
        this.fillField("reward_period", rewardPeriod)
        // this.wait(10)
      }
    });
  }


