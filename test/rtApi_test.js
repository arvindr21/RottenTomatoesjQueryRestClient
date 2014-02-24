(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#rtApi', {
    // This will run before each test in this module.
    setup: function() {
      this.apiKey = "1234";
      this.el = $('#qunit-fixture');
      this.elems = this.el.children();
    }
  });

  test("defaults", function() {
  ok($.rtApi.options, "options set up correctly");
  equal($.rtApi.options.apiKey, undefined, "default global options are not set");
  $.rtApi.options.apiKey = this.apiKey;
  equal($.rtApi.options.apiKey, this.apiKey, "can change the defaults globally");
});




}(jQuery));


