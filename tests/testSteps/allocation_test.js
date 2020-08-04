module.exports = function() {
    return actor({
      //Name 입력
      displayType: function(displayTypeCode) {
        switch(displayTypeCode){
          case 1:
            this.click("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(2) > label")
            break;
          case 2:
            this.click("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(3) > label")
            break;
          case 3:
            this.click("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(4) > label")
            break;
          default:
            this.click("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(2) > label")
            break;
        }
      },
      displayWeight: function(displayWeightValue){
        if (displayWeightValue=='0'){
          this.uncheckOption("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(3) > div > div.togglable__toggle > input[type=checkbox]")
        }else{
          this.checkOption("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(3) > div > div.togglable__toggle > input[type=checkbox]")
          this.fillField('display_weight',displayWeightValue)
        }
      },

      setIpu: function(){
        if(this.dontSeeCheckboxIsChecked("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__toggle > input[type=checkbox]")=='0'){

        }
      },
      ipu: function(ipuYN,hipu,dipu,tipu){
        if(ipuYN == "y"){
          this.checkOption("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__toggle > input[type=checkbox]")
          this.fillField("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__field > div > div.trinity__container > div:nth-child(1) > input[type=number]",hipu)
          this.fillField("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div >div.togglable__field > div > div.trinity__container > div:nth-child(2) > input[type=number]",dipu)
          this.fillField("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__field > div > div.trinity__container > div:nth-child(3) > input[type=number]",tipu)
          // }

        }else{
          this.uncheckOption("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__toggle > input[type=checkbox]")
        }
      },
      cpu: function(cpuYN,hcpu,dcpu,tcpu){
        if(cpuYN == "y"){
            this.checkOption("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")
            this.fillField("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__field > div > div.trinity__container > div:nth-child(1) > input[type=number]",hcpu)
            this.fillField("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__field > div > div.trinity__container > div:nth-child(2) > input[type=number]",dcpu)
            this.fillField("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__field > div > div.trinity__container > div:nth-child(3) > input[type=number]",tcpu)
        }else{
          this.uncheckOption("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")
        }
      }
    });
  }


