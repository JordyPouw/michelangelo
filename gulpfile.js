// require gulp.
var gulp = require('gulp');

// task for development.
gulp.task('default', function () {
  gulp.start('kss');
});

// utility function that gets task modules.
function task (task) {
  return require('./gulp_tasks/' + task)(gulp);
}

// task module.
task('kss');
