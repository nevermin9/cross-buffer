import { createServer } from "http";

// static?
// global error handling
// scaling?

type Server = ReturnType<typeof createServer>;

export const getServer = (routing: any, config: Record<string, string | number | boolean>): Server => {
    const server = createServer((req, res) => {});

    server.listen(config.port);

    return server;
};