const os = require('os'),
      gulp = require('gulp'),
      connect = require('gulp-connect'),
      open = require('gulp-open');

const serverOptions = {
    root: 'src',
    port: 9007,
    livereload: true
};

const systemToBrowser = {
  'darwin': 'google chrome',
  'win32': 'chrome',
  'linux': 'google-chrome'
};

const openOptions = {
    uri: `http://localhost:${serverOptions.port}`,
    app: systemToBrowser[os.platform()]
}

gulp.task('reload', () => gulp.src('./src/**/*').pipe(connect.reload()));

gulp.task('watch', () => gulp.watch(['./src/**/*'], ['reload']));

gulp.task('open', () => gulp.src(__filename).pipe(open(openOptions)));

gulp.task('connect', () => connect.server(serverOptions));

gulp.task('default', ['connect', 'open', 'watch']);
