
module.exports = function() {

    return actor({
      
     //displayType 입력


      displayType: function(displayTypeCode, allocationPath) {
 
        switch(displayTypeCode){
          case 1:
            this.click(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(2) > label")
            // this.click("#adForm > div > div:nth-child(4) > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(2) > label")
            //this.click("First & Rolling screens")
            break;
          case 2:
            //this.click("First screen")
            this.click(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(3) > label")
            break;
          case 3:
            //this.click("Rolling screen")
            this.click(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(4) > label")
            break;
          default:
            //this.click("First & Rolling screens")
            this.click(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(2) > div:nth-child(2) > label")
            break;
        }
      },
      displayWeight: function(displayWeightValue, allocationPath){
        if (displayWeightValue=='0'){
          this.uncheckOption(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(3) > div > div.togglable__toggle > input[type=checkbox]")
        }else{
          this.checkOption(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(3) > div > div.togglable__toggle > input[type=checkbox]")
          this.fillField('display_weight',displayWeightValue)
        }
      },

      setIpu: function(allocationPath){
        if(this.dontSeeCheckboxIsChecked(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__toggle > input[type=checkbox]")=='0'){

        }
      },
      ipu: function(ipuYN,hipu,dipu,tipu, allocationPath){
        if(ipuYN == "y"){
          this.checkOption(allocationPath+ " > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__toggle > input[type=checkbox]")
          this.fillField(allocationPath+ " > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__field > div > div.trinity__container > div:nth-child(1) > input[type=number]",hipu)
          this.fillField(allocationPath+ " > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div >div.togglable__field > div > div.trinity__container > div:nth-child(2) > input[type=number]",dipu)
          this.fillField(allocationPath+ " > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__field > div > div.trinity__container > div:nth-child(3) > input[type=number]",tipu)
          // }

        }else{
          this.uncheckOption(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(4) > div > div.togglable__toggle > input[type=checkbox]")
        }
      },
      cpu: function(cpuYN,hcpu,dcpu,tcpu, allocationPath){
        if(cpuYN == "y"){
            this.checkOption(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")
            this.fillField(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__field > div > div.trinity__container > div:nth-child(1) > input[type=number]",hcpu)
            this.fillField(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__field > div > div.trinity__container > div:nth-child(2) > input[type=number]",dcpu)
            this.fillField(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__field > div > div.trinity__container > div:nth-child(3) > input[type=number]",tcpu)
        }else{
          this.uncheckOption(allocationPath+" > div > div > div.col-sm-12.col-md-5 > div > div > div:nth-child(5) > div > div.togglable__toggle > input[type=checkbox]")
        }
      }
    });
  }


