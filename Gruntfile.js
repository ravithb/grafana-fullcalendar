module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    clean: {
      build: ['dist/**/*'],
      tmp: ['ravithb-tui-calendar-panel*'],
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
        dest: 'dist/'
      },
      externals: {
        cwd: 'src',
        expand: true,
        src: ['**/external/*'],
        dest: 'dist'
      },
      dist_to_tmp: {
        cwd: './',
        expand: true,
        src: ['**/*','!**/node_modules/**','!**/kaushyr-tui-calendar-panel.zip'],
        dest: 'kaushyr-tui-calendar-panel'
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


  });

  grunt.registerTask('default', ['clean:build', 'clean:tmp', 'clean:release', 'copy:src_to_dist', 'copy:pluginDef', 'copy:img_to_dist', 'copy:externals', 'babel', 'clean:release', 'copy:dist_to_tmp', 'clean:tmp']);

};
