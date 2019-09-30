var lastPrice = 0;

function updatePrice(){
  var ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@miniTicker');

  ws.onmessage = function(msg){
    var jsonObject = JSON.parse(msg.data);
    var newPrice = parseFloat(jsonObject.c);
    var finalPrice = newPrice.toFixed(2);
    if(newPrice > lastPrice){
      document.getElementById("u412-5").style.color = 'green';
      document.getElementById("u412-5").textContent=finalPrice + " ⬆";
    }
    else {
      document.getElementById("u412-5").style.color = 'red';
      document.getElementById("u412-5").textContent=finalPrice + " ⬇";
    }
    lastPrice = newPrice;
  };
}

updatePrice();
