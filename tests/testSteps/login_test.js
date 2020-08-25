module.exports = function() {
  return actor({

    enterId: function(email) {
      this.fillField('body > div > form > label:nth-child(2) > input', email);
    },
    
    enterPassword:  function(password){
      this.fillField('body > div > form > label:nth-child(3) > input', password);
    },
    clickSubmit: function(){
      this.click('body > div > form > div > button');
    },
    movetoAds: function(){
      this.waitForElement('body > div > section > div > div.view-container > div > section.header > div > div > div > button > span',5)
      this.click("body > div > section > div > div.view-container > div > section.header > div > div > div > button > span")
      this.click("body > div > section > div > div.view-container > div > section.header > div > div > div > div > div > a:nth-child(2)")
    },
    landingAds: function(){
      this.see("body > div > section > div > div.view-container > div > section.header > div > div > div > button > span")
      this.see("body > div > section > div > div.view-container > div > section.header > div > div > div > div > div > a:nth-child(2)")
    },

    moveToLineitemDetailPage: async function() {
      /*Move to Lineitem detail page */
      //this.waitForElement('#creativeForm > div > div > div.card > div:nth-child(5) > div > div.label--wrap > label',10)
      this.wait(3)
      let str2 = await this.grabCurrentUrl()
      const lineitem_id = str2.substr(91,102)
      let lineitemDetailURL = 'https://dashboard-stagingqa.buzzvil.com/campaign/direct_sales/ads/'+lineitem_id+'/detail'
      this.amOnPage(lineitemDetailURL)
     }

  });

  
}





