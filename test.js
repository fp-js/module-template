"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var FUNC = require("./").FUNC;



test("MODULE_NAME", function (t) {
  t.plan(1);

  t.equal(typeof document, "object");
});