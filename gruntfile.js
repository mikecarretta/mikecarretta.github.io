module.exports = function(grunt) {

  grunt.initConfig({

    connect: {
      // Static Server
      // npm install grunt-contrib-connect --save-dev
      server: {
        options: {
          port: 3000,
          // default is false
          keepalive: true
        }
      }
    },

    less: {
      production: {
        files: {
          "assets/css/app.min.css": "_less/app.less",
        },
        options: {
          compress: true
        }
      }
    },
    uglify: {
      app: {
        files: {
          'assets/js/app.min.js': 'assets/js/app2.js'
        }
      }
    },
    watch: {
      less: {
        files: 'assets/_less/*.less',
        tasks: ['less'],
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'less']);
  grunt.registerTask('server', ['less', 'connect:server']);

};