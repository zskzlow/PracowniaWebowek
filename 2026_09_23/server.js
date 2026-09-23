let http = require("http");
let fs = require("fs");
let path = require("path");

const PORT = 3000;
const server = http.createServer((req, res) => {
  const address = new URL(req.url, `http://${req.headers.host}`);
  const url = address.pathname;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Strona Głowna");
    res.end();
  } else if (url === "/json") {
    let jsonDoc = {
      anglia: "manU",
      hiszpania: "real",
      polska: "Lech",
      portugalia: "Ronaldo",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(jsonDoc));
    res.end();
  } else if (url === "/htmlGen") {
    const html = `<!DOCTYPE html>
                    <html lang="pl">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>html w node</title>
                    </head>
                    <body>
                        
                    </body>
                    </html>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  } else if (url === "/htmlFile") {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain;" });
        res.write("blad");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (url === "/get_params") {
    
    const params = Object.fromEntries(address.searchParams);
    console.log(params);
    const timestamp = Date.now()
    const fileName = `params_${timestamp}.json`
    const filePath = path.join(__dirname, fileName);

    fs.writeFile(filePath, JSON.stringify(params,null,2),(err)=>{
      if(err){
        console.log("blad")
      }else{
        console.log("git")
      }

    })


     res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ ok: "ok" }));
    res.end();

  } else {
    res.writeHead(200, { "Content-Type": "text/plain;" });
    res.write("nie ma takiej strony");
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`serwer na porcie ${PORT}`);
});
