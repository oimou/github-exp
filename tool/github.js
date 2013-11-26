
var fs = require('fs');
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

  // init github instance
  var github = new Github({
    username: res.username,
    password: res.password,
    auth: 'basic'
  });

  // user
  var user = github.getUser();
  user.repos(function(err, res) {
    fs.writeFileSync('dest/data/repos.json', JSON.stringify(res));
    //console.info(res);
  });

  // repository
  var repo = github.getRepo(res.username, repository);
  repo.getTree('master', function(err, res) {
    //console.info(res);
  });
});
