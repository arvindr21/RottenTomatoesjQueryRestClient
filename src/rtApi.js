/*! Rotten Tomatoes Rest Client - v0.1.0 - 2014-02-25
* https://github.com/arvindr21/rtRestClient
* Copyright (c) 2014 Arvind Ravulavaru; Licensed MIT */
(function($) {
$.rtApi = function(opts) {
  
  this.showError = function(message){if(console && console.log){console.log(message);}else{alert(message);}};
  opts = $.extend({}, $.rtApi.options, opts);
  if(opts.apiKey === undefined) {this.showError(opts.errorMessage); return opts.errorMessage;}
  
    /**
     * Movie List - Fetch the Box Office Listing
     * @param {args} - limit : default|16, country : default:us
     * @param {callback} [callback]
     * @returns {object} Returns the Box Office Movie List
     */
    this.getBoxOffice = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsShort , args );
        opts.url = opts.baseUrl+"/movies/box_office.json?limit="+args.limit+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    /**
     * Movie List - Fetch the In Theaters Listing
     * @param {args} - page_limit : default|16, page : default|1, country : default:us
     * @param {callback} [callback]
     * @returns {object} Returns the Box Office Movie List
     */
    this.getInTheaters = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsLong , args );
        opts.url = opts.baseUrl+"/movies/in_theaters.json?page_limit="+args.page_limit+"&page="+args.page+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.getOpeningMovies = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsShort , args );
        opts.url = opts.baseUrl+"/movies/opening.json?limit="+args.limit+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.getUpcomingMovies = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsLong , args );
        opts.url = opts.baseUrl+"/movies/upcoming.json?page_limit="+args.page_limit+"&page="+args.page+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    //DVD Lists//
    this.getTopRentals = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsShort , args );
        opts.url = opts.baseUrl+"/dvds/top_rentals.json?limit="+args.limit+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

     this.getCurrentDVDReleases = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsLong , args );
        opts.url = opts.baseUrl+"/dvds/current_releases.json?page_limit="+args.page_limit+"&page="+args.page+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.getNewDVDReleases = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsLong , args );
        opts.url = opts.baseUrl+"/dvds/new_releases.json?page_limit="+args.page_limit+"&page="+args.page+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };
    this.getUpcomingDVDs = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsLong , args );
        opts.url = opts.baseUrl+"/dvds/upcoming.json?page_limit="+args.page_limit+"&page="+args.page+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };


    // Detailed Info //
    this.getMovieInfoById = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsId , args );
        if(!args.id){this.showError(opts.optsIDErrorMessage); return false;}
        opts.url = opts.base+"movies/"+args.id+".json?apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.getCastInfoByMovieId = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsId , args );
        if(!args.id){this.showError(opts.optsIDErrorMessage); return false;}
        opts.url = opts.base+"movies/"+args.id+"/cast.json?apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

     this.getClipsByMovieId = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsId , args );
        if(!args.id){this.showError(opts.optsIDErrorMessage); return false;}
        opts.url = opts.base+"movies/"+args.id+"/clips.json?apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.getReviewsByMovieId = function(args,callback){  // review_type :  'all', 'top_critic' and 'dvd'.
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.optsMega , args );
        if(!args.id){this.showError(opts.optsIDErrorMessage); return false;}
        opts.url = opts.base+"movies/"+args.id+"/reviews.json?review_type="+args.review_type+"&page_limit="+args.page_limit+"&page="+args.page+"&country="+args.country+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.getSimilarMoviesByMovieId = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.limit , args );
        if(!args.id){this.showError(opts.optsIDErrorMessage); return false;}
        opts.url = opts.base+"movies/"+args.id+"/similar.json?limit="+args.limit+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.getMovieAliasByMovieId = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.lookType , args );
        if(!args.id){this.showError(opts.optsIDErrorMessage); return false;}
        opts.url = opts.base+"movie_alias.json?id="+args.id+"&type="+args.type+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };

    this.searchMovies = function(args,callback){
        if(args instanceof Function){callback = args; args = undefined; } // fallback for a direct callback!
        args = $.extend({}, opts.search , args );
        if(!args.q){this.showError(opts.optsSearchErrorMessage); return false;}
        opts.url = opts.base+"movies.json?q="+encodeURI(args.q)+"&page_limit="+args.page_limit+"&page="+args.page+"&apikey="+opts.apiKey;
        this.crossDomainAjaxer(opts.url, callback);
    };



    this.crossDomainAjaxer = function(url,callback){
        //http://thejackalofjavascript.com/cross-domain-ajax-with-cross-browser-support/
        // IE8 & 9 only Cross domain JSON GET request
        var data, _result;
        if ('XDomainRequest' in window && window.XDomainRequest !== null) {
            var xdr = new XDomainRequest(); // Use Microsoft XDR
            xdr.open('get', url);
            xdr.onload = function () {
                var dom  = new ActiveXObject('Microsoft.XMLDOM'),
                    JSON = $.parseJSON(xdr.responseText);                                                             
                dom.async = false;
                if (JSON == null || typeof (JSON) === undefined) {
                    JSON = $.parseJSON(data.firstChild.textContent);
                }
                callback(JSON);
            };
            xdr.onerror = function() {
                _result = false; 
            };
            xdr.send();
        }
        // IE7 doesn't support cross domain request at all! :( :)
        // jQuery AJAX for other browsers         
        else {
            $.ajax({
                url: url,
                cache: false,
                dataType: 'jsonp',
                type: 'GET',
                async: false, // must be set to false
                success: function (data) {
                    callback(data);
                }
            });
        }
    };

  return this;
};



$.rtApi.options = {
  base : "http://api.rottentomatoes.com/api/public/v1.0/",
  baseUrl : "http://api.rottentomatoes.com/api/public/v1.0/" + "lists",
  apiKey : undefined,
  errorMessage : "Need API Key to continue. Visit http://developer.rottentomatoes.com/page",
  optsSearchErrorMessage : "Search text is required",
  optsLong :{page_limit : 16, page : 1, country : "us"},
  optsShort : {limit : 16, country : "us"},
  limit : {limit : 5},
  lookType : {type : "imdb"},
  search : {page_limit : 10 , page : 1},
  optsMega : {review_type : "all", page_limit : 16, page : 1, country : "us"},
  optsIDErrorMessage : "Invalid Movie ID -  expected Format : { id : xxxxxxxxx }"
};
}(jQuery));