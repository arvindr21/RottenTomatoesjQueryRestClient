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
      this.apiKey = "qwgqtm5rwfv2wgp9etr83hap";
      this.el = $('#qunit-fixture');
      this.elems = this.el.children();
      this.movieID = 770672122;
    }
  });


  test("is $.rtApi available?", function(){
      ok($.rtApi, "Rotten Tomatoes wrapper is available and is not undefined");
  });

  test("defaults", function() {
    ok($.rtApi.options, "options set up correctly");
    equal($.rtApi.options.apiKey, undefined, "default global options are not set");
    $.rtApi.options.apiKey = this.apiKey;
    equal($.rtApi.options.apiKey, this.apiKey, "can change the defaults globally");
});


asyncTest("Testing getBoxOffice", function() {
  var opts = {limit : 16, country : "us"};
  $.rtApi({apiKey : this.apiKey}).getBoxOffice(opts, function (data) {     
        ok(data, "AJAX call got a result");
        ok(data.movies, "A list of movies exists in the response");
        equal(data.movies.length, opts.limit,  "Count matches");
        start();
    });
  
});

asyncTest("Testing getMovieInfoById", function() {
  var movieID = this.movieID;
  $.rtApi({apiKey : this.apiKey}).getMovieInfoById({id : movieID},function (data) {     
        ok(data, "AJAX call got a result");
        ok(data.id, "ID exists in the response");
        equal(data.id, movieID,  "ID matches");
        equal(data.title, "Toy Story 3",  "Title matches");
        start();
    });
  
});


}(jQuery));


