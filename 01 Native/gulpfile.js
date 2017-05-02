const os = require('os'),
      gulp = require('gulp'),
      connect = require('gulp-connect'),
      open = require('gulp-open');

const serverOptions = {
    root: 'src',
    port: 9009,
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

gulp.task('copy', () => gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./src/content/third_party/')))

gulp.task('reload', () => gulp.src('./src/**/*').pipe(connect.reload()));

gulp.task('watch', () => gulp.watch(['./src/**/*'], ['reload']));

gulp.task('open', () => gulp.src(__filename).pipe(open(openOptions)));

gulp.task('connect', () => connect.server(serverOptions));

gulp.task('default', ['copy','connect', 'open', 'watch']);
