"use strict";

const global = (
    globalThis !== "undefined"
    ? globalThis
    : (
        window !== "undefined"
        ? window
        : this
    )
);
