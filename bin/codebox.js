#! /usr/bin/env node

var path = require("path");
var codebox = require("../lib");

codebox.start({
    root: path.resolve(__dirname, "../../test")
})
.fail(function(err) {
    console.log(err.stack || err.message || err);
});
