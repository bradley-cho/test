module.exports = function() {
    return actor({
      //include group 입력
      clickSave: function() {
        this.click("Save")
        //this.wait(10)
        //body > div > section > div > div.view-container > div > section.header > div > div:nth-child(2) > button:nth-child(2) > span
      }
    });
  }


