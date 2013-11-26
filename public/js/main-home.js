/**
 *  main home
 */
require(
  [
    'view/RepoView'
  ],
  function(RepoView) {
    var App = window.App = {};
    App.repoView = new RepoView({
      el: '#repo'
    });
  }
);
