
module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        files: [
          {
            expand: true,
            cwd: "view",
            src: ["index.jade"],
            dest: "dest",
            ext: ".html"
          }
        ]
      }
    },

    stylus: {
      compile: {
        files: [
          {
            expand: true,
            cwd: "public/css",
            src: ["*.styl", "**/*.styl", "*.stylus", "**/*.stylus"],
            dest: "dest/css",
            ext: ".css"
          }
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 9080,
          hostname: "*",
          base: "dest"
        }
      }
    },

    watch: {
      jade: {
        files: ["view/index.jade"],
        tasks: ["jade:compile"]
      },

      stylus: {
        files: ["public/css/*.styl", "public/css/*.stylus"],
        tasks: ["stylus:compile"]
      },

      livereload: {
        files: ["dest/css/*.css", "dest/css/**/*.css"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-jade");

  grunt.registerTask("build", ["jade:compile", "stylus:compile"]);
  grunt.registerTask("livereload", ["connect:server", "watch"]);
  grunt.registerTask("default", ["build"]);
};
