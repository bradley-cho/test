module.exports = function() {
    return actor({
      //include group 입력
      clickSave: function() {
        this.click("Save")
        //body > div > section > div > div.view-container > div > section.header > div > div:nth-child(2) > button:nth-child(2) > span
        this.wait(3)
        console.log("11111111111111111111111111111111111111111111")
        
      }
    });
  }


