// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

"use strict";
var Module = {
    config: null,
    configSrc: "./mono-config.json",
    onDotNetReady: function () {
        try {
            App.init();
        } catch (error) {
            console.log("exception: " + error);
            test_exit(1);
            throw (error);
        }
    },
    onAbort: function (err) {
        test_exit(1);
    },
};