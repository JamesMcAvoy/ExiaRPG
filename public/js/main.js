var conn = new WebSocket('ws://127.0.0.1:8888');

conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.send('Hello World!');

conn.onmessage = function(e) {
    console.log(e.data);
};
