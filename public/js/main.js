define(["exports"], function (exports) {
    "use strict";

    require.config({
        paths: {
            react: "components/react/react" },
        shim: {
            react: {
                exports: "react"
            }
        }
    });
    require(["react", "app"]);
});
/// <reference path="typings/tsd.d.ts" />