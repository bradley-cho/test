module.exports = function() {
    return actor({
      //Name 입력
      name: function(revenueType) {
        this.fillField("item_name",revenueType+"_Regression_Test") 
      },

      //Revenue Type 입력
      revenueType: function(revenueType) {
        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div.multiselect.multiselect-wrapper.shrink > div.multiselect__tags > span")
        // this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div.multiselect.multiselect-wrapper.shrink > div.multiselect__content-wrapper > ul > li:nth-child(1) > span > span")
        this.click(revenueType)
      },
      setEnv: function() {
        //Test
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(4) > div:nth-child(2) > label > label > span")
        //Backfill
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(5) > div:nth-child(2) > label > label > span")
        //Lockscreen
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(6) > div:nth-child(2) > label > label > span")
        //Offerwall
//        this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(7) > div:nth-child(2) > label > label > span")
      },
      setPlatform: function(platformCode){
        
        if(platformCode == '1'){
          //Android
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(4) > label")
        }else if(platformCode = '2') {
          //iOS
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(3) > label")
        }else{
          // Android & iOS
          this.click("#adForm > div > div:nth-child(2) > div > div > div > div:nth-child(8) > div:nth-child(4) > label")
        }
        
      }
    });
  }





// const { I } = inject();

// module.exports = {

//     fields: {
//         email: 'body > div > form > label:nth-child(2) > input',
//         password: 'body > div > form > label:nth-child(3) > input'
//       },

//     submitButton: {selector : 'body > div > form > div > button'},

//     sendForm(email, password){
//         I.fillField(this.fields.email, email);
//         I.fillField(this.fields.password, password);
//         I.click(this.submitButton);
//     },

//     register(email, password) {
//     // use another page object inside current one
//     registerPage.registerUser({ email, password });
//     }

// }

