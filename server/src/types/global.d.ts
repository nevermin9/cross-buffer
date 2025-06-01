declare global {
    namespace API {
        type HandlerResponse = {
            status: number;
            statusText?: string;
            data: string | Buffer | Uint8Array;
            encoding?: string;
            headers?: Record<string, string>;
        };
    }
}

export {};
