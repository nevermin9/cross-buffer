// eslint-disable-next-line
({
    get(): API.HandlerResponse {
        return {
            status: 200,
            data: "hello world",
        };
    },
    post() {},
    put() {},
    delete() {},
});
