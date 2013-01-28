module.exports = function(grunt) {
  grunt.initConfig({
    yuiConfig: {
      options: {
        dest: 'yui_config.js',
        comboBase: 'my_base_path',
        groups: {
          myGroup: {
            comboBase: 'super/cool/path',
            modules: ['test/fixtures/**/*.js'],
            processPath: function (p) {
              return p.replace('test', 'public');
            },
            excludeFiles: ['test/fixtures/not_me.js']
          }
        }
      }
    }
  });

  grunt.loadTasks('tasks');
};
