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
    'es6-shim': 'lib/es6-shim/es6-shim'
  },
  shim: {
    'backbone': ['underscore', 'jquery']
  }
};
