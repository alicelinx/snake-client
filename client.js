const net = require("net");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (message) => {
    console.log(message);
  });

  conn.on('connect', (message) => {
    console.log('Print message: ' + 'Successfully connected to game server');
    conn.write('Name: LJL');
  });


  return conn;
};


module.exports = { connect };