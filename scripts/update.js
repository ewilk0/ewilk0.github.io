function test(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function parseJson(json) {
      var time = "<b>Last Updated : " + json["time"]["updated"] + "</b>";
      var usdValue = "1 BTC equals to $" + json["bpi"]["USD"]["rate"];
      var gbpValue = "1 BTC equals to &pound;" + json["bpi"]["GBP"]["rate"];
      var euroValue = "1 BTC equals to &euro;" + json["bpi"]["EUR"]["rate"];
      console.log(usdValue);
      document.getElementById("u412-4").textContent=usdValue;}}
test();
