function milkfunction() {
    var shedone =(document.getElementsByclass("shed1").value);
    var shedtwo =(document.getElementByclass("shed2").value);
    var shedthree =(document.getElementByclass("shed3").value);
    var shedfour =(document.getElementByclass("shed4").value);
  
    if(shedone.length === 0 || shedtwo.length === 0 || shedthree.length === 0 || shedfour.length === 0) {
      //check whether the user has typed something
  
        alert("Fill all the filds!");
      }
    
    else {
        //convert the strings to numbers
        shedone= parseFloat(shedone);
        shedtwo= parseFloat(shedtwo);
        shedthree = parseFloat(shedthree);
        shedthree = parseFloat(shedfour);
        var totalmilk=shedone+shedtwo+shedthree+shedfour;
        document.getElementByclass("hidden").style.display = 'block';
        document.getElementByclass("shedone").innerHTML=shedone;
        document.getElementByclass("shedtwo").innerHTML=shedtwo;
        document.getElementByclass("shedthree").innerHTML=shedthree;
        document.getElementByclass("shedfour").innerHTML=shedfour;
        document.getElementByclass("totalmilk").innerHTML = totalmilk;
    }
  }
  function reset() {
      location.reload();
    }
    function projection(selling_price,time){
     var production=(document.getElementByclass("milk").value);
     if(production.length===0){
       alert("Empty fields not allowed");
     }else{
       production =parseFloat(production);
      var weekly=45*production*7;
      var monthly=45*production*30;
      var yearly=45*production*365;
      document.getElementByclass("hidden2").style.display = 'block';
      document.getElementByclass("weekly").innerHTML=weekly;
      document.getElementByclass("monthly").innerHTML=monthly;
      document.getElementByclass("yearly").innerHTML=yearly;
     }
    }
   function revenue(){
    var total=(document.getElementByclass("total").value);
    if(total.length===0){
      alert("Empty fields not allowed");
    }else{
      total =parseFloat(total);
      var incomePerDay=total*45;
    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days= [ 31,29,31,30,31,30,31,31,30,31,30,31];
    for (i = 0; i<months.length; i++){
      output = days[i] * incomePerDay;
      document.getElementByclass("hidden3").style.display = 'block';
      document.getElementByclass("hidden3").innerHTML+=("Your income for " + months[i] +  "is  Ksh  " + output + "</p>");
    }
  }
   }