function updatePrice(){
    var ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

    ws.onopen = function() {
      console.log("ok");
    };
}

updatePrice();
