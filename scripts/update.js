function updatePrice(){
    var ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@miniTicker');

    ws.onmessage = function(msg) {
      console.log(msg);
      var newFloat = parseFloat(msg["c"]);
      console.log(newFloat);
      var finalPrice = Number((newFloat).toFixed(2));
      document.getElementById("u412-4").textContent=finalPrice;
    };
}

updatePrice();
