module.exports = function() {
    return actor({
      //Name 입력
      setCurrency: function(currencyCode) {
        if(cyrrencyCode = 'currencyCode')
        {
          this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags")
        }
        
      },
      setBudget: function(totalBudget,dailyBudget,unitPrice, checkSafeBudget, safeBudget, checkReward, landingPoints, rewardPeriod) {

        //Total Budget
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div.input-group > input",totalBudget);
        //Daily Budget
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(3) > div.input-group > input",dailyBudget);
        //Unit Price
        this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(4) > div.input-group > input",unitPrice);
        //Safe Budget
        if (checkSafeBudget =="1"){
          this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")

          this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(5) > div > div.togglable__field > div > div.input-group > input",safeBudget)
        }

        //landingPoints
        //const isFieldRendered = this.isExistsElement("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(7) > div.input-group > input")
        if (checkReward == "1"){
          
          if (this.dontSeeElement({xpath:'/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[3]/div/div[2]/div/div[6]/div[2]/input'})){
            //this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > label > span")
            this.click("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(6) > div:nth-child(2) > label > label > span > span")
          }
          this.fillField("#adForm > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(7) > div.input-group > input",landingPoints)
        }
        
        //rewardPeriod
        this.fillField("reward_period", rewardPeriod)
        
      }
    });
  }


