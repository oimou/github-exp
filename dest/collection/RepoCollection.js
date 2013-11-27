/**
 *  RepoCollection
 */
define(function(require) {
  var d3 = require('d3');
  var Backbone = require('backbone');
  var RepoModel = require('model/RepoModel');

  return Backbone.Collection.extend({
    initialize: function() {
      this.url = 'data/repos.json';
    },

    /**
     *  @override
     */
    sync: function(method, model, opt) {
      switch (method) {
        case 'read':
          d3.json(this.url, function(json) {
            if (_.isFunction(opt.success)) opt.success(json);
          });
          break;

        default:
          break;
      }

      if (_.isFunction(opt.complete)) opt.complete(model); 
    }
  });
});
