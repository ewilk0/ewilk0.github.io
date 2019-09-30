var lastPrice = 0;

function updatePrice(){
  var ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@miniTicker');

  ws.onmessage = function(msg){
    var jsonObject = JSON.parse(msg.data);
    var newFloat = parseFloat(jsonObject.c);
    var finalPrice = Number((newFloat).toFixed(2));
    if(finalPrice > lastPrice){
      document.getElementById("u412-4").style.color = 'green';
      document.getElementById("u412-4").style.fontFamily = 'Courier';
      document.getElementById("u412-4").textContent=finalPrice + " ⬆";
    }
    else {
      document.getElementById("u412-4").style.color = 'red';
      document.getElementById("u412-4").style.fontFamily = 'Courier';
      document.getElementById("u412-4").textContent=finalPrice + " ⬇";
    }
    lastPrice = finalPrice;
  };
}

updatePrice();
