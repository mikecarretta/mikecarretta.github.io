module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
            '  <%= pkg.name %> site v<%= pkg.version %>\n' +
            '  <%= pkg.license %> License\n' +
            '  Created by <%= pkg.author %>\n' +
            '*/\n\n',
    less: {
      production: {
        files: {
          "assets/css/app.min.css": "assets/_less/app.less"
        },
        options: {
          compress: true,
          banner: '<%= banner %>'
        }
      }
    },
    uglify: {
      custom: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'assets/js/app.min.js': 'assets/js/app.js'
        }
      },
      jquery: {
        files: {
          'assets/js/vendors/jquery.min.js': 'app/bower_components/jquery/dist/jquery.js'
        }
      },
      bootstrap: {
        files: {
          'assets/js/vendors/bootstrap.min.js': ['app/bower_components/bootstrap/js/collapse.js','app/bower_components/bootstrap/js/dropdown.js']
        }
      }
    },
    copy: {
      bootstrap: {
        files: [
          {expand: true, cwd: 'app/bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'assets/fonts/'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify', 'less', 'copy']);
};