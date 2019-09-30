function updatePrice(){
  var ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@miniTicker');

  ws.onmessage = function(msg){
    var jsonObject = JSON.parse(msg.data);
    var newFloat = parseFloat(msg.c);
    var finalPrice = Number((newFloat).toFixed(1));
    document.getElementById("u412-4").textContent=finalPrice;
  };
}

updatePrice();
