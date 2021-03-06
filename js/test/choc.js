(function() {
  var assert, inspect, puts, testHelper, _ref;

  _ref = require('util'), puts = _ref.puts, inspect = _ref.inspect;

  assert = require('assert');

  testHelper = require('./test_helper');

  describe('Choc', function() {
    return it('does something useful', function() {
      return assert.ok(true);
    });
  });

}).call(this);

(function() {
  var assert, choc, coffee, esprima, inspect, pp, puts, readable, should, testHelper, _ref;

  testHelper = require('./test_helper');

  _ref = require("util"), puts = _ref.puts, inspect = _ref.inspect;

  pp = function(x) {
    return puts(inspect(x, null, 1000));
  };

  esprima = require("esprima");

  assert = require('assert');

  should = require("should");

  choc = require("../src/choc");

  readable = require("../src/readable");

  coffee = require("coffee-script");

  describe('Choc', function() {
    it('does something useful', function() {
      var newSource, src;
      src = "function add(a, b) {\n  return a + b;\n}\n\nvar x = add(1, 2);\nvar y = x;";
      newSource = choc.generateAnnotatedSource(src);
      puts(newSource);
      return assert.ok(true);
    });
    it('member functions', function() {
      var newSource, src;
      src = "var bob = {}\nbob.add = function(a, b){\n  return a + b;\n}\n\nvar x = bob.add(1, 2) + bob.add(3, 4);\nvar foo = \"hellomom\";\nvar y = x;";
      newSource = choc.generateAnnotatedSource(src);
      puts(newSource);
      return assert.ok(true);
    });
    it('traces functions once', function() {
      var newSource, src;
      src = "var bob = 1\nbob = 2;\nconsole.log(\"hi\")";
      newSource = choc.generateAnnotatedSource(src);
      puts(newSource);
      return assert.ok(true);
    });
    return it.only('traces CallExpressions', function() {
      var newSource, src;
      src = "function add(a, b) {\n  return a + b;\n}\nvar bob = 1;\nadd(bob, bob + 1); ";
      newSource = choc.generateAnnotatedSource(src);
      puts(newSource);
      return assert.ok(true);
    });
  });

}).call(this);
