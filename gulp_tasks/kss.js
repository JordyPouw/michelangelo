module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  // if OS is Mac.
  if (process.platform === 'darwin') { var open = 'open'; }

  // if OS is Linux.
  else if (process.platform === 'linux') { var open = 'xdg-open'; }

  // if OS is Windows.
  else if (process.platform === 'win32') { var open = 'start'; }

  gulp.task('kss', config.plugins.shell.task([

    'kss --config kss-config.json',
    open + ' kss_styleguide/styleguide/index.html'

  ]));


};