
var prompt = require('prompt');
var Github = require('github-api');
var schema = {
  properties: {
    username : {
      required: true
    },

    password: {
      hidden: true,
      required: true
    },

    repository: {
      required: true
    }
  }
};

prompt.start();
prompt.get(schema, function(err, res) {
  var username = res.username;
  var password = res.password;
  var repository = res.repository;

  var github = new Github({
    username: res.username,
    password: res.password,
    auth: 'basic'
  });

  var repo = github.getRepo(res.username, repository);
  repo.getTree('master', function(err, res) {
    console.log(res);
  });
});
