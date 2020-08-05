module.exports = function() {
    return actor({
      //include group 입력
      includeGroup: function(includeGroupName) {
        // this.selectOption("#adForm > div > div:nth-child(5) > div > div > div > div > div.group-unit__container > div:nth-child(2) > div > div > div.multiselect__tags > input","#adForm > div > div:nth-child(5) > div > div > div > div > div.group-unit__container > div:nth-child(2) > div > div > div.multiselect__content-wrapper > ul > li:nth-child(2) > span > span")
         this.fillField("#adForm > div > div:nth-child(5) > div > div > div > div > div.group-unit__container > div:nth-chil  d(2) > div > div > div.multiselect__tags > input",includeGroupName)
         this.waitForElement(includeGroupName)
         this.pressKey(['Enter'])
        this.wait(10)
        
      }
    });
  }


