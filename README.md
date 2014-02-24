# jQuery plugin/wrapper for Rotten Tomatoes REST API

jQuery plugin/wrapper for Rotten Tomatoes REST API

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/arvindr21/rtRestClient/master/dist/rtApi.min.js
[max]: https://raw.github.com/arvindr21/rtRestClient/master/dist/rtApi.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/rtApi.min.js"></script>
<script type="text/javascript">
  var rtClient = new $.rtApi({apiKey : "APIKEY"}); //Visit http://developer.rottentomatoes.com/page
      rtClient.searchMovies({q : "iron"},function (data) {     
        console.log(data); 
      });
</script>
```
Output
```
{
    "total": 237,
    "movies": [{
        "id": "714976247",
        "title": "Iron Man",
        "year": 2008,
        "mpaa_rating": "PG-13",
        "runtime": 126,
        "critics_consensus": "Director Jon Favreau and star Robert Downey make this smart, high impact superhero movie one that even non-comics fans can enjoy.",
        "release_dates": {
            "theater": "2008-04-14",
            "dvd": "2008-09-30"
        },
        "ratings": {
            "critics_rating": "Certified Fresh",
            "critics_score": 93,
            "audience_rating": "Upright",
            "audience_score": 91
        },
        "synopsis": "",
        "posters": {
            "thumbnail": "http://content7.flixster.com/movie/10/93/35/10933541_mob.jpg",
            "profile": "http://content7.flixster.com/movie/10/93/35/10933541_pro.jpg",
            "detailed": "http://content7.flixster.com/movie/10/93/35/10933541_det.jpg",
            "original": "http://content7.flixster.com/movie/10/93/35/10933541_ori.jpg"
        },
        "abridged_cast": [{
            "name": "Robert Downey Jr.",
            "id": "162654529",
            "characters": ["Tony Stark"]
        }, {
            "name": "Terrence Howard",
            "id": "162652991",
            "characters": ["Lt. Colonel James Rhodes"]
        }, {
            "name": "Jeff Bridges",
            "id": "162655890",
            "characters": ["Obadiah Stane"]
        }, {
            "name": "Gwyneth Paltrow",
            "id": "162653966",
            "characters": ["Virginia \"Pepper\" Potts"]
        }, {
            "name": "Leslie Bibb",
            "id": "563122407",
            "characters": ["Christine Everhart"]
        }],
        "alternate_ids": {
            "imdb": "0371746"
        },
        "links": {
            "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/714976247.json",
            "alternate": "http://www.rottentomatoes.com/m/iron_man/",
            "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/714976247/cast.json",
            "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/714976247/clips.json",
            "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/714976247/reviews.json",
            "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/714976247/similar.json"
        }
    }, 
    ........... 9 more results
}
````


## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

## Contributing

## Important notes
Please don't edit files in the `dist` subdirectory as they are generated via Grunt. You'll find source code in the `src` subdirectory!

### Code style
Regarding code style like indentation and whitespace, **follow the conventions you see used in the source already.**

### PhantomJS
While Grunt can run the included unit tests via [PhantomJS](http://phantomjs.org/), this shouldn't be considered a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in _actual_ browsers.

## Modifying the code
First, ensure that you have the latest [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed.

Test that Grunt's CLI is installed by running `grunt --version`.  If the command isn't found, run `npm install -g grunt-cli`.  For more information about installing Grunt, see the [getting started guide](http://gruntjs.com/getting-started).

1. Fork and clone the repo.
1. Run `npm install` to install all dependencies (including Grunt).
1. Run `grunt` to grunt this project.

Assuming that you don't see any red, you're ready to go. Just be sure to run `grunt` after making any changes, to ensure that nothing is broken.

## Submitting pull requests

1. Create a new branch, please don't work in your `master` branch directly.
1. Add failing tests for the change you want to make. Run `grunt` to see the tests fail.
1. Fix stuff.
1. Run `grunt` to see if the tests pass. Repeat steps 2-4 until done.
1. Open `test/*.html` unit test file(s) in actual browser to ensure tests pass everywhere.
1. Update the documentation to reflect any changes.
1. Push to your fork and submit a pull request.

**************************************************

@ [The Jackal of Javascript](http://thejackalofjavascript.com)
