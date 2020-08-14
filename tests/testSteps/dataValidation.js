const { assert } = require("console");

module.exports = function() {
    return actor({
      //Name 입력
      moveToLineitemDetailPage: async function() {
        /*Move to Lineitem detail page */
        this.waitForElement('#creativeForm > div > div > div.card > div:nth-child(5) > div > div.label--wrap > label',10)
        
        let str2 = await this.grabCurrentUrl()
        const lineitem_id = str2.substr(89,100)
        let lineitemDetailURL = 'https://dashboard-staging.buzzvil.com/campaign/direct_sales/ads/'+lineitem_id+'/detail'
        this.amOnPage(lineitemDetailURL)
       }

      // checkRevenueType: async function(RevenueType) {
      //   this.waitForElement("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(2) > div > div.value",10)
      //   let expectedRevenueType = RevenueType;
      //   await console.log(expectedRevenueType)
      //   await console.log(RevenueType)
      //   //let actualReveneyType = await this.grabTextFrom("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(2) > div > div.value");
      //   await this.seeInField("body > div > section > div > div.view-container > div > section.content-container > div > div.row.form__containter > div.col-sm-7 > div > div > div:nth-child(2) > div > div.value",expectedRevenueType)
      //   //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        //this.assert.equal(expectedRevenueType,actualReveneyType)
        
      
    });
  }


