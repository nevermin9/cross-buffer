"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    {
        path: "/",
        name: "home",
        component: function () { return Promise.resolve().then(function () { return require("@/views/Home.vue"); }); },
    },
];
