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
      this.listenTo(this.collection, 'change', this.render);
    },

    render: function() {
      this.$el.html(this.collection.toJSON());
    }
  });
});
