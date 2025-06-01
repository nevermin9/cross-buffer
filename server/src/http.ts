import { createServer } from "http";

interface Router {
    kkk

}

class HttpServer {
    private server: ReturnType<typeof createServer>;
    private port: number;
    private router: 

    constructor({ port }: { port: number }) {
        this.port = port;
        this.server = createServer((req, res) => {});
    }

    start() {
        this.server.listen(this.port);
    }
}
