function everySecond(){
    setInterval(newPrice, 1000);
}

function newPrice(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.bitmex.com/api/v1/trade?symbol=XBT&count=1&reverse=true";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function parseJson(json) {
      var usdValue = json[0]["price"];
      console.log(usdValue);
      document.getElementById("u412-4").textContent=usdValue;}}

everySecond();
newPrice();
