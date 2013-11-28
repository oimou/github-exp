/**
 *  RepoView
 */
define(function(require) {
  var Backbone = require('backbone');
  var RepoCollection = require('collection/RepoCollection');
  var hogan = require('hogan');

  return Backbone.View.extend({
    initialize: function(opt) {
      this.collection = new RepoCollection({
        url: 'data/repos.json'
      });
      this.template = hogan.compile($('#template-repo').html());

      this.initEvent();
      this.collection.fetch();
    },

    initEvent: function() {
      this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
      var json = this.collection.toJSON();
      var html = this.template.render({
        repos: json
      });
      this.$el.html(html);
    }
  });
});
