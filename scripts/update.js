function everySecond(){
    setInterval(newPrice, 1000);
}

function newPrice(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function parseJson(json) {
      var usdValue = json["price"];
      document.getElementById("u412-4").textContent=usdValue;}}

everySecond();
newPrice();
