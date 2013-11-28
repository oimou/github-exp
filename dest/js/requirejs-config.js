/**
 *  requirejs config
 */
var requirejs = {
  baseUrl: '/',
  paths: {
    'd3': 'lib/d3/d3.min',
    'jquery': 'lib/jquery/jquery.min',
    'underscore': 'lib/underscore/underscore-min',
    'backbone': 'lib/backbone/backbone-min',
    'es5-shim': 'lib/es5-shim/es5-shim',
    'es6-shim': 'lib/es6-shim/es6-shim',
    'hogan': 'lib/hogan/web/1.0.0/hogan.min'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'd3': {
      exports: 'd3'
    },
    'hogan': {
      exports: 'Hogan'
    }
  }
};
