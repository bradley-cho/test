const { assert } = require("console");

module.exports = function() {
    return actor({
      //Shopping Category 입력
      //shoppingCategory, originalPrice, discountedPrice, hot, RevenueType
      setShoppingCategory : async function(shoppingCategory) {
        let fieldShoppingCategory = '#adForm > div > div:nth-child(4) > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div.size > div > div.multiselect__tags > span'
        await this.fillField(fieldShoppingCategory,shoppingCategory);
        await this.wait(2)
        await this.pressKey('Enter');
      },
      setOriginalPrice : async function(originalPrice) {
        let fieldOriginalPrice= {xpath : '/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[4]/div/div/div[2]/div/div/div[1]/input'}
        await this.fillField(fieldOriginalPrice,originalPrice);
        await this.wait(2)
        await this.pressKey('Enter');
      },
      setDiscountedPrice : async function(discountedPrice) {
        let fieldOriginalPrice= {xpath : '/html/body/div/section/div/div[1]/div/section[2]/div/form/div/div[4]/div/div/div[2]/div/div/div[2]/input'}
        await this.fillField(fieldOriginalPrice,discountedPrice);
        await this.wait(2)
        await this.pressKey('Enter');
      }
      
    });
  }


