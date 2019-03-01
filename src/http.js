import axios from "axios"

var domain = "http://localhost:80";

export var http = {
  post ( url, data, successCb = null, errorCb = function() {} ) {
    axios( { method: "post", url: domain + url, data: data } )
    .then( successCb )
    .catch( function( err ) { errorCb; });
  },

  init () {
    axios.interceptors.request.use(
      function( config ) {
        config.headers.authorization = ls.get("jwt-token");
        return config;
      }
    );

    axios.interceptors.response.use(
      function( response ) {
        if( response.status > 399 ) { return Promise.reject( response.data.message ); }
        return response;
      },
      function( error ) { return Promise.reject( error ); }
    );

  }
}
