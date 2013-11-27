/**
 *  RepoView
 */
define(function(require) {
  var Backbone = require('backbone');
  var RepoCollection = require('collection/RepoCollection');

  return Backbone.View.extend({
    initialize: function(opt) {
      this.collection = new RepoCollection({});
      this.initEvent();
      this.collection.fetch();
    },

    initEvent: function() {
      this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
      var json = this.collection.toJSON();
      this.$el.text(JSON.stringify(json));
    }
  });
});
