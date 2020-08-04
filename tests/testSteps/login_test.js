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
      this.click("body > div > section > div > div.view-container > div > section.header > div > div > div > button > span")
      this.click("body > div > section > div > div.view-container > div > section.header > div > div > div > div > div > a:nth-child(2)")
    },
    landingAds: function(){
      this.see("body > div > section > div > div.view-container > div > section.header > div > div > div > button > span")
      this.see("body > div > section > div > div.view-container > div > section.header > div > div > div > div > div > a:nth-child(2)")
    }
  });
}





