/*Title: Uptime Monitoring Application
Description:A Restful API to Monitoring up or down time ouser defined links.
Author: Md Amirul Islam
Date: 16/09/2024. */

// Dfendencis

const http = require("http");

// app object - module scaffolding
const app = {};
// Configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handlej request Response
app.handleReqRes = (req, res) => {
  // response handle
  res.end("Hello world573");
};

// Start the server
app.createServer();
