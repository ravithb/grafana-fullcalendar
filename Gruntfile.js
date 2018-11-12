module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    clean: {
      build: ['dist/**/*'],
      tmp: ['ravithb-tui-calendar-panel'],
      release: ['ravithb-tui-calendar-panel.zip']
    },

    copy: {
      src_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['**/*', '!**/*.js', '!**/*.scss', '!img/**/*'],
        dest: 'dist'
      },
      pluginDef: {
        expand: true,
        src: ['plugin.json', 'README.md'],
        dest: 'dist',
      },
      img_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['img/**/*'],
        dest: 'dist/src/'
      },
      externals: {
        cwd: 'src',
        expand: true,
        src: ['**/external/*'],
        dest: 'dist'
      },
      dist_to_tmp: {
        cwd: 'dist/',
        expand: true,
        src: ['**/*'],
        dest: 'ravithb-tui-calendar-panel'
      },
    },

    watch: {
      rebuild_all: {
        files: ['src/**/*', 'plugin.json'],
        tasks: ['default'],
        options: {spawn: false}
      },
    },

    babel: {
      options: {
        sourceMap: true,
        presets: [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "entry"
            }
          ]
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties"
        ]
      },
      dist: {
        files: [{
          cwd: 'src',
          expand: true,
          src: ['**/*.js'],
          dest: 'dist',
          ext: '.js'
        }]
      },
    },

    zip: {
      'ravithb-tui-calendar-panel.zip': ['ravithb-tui-calendar-panel/**/*']
    }

  });

  grunt.registerTask('default', ['clean:build', 'copy:src_to_dist', 'copy:pluginDef', 'copy:img_to_dist', 'copy:externals', 'babel', 'clean:release', 'clean:tmp', 'copy:dist_to_tmp', 'zip', 'clean:tmp']);

};
