import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>HOME PAGE</h1>");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>ABOUT</h1>");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>CONTACT</h1>");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 NOT FOUND</h1>");
      break;
  }
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Port: ${port}`);
});
