import http from "http";

const server = http.createServer((req, res) => {
    console.log("i accepted something");

    res.writeHead(200, "OK", {
        "content-type": "text/html",
    });
    res.end("fin");
});

server.listen(3000);
